"use strict";

Options.Triggers = Options.Triggers.concat([{
  zoneRegex: /^The Epic [Oo]f Alexander \(Ultimate\)$/,

  timeline: `
  15 "Dark Missionary"
  15 "DNC Shield Samba"
  15 "Tali Reprisal"
  72 "Ahmed Reprisal"
  72 "MCH Tactician"
  77 "Heart of Light"
  82 "Tali Reprisal"
  130 "Focus LL"
  `,

  timelineTriggers: [{
      id: 'TEA Hand of Baiting',
      regex: /Hand of Prayer\/Parting/,
      beforeSeconds: 5,
      suppressSeconds: 1,
    },

    {
      id: 'TEA Embolus',
      regex: /Embolus/,
      suppressSeconds: 1
    },

    {
      id: 'TEA TankHeal Waves',
      regex: /Protean Wave 2/,
      beforeSeconds: 2,
      suppressSeconds: 1
    },

    {
      id: 'TEA DPS Waves',
      regex: /Protean Wave 3/,
      beforeSeconds: 3,
      suppressSeconds: 1
    },

    {
      id: 'TEA Focus LL',
      regex: /Focus LL/,
      suppressSeconds: 1
    }
  ]
}]);

Object.assign(Options.PerTriggerOptions, {
  'TEA Fluid Swing': {
    SpeechAlert: true,
    TTSText: 'Cleave'
  },

  'TEA Hand of Baiting': {
    SpeechAlert: true,
    TTSText: 'Separate'
  },

  'TEA Embolus': {
    SpeechAlert: true,
    TTSText: 'Move bosses'
  },

  'TEA TankHeal Waves': {
    SpeechAlert: true,
    TTSText: 'Tank heal waves'
  },

  'TEA DPS Waves': {
    SpeechAlert: true,
    TTSText: 'DPS waves'
  },

  'TEA Focus LL': {
    SpeechAlert: true,
    TTSText: 'Switch to, and Kill Living Liquid'
  }
});