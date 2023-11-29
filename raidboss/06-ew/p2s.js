"use strict";

Options.Triggers.push({
  zoneId: ZoneId.AsphodelosTheSecondCircleSavage,
  timeline: ['611.7 "Announce Enrage"'],
  triggers: [
    {
      id: "P2S Tankbuster Help",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({
        id: "6832",
        source: "Hippokampos",
        capture: true,
      }),
      condition: (data, matches) => data.no_invuln.includes(matches.target),
      sound: Options.UserResponses.help,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "P2S Pitiless Flail on Non-Tank",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({
        id: "6832",
        source: "Hippokampos",
        capture: true,
      }),
      condition: (data, matches) => !data.party.isTank(matches.target),
      sound: "../../user/wav/southpark-are-you-gonna-rape-us.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "P2S Delayed Stacks",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({
        id: "682A",
        source: "Hippokampos",
        capture: false,
      }),
      suppressSeconds: 1,
      sound: () =>
        "../../user/wav/wait-for-it" + Math.floor(Math.random() * 37) + ".wav",
      soundVolume: 0.5,
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
      delaySeconds: 14,
      sound: "../../user/wav/Haruhi - Mikuru Beam.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "P2S Knockback",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({
        id: "682F",
        source: "Hippokampos",
        capture: false,
      }),
      delaySeconds: 2,
      sound: "../../user/wav/bofuri-knockback.wav",
      options: {
        SoundAlert: true,
      },
    },
  ],
});
