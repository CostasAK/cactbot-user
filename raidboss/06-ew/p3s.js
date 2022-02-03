"use strict";

Options.Triggers.push({
  zoneId: ZoneId.AsphodelosTheSecondCircleSavage,
  timeline: ['588.1 "MT Pull to Center"'],
  timelineTriggers: [
    {
      id: "P3S Wiggle",
      regex: /Heat of Condemnation/i,
      beforeSeconds: 7,
      sound: "../../user/wav/LMFAO Wiggle.wav",
      options: {
        SoundAlert: true,
      },
    },
  ],
});
