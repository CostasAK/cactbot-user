"use strict";

Options.Triggers.push({
  zoneRegex: /.*/,
  triggers: [
    {
      id: "DRK Living Dead",
      type: "Ability",
      netRegex: NetRegexes.ability({
        id: "E36",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.source),
      sound: "../../user/wav/minecraft-zombie-normal2.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "DRK Walking Dead",
      type: "GainsEffect",
      netRegex: NetRegexes.gainsEffect({
        effect: "Walking Dead",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.target),
      sound: "../../user/wav/minecraft-zombie-hurt2.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "GNB Superbolide",
      type: "Ability",
      netRegex: NetRegexes.ability({
        id: "3F18",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.source),
      sound: "../../user/wav/MGS_alert.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "PLD Hallowed Ground",
      type: "Ability",
      netRegex: NetRegexes.ability({
        id: "1E",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.source),
      sound: "../../user/wav/MGS_alert.wav",
      options: {
        SoundAlert: false,
      },
    },
    {
      id: "WAR Holmgang",
      type: "Ability",
      netRegex: NetRegexes.ability({
        id: "2B",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.source),
      sound: "../../user/wav/MGS_alert.wav",
      options: {
        SoundAlert: false,
      },
    },
  ],
});

Object.assign(Options.PerTriggerOptions, {
  "DRK Living Dead": {
    SoundAlert: true,
  },
  "DRK Walking Dead": {
    SoundAlert: true,
  },
  "GNB Superbolide": {
    SoundAlert: true,
  },
  "PLD Hallowed Ground": {
    SoundAlert: true,
  },
  "WAR Holmgang": {
    SoundAlert: true,
  },
});
