"use strict";

Options.Triggers.push({
  zoneId: ZoneId.AsphodelosTheFirstCircleSavage,
  triggers: [
    {
      id: "P1S Intemperate Torment",
      type: "Ability",
      netRegex: NetRegexes.ability({
        source: "Erichthonios",
        id: "662[123]",
        ability: "(?:Cold|Hot|Disastrous) Spell",
        capture: false,
      }),
      suppressSeconds: 2,
      sound: "../../user/wav/bigshaq-boom.wav",
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
      sound: "../../user/wav/frank-zappa-i-have-been-in-you_dB-3.wav",
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
      sound: "../../user/wav/captain-america-get-away-get-back_dB-3.wav",
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
    },
  ],
});

Object.assign(Options.PerTriggerOptions, {
  "P1S Intemperate Torment": {
    SoundAlert: true,
  },
  "P1S In and Out": {
    SoundAlert: true,
  },
  "P1S Out and In": {
    SoundAlert: true,
  },
  "P1S Left First": {
    SoundAlert: true,
  },
  "P1S Right First": {
    SoundAlert: true,
  },
  "P1S Left Second": {
    SoundAlert: true,
  },
  "P1S Right Second": {
    SoundAlert: true,
  },
});
