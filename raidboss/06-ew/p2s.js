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
      condition: (data, matches) => !data.party.isTank(matches.target)
      sound: "../../user/wave/southpark-are-you-gonna-rape-us.wav",
      options: {
        SoundAlert: true,
      },
    },
  ],
});
