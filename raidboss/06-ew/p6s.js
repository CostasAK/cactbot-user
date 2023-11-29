"use strict";

Options.Triggers.push({
  zoneId: ZoneId.AbyssosTheSixthCircleSavage,
  timeline: [
    '293 "On the Square"',
    '396 "On the Square"',
    '622 "Announce Enrage"',
  ],
  timelineTriggers: [
    {
      id: "P6S On the Square",
      regex: /On the Square/i,
      sound: "../../user/wav/on-the-square.wav",
      soundVolume: 0.5,
      options: {
        SoundAlert: true,
      },
    },
  ],
});

Object.assign(Options.PerTriggerOptions, {
  "P6S Hemitheos's Dark IV": {
    SoundAlert: true,
    SoundOverride: "../../user/wav/kh-darkness-within-darkness.wav",
    VolumeOverride: 0.5,
  },
  "P6S Polyominoid All": {
    SpeechAlert: true,
  },
  "P6S Choros Ixou Front Back": {
    SpeechAlert: true,
    TTSText: "Snorth",
  },
  "P6S Choros Ixou Sides": {
    SpeechAlert: true,
    TTSText: "Weast",
  },
  "P6S Pathogenic Cells Counter": {
    SpeechAlert: true,
  },
  "P6S Exocleaver Move": {
    SoundAlert: true,
    SoundOverride: "../../user/wav/Moooooove.wav",
    VolumeOverride: 0.75,
  },
  "P6S Dark Dome Move": {
    SoundAlert: true,
    SoundOverride: "../../user/wav/Moooooove.wav",
    VolumeOverride: 0.75,
  },
});
