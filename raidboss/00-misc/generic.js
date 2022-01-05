"use strict";

const generic_random_array_element = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

Options.Triggers.push({
  zoneRegex: /.*/,
  triggers: [
    {
      id: "Charybdis",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({
        ability: "(?:Charybdis|Terror Unleashed)",
        capture: false,
      }),
      sound: "../../user/wav/FH-Healthbars-Short.wav",
    },
    {
      id: "Damage Down",
      type: "GainsEffect",
      netRegex: NetRegexes.gainsEffect({
        effect: "(?:Damage Down|Vulnerability Up|Paralysis)",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.target),
      suppressSeconds: 1,
      sound: "../../user/wav/roblox-death-sound.wav",
      soundVolume: 0.5,
    },
  ],
});

Object.assign(Options.PerTriggerOptions, {
  Charybdis: {
    SoundAlert: true,
  },
  "Damage Down": {
    SoundAlert: true,
  },
});
