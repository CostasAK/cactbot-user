"use strict";

Options.Triggers.push({
  zoneId: ZoneId.AsphodelosTheThirdCircleSavage,
  timeline: ['883.7 "Announce Enrage"'],
  timelineTriggers: [
    {
      id: "P3S Wiggle",
      regex: /Heat of Condemnation/i,
      beforeSeconds: 7,
      sound: "../../user/wav/LMFAO Wiggle.wav",
      soundVolume: 0.71,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "P3S Firestorms to Center",
      regex: /Firestorms of Asphodelos/i,
      beforeSeconds: 17,
      tts: "Pull to Center",
      options: {
        SpeechAlert: false,
      },
    },
    {
      id: "P3S Firestorms Help",
      regex: /Firestorms of Asphodelos/i,
      tts: "Heal and Melee North, Tank and Ranged South",
      options: {
        SpeechAlert: false,
      },
    },
  ],
  triggers: [
    {
      id: "P3S Gloryplume 2",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({
        id: "66C6",
        source: "Phoinix",
      }),
      tts: "Bait Middle. Then, Tank Melee North, Heal Ranged South",
      options: {
        SpeechAlert: false,
      },
    },
  ],
});
