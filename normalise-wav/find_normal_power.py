import os
import re
import math
import numpy as np
import pyloudnorm as pyln

from scipy.io import wavfile


path = os.getenv('APPDATA') + '\\anoyetta\\ACT\\tts cache\\'

files = [f for f in os.listdir(path) if re.search(r'^SAPI5\..*\.wav$', f)]


mean_power = list()
mean_loudness = list()

for f in files:
    max_var = 0
    fs, data = wavfile.read(path + f)
    if np.max(data) > np.max(-1*data):
        data = data.astype('float32')/32767.0
    else:
        data = data.astype('float32')/32768.0

    meter = pyln.Meter(fs)  # create BS.1770 meter
    loudness = meter.integrated_loudness(data)  # measure loudness
    mean_loudness.append(loudness)
    print('Loudness: ', loudness)


mean_loudness = np.mean(mean_loudness)
print('meanL: ', mean_loudness)


normal_power = {
    "fs": fs,
    "loudness": mean_loudness
}


np.save('normal_power', normal_power, allow_pickle=True)
