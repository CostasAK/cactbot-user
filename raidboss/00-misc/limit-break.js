"use strict";

const random_array_element = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

Options.Triggers.push({
  zoneRegex: /.*/,
  triggers: [
    {
      id: "DNC Limit Break",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({
        id: "42D2",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.source),
      sound: "../../user/wav/frank-zappa-dancin-fool.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "NIN Limit Break Start",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({
        id: "1093",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.source),
      sound: "../../user/wav/English is Hard 1.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "NIN Limit Break Cast",
      type: "Ability",
      netRegex: NetRegexes.ability({
        id: "1093",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.source),
      sound: "../../user/wav/English is Hard 2.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "SAM Limit Break Start",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({
        id: "1EB5",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.source),
      sound:
        "../../user/wav/i-have-the-power-of-god-and-anime-on-my-side-1.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "SAM Limit Break Cast",
      type: "Ability",
      netRegex: NetRegexes.ability({
        id: "1EB5",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.source),
      sound:
        "../../user/wav/i-have-the-power-of-god-and-anime-on-my-side-2.wav",
      options: {
        SoundAlert: true,
      },
    },
  ],
});
