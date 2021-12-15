'use strict'

Options.Triggers = Options.Triggers.concat([{ // eslint-disable-line no-undef
  zoneRegex: /^Eden's Verse: Furor \(Savage\)$/,

  timeline: `
    10 "R1 Mitigation"
    10 "T2 Mitigation"
    29 "R2 Mitigation"
    30 "T1 Mitigation"
    155 "R1 Mitigation"
    155 "T2 Mitigation"
    208 "R2 Mitigation"
    209 "T1 Mitigation"
    306 "R1 Mitigation"
    306 "T2 Mitigation"
    368 "R2 Mitigation"
    369 "T1 Mitigation"
    445 "R1 Mitigation"
    445 "T2 Mitigation"
    493 "R2 Mitigation"
    494 "T1 Mitigation"
    122 "MT Pull to Center"
    132 "Tank Swap"
    139 "T1 Invuln"
    199 "MT Pull to Center"
    214 "T1 MT"
    220 "Tank Swap"
    320 "MT Pull to Center"
    344 "MT Pull to Center"
    408 "Ahmed Stop"
    410 "Tank Swap"
    458 "T1 Invuln"
    548 "T1 MT"
    553 "Tank Swap"
    559 "T2 Invuln"
  `,

  timelineTriggers: [{
    id: 'E6S Ahmed Stop',
    regex: /(Ahmed Stop)/
  }],

  triggers: [{
    id: 'E6S Chains',
    // eslint-disable-next-line no-useless-escape
    regex: /23:10[0-9A-F]{6}:(\y{Name}):10[0-9A-F]{6}:(\y{Name}):0000:0000:006C:/,
    condition: function (matches) {
      return matches[1] === 'Ahmed Sins' || matches[2] === 'Ahmed Sins' || matches[1] === 'Tali Lamora' || matches[2] === 'Tali Lamora' || matches[1] === 'Yuki Kimura' || matches[2] === 'Yuki Kimura'
    },
    tts: function (data, matches) {
      if (matches[1] === 'Ahmed Sins') {
        return data.ShortName(matches[2]) + ' North. '
      } else if (matches[2] === 'Ahmed Sins') {
        return data.ShortName(matches[1]) + ' North. '
      } else if (matches[1] === 'Tali Lamora') {
        return data.ShortName(matches[2]) + ' South. '
      } else if (matches[2] === 'Tali Lamora') {
        return data.ShortName(matches[1]) + ' South. '
      } else if (matches[1] === 'Yuki Kimura') {
        if (matches[2] === 'Shiroe Enchanter') {
          return 'Brothers. '
        }
        return data.ShortName(matches[2]) + ' with Yuki. '
      } else if (matches[2] === 'Yuki Kimura') {
        if (matches[1] === 'Shiroe Enchanter') {
          return 'Brothers. '
        }
        return data.ShortName(matches[1]) + ' with Yuki. '
      }
    }
  }]
}])

Object.assign(Options.PerTriggerOptions, { // eslint-disable-line no-undef
  'E6S Ahmed Stop': {
    SpeechAlert: true,
    TTSText: 'Ahmed stay. When attacked by bear, do not shit pants'
  },
  'E6S Ferostorm': {
    SpeechAlert: true,
    TTSText: 'Ferostorm'
  },
  'E6S Meteor Strike': {
    SpeechAlert: true,
    TTSText: 'Behind'
  },
  'E6S Chains': {
    SpeechAlert: false
  },
  'E6S Conflag Strike Behind': {
    SpeechAlert: true,
    TTSText: 'Behind'
  },
  'E6S Strike Spark': {
    SpeechAlert: true
  }
})
