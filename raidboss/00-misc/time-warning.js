"use strict";

const time_warning_voices = {
  5: [
    "UT2k4-Sexy-FiveMinuteWarning.wav",
    "UT2k3-Main-5_minute_warning.wav",
    "UT2k4-Female-5_minute_warning.wav",
    "UT2k4-Male-5_minute_warning.wav",
  ],
  3: [
    "UT2k4-Sexy-ThreeMinutesLeft.wav",
    "UT2k3-Main-3_minutes_remain.wav",
    "UT2k4-Female-3_minutes_remain.wav",
    "UT2k4-Male-3_minutes_remain.wav",
  ],
  2: [
    "UT2k4-Sexy-TwoMinutesRemain.wav",
    "UT2k3-Main-2_minutes_remain.wav",
    "UT2k4-Female-2_minutes_remain.wav",
    "UT2k4-Male-2_minutes_remain.wav",
  ],
  1: [
    "UT2k4-Sexy-OneMinuteRemains.wav",
    "UT2k3-Main-1_minute_remains.wav",
    "UT2k4-Female-1_minute_remains.wav",
    "UT2k4-Male-1_minute_remains.wav",
  ],
};

const random_array_element = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

Options.Triggers.push({
  zoneRegex: /.*/,
  triggers: [
    {
      id: "Duty Timer Warning",
      type: "GameLog",
      netRegex: NetRegexes.gameLog({
        code: "0839",
        line: "(?<remaining>[\\dA-z]{1-9}) minutes? remaining to complete.*?",
        capture: true,
      }),
      tts: (_, matches) =>
        matches.remaining.match(/^(?:10|ten)$/i) ? "Ten minutes remaining" : "",
      sound: (_, matches) =>
        "../../user/wav/" +
        (matches.remaining.match(/^(?:5|five)$/i)
          ? random_array_element(time_warning_voices[5])
          : matches.remaining.match(/^(?:3|three)$/i)
          ? random_array_element(time_warning_voices[3])
          : matches.remaining.match(/^(?:2|two)$/i)
          ? random_array_element(time_warning_voices[2])
          : matches.remaining.match(/^(?:1|one)$/i)
          ? random_array_element(time_warning_voices[1])
          : ""),
      options: {
        SpeechAlert: true,
        SoundAlert: true,
      },
    },
    {
      id: "AFK Timer Warning 1",
      type: "GameLog",
      netRegex: NetRegexes.gameLog({
        code: "0..9",
        line: "\\d{1,2} minutes have elapsed since your last activity. If you are inactive for \\d+ minutes, you will be expelled from the duty.*?",
        capture: false,
      }),
      sound: "../../user/wav/D.Va_-_AFK.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "AFK Timer Warning 2",
      type: "GameLog",
      netRegex: NetRegexes.gameLog({
        code: "0..9",
        line: "(?<elapsed>\\d{1,2}) minutes have elapsed since your last activity. If you are inactive for (?<total>\\d+) minutes, you will be expelled from the duty.*?",
        capture: true,
      }),
      delaySeconds: 2,
      sound: (_, matches) => {
        let remaining = matches.total - matches.elapsed;
        return (
          "../../user/wav/" +
          (remaining === 5
            ? random_array_element(time_warning_voices[5])
            : remaining === 3
            ? random_array_element(time_warning_voices[3])
            : remaining === 2
            ? random_array_element(time_warning_voices[2])
            : remaining === 1
            ? random_array_element(time_warning_voices[1])
            : "")
        );
      },
      options: {
        SoundAlert: true,
      },
    },
  ],
});
