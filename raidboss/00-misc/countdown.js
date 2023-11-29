"use strict";

const countdown_voice_sets = [
  {
    10: "UT2k4-Sexy-Ten.wav",
    5: "UT2k4-Sexy-Five.wav",
    0: "UT2k4-Sexy-Play.wav",
  },
  {
    10: "UT2k3-Evil-Ten.wav",
    5: "UT2k3-Evil-Five.wav",
    0: "UT2k3-Main-Play.wav",
  },
  {
    10: "UT2k3-Main-Ten.wav",
    5: "UT2k3-Main-Five.wav",
    0: "UT2k3-Main-Play.wav",
  },
  {
    10: "UT2k4-Female-ten.wav",
    5: "UT2k4-Female-five.wav",
    0: "UT2k4-Female-Play.wav",
  },
  {
    10: "UT2k4-Male-ten.wav",
    5: "UT2k4-Male-five.wav",
    0: "UT2k4-Male-Play.wav",
  },
];

var countdown_voice_set = 0;
const new_countdown_voice_set = () =>
  (countdown_voice_set = Options.UserFunctions.random_integer(
    countdown_voice_sets.length
  ));
new_countdown_voice_set();

Options.Triggers.push({
  zoneRegex: /.*/,
  triggers: [
    {
      id: "Countdown Long",
      type: "GameLog",
      netRegex: NetRegexes.gameLog({
        code: "0[01][3B]9",
        line: "Battle commencing in (?<length>\\d{1,2}) seconds! \\(.*?",
        capture: true,
      }),
      condition: (_, matches) => matches.length >= 14,
      infoText: (_, matches) => matches.length + " second countdown started",
      tts: (_, matches) => matches.length + " second countdown started",
    },
    {
      id: "Countdown 10",
      type: "GameLog",
      netRegex: NetRegexes.gameLog({
        code: "0[01][3B]9",
        line: "Battle commencing in (?<length>\\d{1,2}) seconds! \\(.*?",
        capture: true,
      }),
      condition: (_, matches) => matches.length >= 10,
      delaySeconds: (_, matches) => Math.max(matches.length - 10 - 0.25, 0),
      sound: () =>
        "../../user/wav/" + countdown_voice_sets[countdown_voice_set][10],
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "Countdown 5",
      type: "GameLog",
      netRegex: NetRegexes.gameLog({
        code: "0[01][3B]9",
        line: "Battle commencing in (?<length>\\d{1,2}) seconds! \\(.*?",
        capture: true,
      }),
      delaySeconds: (_, matches) => Math.max(matches.length - 5 - 0.25, 0),
      sound: () =>
        "../../user/wav/" + countdown_voice_sets[countdown_voice_set][5],
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "Countdown 0",
      type: "GameLog",
      netRegex: NetRegexes.gameLog({
        code: "0039",
        line: "Engage!",
        capture: false,
      }),
      sound: () =>
        "../../user/wav/" + countdown_voice_sets[countdown_voice_set][0],
      run: () => new_countdown_voice_set(),
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "Countdown Cancelled",
      type: "GameLog",
      netRegex: NetRegexes.gameLog({
        code: "0[01][3B]9",
        line: "Countdown canceled.*?",
        capture: false,
      }),
      tts: "countdown cancelled, countdown cancelled",
      options: {
        SpeechAlert: true,
      },
    },
  ],
});
