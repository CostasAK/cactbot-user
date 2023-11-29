"use strict";

Options.Triggers = Options.Triggers.concat([
  {
    zoneRegex: /^Eden's Verse: Fulmination \(Savage\)$/,

    timeline: `
    7 "R1 Mitigation"
    7 "T2 Mitigation"
    60 "R2 Mitigation"
    60 "T1 Mitigation"
    140 "R1 Mitigation"
    140 "T2 Mitigation"
    211 "R2 Mitigation"
    211 "T1 Mitigation"
    305 "R1 Mitigation"
    305 "T2 Mitigation"
    353 "R2 Mitigation"
    353 "T1 Mitigation"
    440 "R1 Mitigation"
    440 "T2 Mitigation"
    512 "R2 Mitigation"
    512 "T1 Mitigation"
    560 "R1 Mitigation"
    580 "T2 Mitigation"
  `,

    timelineTriggers: [
      {
        id: "E5S Cloud Positions",
        regex: /(Stormcloud Summons)/,
        beforeSeconds: 7,
      },
    ],
  },
]);

Object.assign(Options.PerTriggerOptions, {
  "E5S Tribunal Summons": {
    SpeechAlert: true,
    TTSText: function(data) {
      if (!data.seenFirstAdd) {
        if (data.furysBoltActive) {
          return "Big Knockback";
        }
        return "Short Knockback";
      }
    },
  },
  "E5S Fury's Bolt": {
    SpeechAlert: true,
    TTSText: function(data) {
      // Fury's Bolt + Stepped Leader doesn't require an orb
      if (!data.steppedLeaderNext) {
        return "Grab orb";
      }
    },
  },
  "E5S Fury's Fourteen": {
    SpeechAlert: true,
    TTSText: "Grab orb, prepare to line up",
  },
  "E5S Stepped Leader": {
    SpeechAlert: false,
    TTSText: function(data) {
      if (!data.furysBoltActive) {
        return "Ready Twisters";
      }
      return "donuts";
    },
  },
  "E5S Stepped Leader Spread": {
    SpeechAlert: false,
    TTSText: "Go",
  },
  "E5S Cloud Positions": {
    SpeechAlert: true,
    TTSText: "Cloud Positions, tank and melee one orb",
  },
  "E5S Chain Lightning": {
    SpeechAlert: true,
    TTSText: "Prepare for chains",
  },
  "E5S Levinforce": {
    SpeechAlert: false,
    TTSText: "Knockback",
  },
});
