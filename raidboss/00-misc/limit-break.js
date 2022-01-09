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
  ],
});
