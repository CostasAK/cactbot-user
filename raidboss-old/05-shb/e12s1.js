"use strict";

const getMarkIdE12S1 = (data, matches) => {
  if (typeof data.decOffset === "undefined")
    data.decOffset = parseInt(matches.id, 16) - firstHeadmarker;
  return (parseInt(matches.id, 16) - data.decOffset)
    .toString(16)
    .toUpperCase()
    .padStart(4, "0");
};

Options.Triggers.push({
  zoneRegex: /^Eden's Promise: Eternity \(Savage\)$/,

  timeline: `
      ### My Cooldowns
      ### Party Mitigation
      1 "R2 Mitigation"
      134 "R2 Mitigation"
      360 "R2 Mitigation"
      485 "R2 Mitigation"
      10 "T1 Reprisal"
      74 "T1 Reprisal"
      134 "T1 Reprisal"
      194 "T1 Reprisal"
      263 "T1 Reprisal"
      323 "T1 Reprisal"
      394 "T1 Reprisal"
      460 "T1 Reprisal"
      82 "T1 Mitigation"
      172 "T1 Mitigation"
      262 "T1 Mitigation"
      352 "T1 Mitigation"
      442 "T1 Mitigation"
      34 "T2 Reprisal"
      100 "T2 Reprisal"
      174 "T2 Reprisal"
      234 "T2 Reprisal"
      294 "T2 Reprisal"
      362 "T2 Reprisal"
      430 "T2 Reprisal"
      32 "T2 Mitigation"
      133 "T2 Mitigation"
      227 "T2 Mitigation"
      317 "T2 Mitigation"
      425 "T2 Mitigation"
    `,

  triggers: [
    {
      // Headmarkers are randomized, so use a generic headMarker regex with no criteria.
      id: "E12S1 Blue Bombs",
      netRegex: NetRegexes.headMarker({}),
      condition: (data) => data.isDoorBoss,
      tts: (data, matches) => {
        const mark_id = getMarkIdE12S1(data, matches);
        data.seenSecondBombs = data.seenSecondBombs || false;

        if (
          mark_id === "00BB" &&
          data.seenFirstBombs &&
          !data.seenSecondBombs
        ) {
          data.blueTargets = data.blueTargets || [];
          data.blueTargets.push(matches.target);

          // Handle double blue titan on 2nd iteration.
          if (data.blueTargets.length === 2 && !data.seenSecondBombs) {
            data.seenSecondBombs = true;

            const priorityList = [
              "Tymo Aimali",
              "Ahmed Sins",
              "Gust Leonard",
              "Tali Lamora",
              "Shiroe Enchanter",
              "Yuki Kimura",
              "Tannie Kleinvoetjies",
              "Marielle Maru",
            ];

            if (
              priorityList.indexOf(data.blueTargets[0]) <
              priorityList.indexOf(data.blueTargets[1])
            ) {
              return (
                data.ShortName(data.blueTargets[0]) +
                " North, " +
                data.ShortName(data.blueTargets[1]) +
                " South"
              );
            }
            return (
              data.ShortName(data.blueTargets[1]) +
              " North, " +
              data.ShortName(data.blueTargets[0]) +
              " South"
            );
          }
        }
      },
    },
    {
      id: "E12S1 Weight Cleanup",
      netRegex: NetRegexes.startsUsing({
        source: "Eden's Promise",
        id: "58A5",
        capture: false,
      }),
      run: (data) => {
        delete data.blueTargets;
      },
    },
  ],
});

Object.assign(Options.PerTriggerOptions, {
  "E12S Promise Cast Release": {
    SpeechAlert: true,
  },
  "E12S1 Blue Bombs": {
    SpeechAlert: true,
  },
});
