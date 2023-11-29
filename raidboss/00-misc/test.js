'use strict'

// Pre-raid Check
Options.Triggers.push({
  zoneRegex: /Barracks$/,
  timeline: `
    0 "--Reset--" sync /You bid farewell to the flame squadron sergeant/ window 10000 jump 0
    0 "Start" sync /:You bow courteously to the flame squadron sergeant/ window 0,1
    0 "--Reset--" sync /You bid farewell to the serpent squadron sergeant/ window 10000 jump 0
    0 "Start" sync /:You bow courteously to the serpent squadron sergeant/ window 0,1
    3 "Double Call-outs Test"
  `,

  timelineTriggers: [
    {
      id: "Double Test",
      regex: /(Double Call-outs Test)/,
      infoText: "Please tell me if I am repeating myself",
      tts: "Testing testing",
    },
  ],
});

Object.assign(Options.PerTriggerOptions, {
  "Double Test": {
    SpeechAlert: true,
  },
});
