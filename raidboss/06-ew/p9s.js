"use strict";

Options.Triggers.push({
  zoneId: ZoneId.AnabaseiosTheNinthCircleSavage,
});

Object.assign(Options.PerTriggerOptions, {
  "P9S Dualspell Fire/Ice": {
    SpeechAlert: true,
    TTSText: "Partners",
  },
  "P9S Dualspell Thunder/Ice": {
    SpeechAlert: true,
    TTSText: "Protean",
  },
  "P9S Fire Symbol": {
    SoundAlert: true,
    SoundOverride: "../../user/wav/captain-america-get-away.wav",
    VolumeOverride: 1,
  },
  "P9S Ice Symbol": {
    SpeechAlert: true,
  },
  "P9S Thunder Symbol": {
    SoundAlert: true,
    SoundOverride: "../../user/wav/captain-america-get-away.wav",
    VolumeOverride: 1,
  },
  "P9S Archaic Rockbreaker": {
    SoundAlert: true,
    SoundOverride: "../../user/wav/bofuri-knockback.wav",
    VolumeOverride: 1,
  },
  "P9S Front Inside Combination": {
    SpeechAlert: true,
  },
  "P9S Front Outside Combination": {
    SpeechAlert: true,
  },
  "P9S Rear Inside Roundhouse": {
    SpeechAlert: true,
  },
  "P9S Rear Outside Roundhouse": {
    SpeechAlert: true,
  },
  "P9S Roundhouse Followup": {
    SpeechAlert: true,
  },
  "P9S Front Firestrikes": {
    SpeechAlert: true,
  },
  "P9S Rear Firestrikes": {
    SpeechAlert: true,
  },
  "P9S Archaic Demolish": {
    SpeechAlert: true,
    TTSText: "Stacky's",
  },
});
