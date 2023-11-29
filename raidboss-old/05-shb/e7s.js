'use strict'

// eslint-disable-next-line no-undef
Options.Triggers = Options.Triggers.concat([{
  zoneRegex: /^Eden's Verse: Iconoclasm \(Savage\)$/,

  timeline: `
  ### Party Mitigation
  1 "R1 Mitigation"
  119 "R2 Mitigation"
  134 "R1 Mitigation"
  310 "R2 Mitigation"
  496 "R1 Mitigation"
  609 "R2 Mitigation"
  630 "R1 Mitigation"
  732 "R2 Mitigation"
  810 "R1 Mitigation"
  1 "T1 Mitigation"
  5 "T2 Mitigation"
  121 "T1 Mitigation"
  130 "T2 Mitigation"
  220 "T1 Mitigation"
  220 "T2 Mitigation"
  310 "T2 Mitigation"
  496 "T1 Mitigation"
  560 "T2 Mitigation"
  610 "T1 Mitigation"
  663 "T2 Mitigation"
  732 "T1 Mitigation"
  810 "T2 Mitigation"

  ### Reminders
  660 "Mark Macro"
  529 "Entrapment Prep"
  536 "Entrapment Bait"
  541 "Entrapment DPS"
`,

  timelineTriggers: [{
    id: 'E7S Macro',
    regex: /(Mark Macro)/,
    suppressSeconds: 3
  },
  {
    id: 'E7S Entrapment Prep',
    regex: /(Entrapment Prep)/,
    suppressSeconds: 3
  },
  {
    id: 'E7S Entrapment Bait',
    regex: /(Entrapment Bait)/,
    suppressSeconds: 3
  },
  {
    id: 'E7S Entrapment DPS',
    regex: /(Entrapment DPS)/,
    suppressSeconds: 3
  }
  ],

  triggers: [{
    id: 'E7S Color Gust',
    regex: /You suffer the effect of ([A-z]+) Effect/,
    run: function (data, matches) {
      data.colorGust = matches[1]
    }
  },
  {
    id: 'E7S Color Tannie',
    regex: /Tannie Kleinvoetjies suffers the effect of ([A-z]+) Effect/,
    run: function (data, matches) {
      data.colorTannie = matches[1]
    }
  }
  ]
}])

// eslint-disable-next-line no-undef
Object.assign(Options.PerTriggerOptions, {
  'E7S Macro': {
    AlertText: 'Press the Mark Macro'
  },
  'E7S Entrapment Prep': {
    SpeechAlert: true,
    TTSText: 'Tanks D, Healers B, DPS centre. '
  },
  'E7S Entrapment Bait': {
    SpeechAlert: false,
    TTSText: 'Tanks and Healers bait tethers. DPS wait. '
  },
  'E7S Entrapment DPS': {
    SpeechAlert: true,
    AlertText: function (data) {
      if (data.colorTannie === data.colorGust) {
        return 'Shihro North'
      }
      return 'Shihro South'
    },
    TTSText: function (data) {
      if (data.colorTannie === data.colorGust) {
        return 'Shihro North. DPS to puddles. '
      }
      return 'Shihro South. DPS to puddles. '
    }
  }
})
