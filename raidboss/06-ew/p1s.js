"use strict";

Options.Triggers.push({
  zoneId: ZoneId.AsphodelosTheFirstCircleSavage,
  timeline: ['1171.2 "Announce Enrage"'],
  triggers: [
    {
      id: "P1S Intemperate Torment",
      type: "Ability",
      netRegex: NetRegexes.ability({
        source: "Erichthonios",
        id: "662[123]",
        capture: false,
      }),
      suppressSeconds: 2,
      sound: "../../user/wav/bigshaq-boom.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "P1S In and Out",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({
        source: "Erichthonios",
        id: ["65FA", "65FB"],
        capture: false,
      }),
      delaySeconds: 2,
      sound: "../../user/wav/frank-zappa-i-have-been-in-you.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "P1S Out and In",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({
        source: "Erichthonios",
        id: ["65F8", "65F9"],
        capture: false,
      }),
      delaySeconds: 2,
      sound: "../../user/wav/captain-america-get-away-get-back.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "P1S Left First",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({
        source: "Erichthonios",
        id: "65F6",
        capture: false,
      }),
      delaySeconds: 2,
      sound: "../../user/wav/Beyoncé - to the left.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "P1S Left Second",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({
        source: "Erichthonios",
        id: "65F7",
        capture: false,
      }),
      delaySeconds: 11,
      sound: "../../user/wav/Beyoncé - to the left.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "P1S Right First",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({
        source: "Erichthonios",
        id: "65F7",
        capture: false,
      }),
      delaySeconds: 2,
      sound: "../../user/wav/Cha-Cha Slide - slide to the right.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "P1S Right Second",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({
        source: "Erichthonios",
        id: "65F6",
        capture: false,
      }),
      delaySeconds: 11,
      sound: "../../user/wav/Cha-Cha Slide - slide to the right.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "P1S Pitiless Flail Help",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({
        id: "660E|660F",
        source: "Erichthonios",
        capture: true,
      }),
      condition: (data, matches) => data.no_invuln.includes(matches.target),
      sound: Options.UserResponses.help,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "P1S Pitiless Flail Beam",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({
        id: "660E|660F",
        source: "Erichthonios",
        capture: false,
      }),
      delaySeconds: 3,
      sound: "../../user/wav/Haruhi - Mikuru Beam.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "P1S Pitiless Flail on Non-Tank",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({
        id: "6629|660E|660F",
        source: "Erichthonios",
        capture: true,
      }),
      condition: (data, matches) => !data.party.isTank(matches.target),
      sound: "../../user/wav/southpark-are-you-gonna-rape-us.wav",
      options: {
        SoundAlert: true,
      },
    },
  ],
});
