"use strict";

const cleared = true;

const pos2dir = (matches) => {
  const y = parseFloat(matches.y) + 75;
  const x = parseFloat(matches.x);
  // Map NW = 0, N = 1, ..., W = 7
  return Math.round(5 - (4 * Math.atan2(x, y)) / Math.PI) % 8;
};

// Convert dir to Output
const dir2mark = (dir) => {
  const dirs = {
    0: "4",
    1: "A, I'm walkin ear",
    2: "1 Direction",
    3: "B Boob",
    4: "2",
    5: "C, how they massacred my boy",
    6: "3",
    7: "D, ease nuts",
  };
  return dirs[dir];
};

const card2mark = (card) => {
  const cards = {
    North: "A, I'm walkin ear",
    East: "B Boob",
    South: "C, how they massacred my boy",
    West: "D, ease nuts",
  };
  return cards[card];
};

const isMelee = (party, name) => {
  party.details.forEach((p) => {
    if (p.name === name) return Util.isMeleeDpsJob(Util.jobEnumToJob(p.job));
  });
};

Options.Triggers.push({
  zoneId: ZoneId.EdensPromiseEternitySavage,

  timeline: `
      ### My Cooldowns
      ### Party Mitigation
      1014 "T2 Reprisal"
      1045 "T1 Reprisal"
      1075 "T2 Reprisal"
      1074 "T2 Mitigation"
      1090 "T1 Mitigation"
      1097 "R2 Mitigation"
      1115 "T1 Reprisal"
      1140 "T2 Reprisal"
      1181 "T1 Reprisal"
      1183 "T2 Mitigation"
      1200 "T2 Reprisal"
      1215 "T1 Mitigation"
      1221 "R2 Mitigation"
      1241 "T1 Reprisal"
      1260 "T2 Reprisal"
      1310 "T1 Reprisal"
      1308 "T2 Mitigation"
      1345 "T1 Mitigation"
      1323 "T2 Reprisal"
      1344 "R2 Mitigation"
      1376 "T1 Reprisal"
      1388 "T2 Reprisal"
      1412 "T2 Mitigation"
      1436 "T1 Reprisal"
      1467 "R2 Mitigation"
      1470 "T1 Mitigation"
      1477 "T2 Reprisal"
      1503 "T1 Reprisal"
      1502 "T2 Mitigation"
    `,

  triggers: [
    {
      id: "E12S2 Basic Relativity Melee Switch",
      netRegex: NetRegexes.gainsEffect({ effectId: "997" }),
      condition: (data) => data.phase === "basic",
      preRun: (data, matches) => {
        data.darkfire = data.darkfire || [];
        data.darkfire.push(matches.target);
      },
      alertText: (data) => {
        if (data.darkfire.length < 2) return;
        if (
          (data.darkfire.includes("Shiroe Enchanter") &&
            data.darkfire.includes("Marielle Maru")) ||
          (data.darkfire.includes("Yuki Kimura") &&
            data.darkfire.includes("Tannie Kleinvoetjies"))
        ) {
          delete data.darkfire;
          return "Melee adjust";
        }
      },
    },
    {
      id: "E12S2 Advanced Relativity Melee Switch",
      netRegex: NetRegexes.gainsEffect({ effectId: "998" }),
      condition: (data) => data.phase === "advanced",
      preRun: (data, matches) => {
        data.shadoweyes = data.shadoweyes || [];
        data.shadoweyes.push(matches.target);
      },
      alertText: (data) => {
        if (data.shadoweyes.length < 2) return;
        if (
          (data.shadoweyes.includes("Shiroe Enchanter") &&
            data.shadoweyes.includes("Marielle Maru")) ||
          (data.shadoweyes.includes("Yuki Kimura") &&
            data.shadoweyes.includes("Tannie Kleinvoetjies"))
        ) {
          delete data.shadoweyes;
          return "Melee adjust";
        }
      },
    },
  ],
});

Object.assign(Options.PerTriggerOptions, {
  "E12S Basic Relativity Yellow Hourglass": {
    SpeechAlert: cleared,
    InfoText: (_data, matches) => {
      return "Yellow at " + dir2mark(pos2dir(matches));
    },
  },
  "E12S Oracle Cataclysm": {
    SpeechAlert: cleared,
    InfoText: (data, _matches, output) =>
      !data.safeZone ? "" : card2mark(data.safeZone) + ", go far",
  },
  "E12S2 Basic Relativity Melee Switch": {
    SpeechAlert: cleared,
  },
  "E12S2 Advanced Relativity Melee Switch": {
    SpeechAlert: cleared,
  },
});
