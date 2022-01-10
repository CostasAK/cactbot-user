"use strict";

Options.Triggers.push({
  zoneId: ZoneId.AsphodelosTheSecondCircleSavage,
  triggers: [
    {
      id: "P2S Pitiless Flail on Non-Tank",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({
        id: "6832",
        source: "Hippokampos",
        capture: true,
      }),
      condition: (data, matches) => !data.party.isTank(matches.target),
      sound: "../../user/wave/southpark-are-you-gonna-rape-us.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "P2S Delayed Stacks",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({
        id: "682B",
        source: "Hippokampos",
        capture: false,
      }),
      suppressSeconds: 1,
      sound: () =>
        "../../user/wave/wait-for-it" + Math.floor(Math.random() * 37) + ".wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "P2S Coherence Beam",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({
        id: "681B",
        source: "Hippokampos",
        capture: false,
      }),
      delaySeconds: 10,
      sound: "../../user/wave/Haruhi - Mikuru Beam.wav",
      options: {
        SoundAlert: true,
      },
    },
  ],
});
