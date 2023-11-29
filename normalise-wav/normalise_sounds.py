import os
import re
import math
import numpy as np
import pyloudnorm as pyln
from pathlib import Path

from scipy.io import wavfile


root_path = Path("../wav/")
minimum_length = 712e-3


def makeWaveFloating(data):
    if data.dtype == np.dtype("uint8"):
        data = ((data.astype("float32") / 255.0) * 2) - 1
    elif data.dtype == np.dtype("int16"):
        if np.max(data) > np.max(-1 * data):
            data = data.astype("float32") / 32767.0
        else:
            data = data.astype("float32") / 32768.0
    elif data.dtype == np.dtype("int32"):
        if np.max(data) > np.max(-1 * data):
            data = data.astype("float32") / 2147483647.0
        else:
            data = data.astype("float32") / 2147483648.0

    return data


def makeWavePCM(data):
    if np.max(data) > np.max(-1 * data):
        data = (data * 32767).astype("int16")
    else:
        data = (data * 32768).astype("int16")

    return data


def normaliseWave(data, fs, target, adjustment):
    meter = pyln.Meter(fs)  # create BS.1770 meter
    loudness = meter.integrated_loudness(data)  # measure loudness

    if abs(loudness - (target + adjustment)) > 0.015:
        print("\n" + "Adjustment: " + str(target + adjustment - loudness) + " dB")
        data = pyln.normalize.loudness(data, loudness, target + adjustment)

    return data


##############
#    MAIN    #
##############

# Average power for a given window length, based on TTS Eva at max volume.
normal_power = np.load("normal_power.npy", allow_pickle=True).item()
fs_tts = normal_power["fs"]
normal_loudness = normal_power["loudness"]

for (dirpath, _, filenames) in os.walk(root_path):
    files = [f for f in filenames if re.search(r"^.*\.wav$", f)]
    for f in files:
        if re.match(r"(_.*|alarm|mute|chime\d{2}|onepoint\d{2}|Sasara_.*|system\d{2}).wav$", f):
            continue
        path = Path(dirpath)  # + "\\"

        fs, data = wavfile.read(path / f)
        data = makeWaveFloating(data)

        # Make Mono
        if len(data.shape) > 1:
            data = np.mean(data, axis=1)

        # Make longer if needed
        min_smp = int(math.ceil(fs * minimum_length))
        if len(data) < min_smp:
            data = np.pad(data, (0, min_smp - len(data)), mode="constant", constant_values=(0, 0))

        # find rp
        # r = re.match(r".*_dB([+\-]{0,1}[0-9]+)\.wav$", f)
        # if r:
        #     rp = int(r.group(1))
        # else:
        rp = -6

        data_new = normaliseWave(data, fs, normal_loudness, rp)

        if not (data.all == data_new.all):
            print(path / f)
            data_new = makeWavePCM(data_new)
            wavfile.write(path / f, fs, data_new)
