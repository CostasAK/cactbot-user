'use strict'

Options.Triggers = Options.Triggers.concat([{ // eslint-disable-line no-undef
  zoneRegex: /The Minstrel.s Ballad. |\((Savage|Extreme|Ultimate)\)$/,

  timelineTriggers: [{
    id: 'MT Pull to Center',
    regex: /(MT Pull to Center)/
  },
  {
    id: 'T1 MT',
    regex: /(T1 MT)/
  },
  {
    id: 'T2 MT',
    regex: /(T2 MT)/
  },
  {
    id: 'Tank Swap',
    regex: /(Tank Swap)/
  },
  {
    id: 'T1 Invuln',
    regex: /(T1 Invuln)/,
    suppressSeconds: 235
  },
  {
    id: 'T2 Invuln',
    regex: /(T2 Invuln)/,
    suppressSeconds: 235
  },
  {
    id: 'T1 Reprisal',
    regex: /(T1 Reprisal)/,
    suppressSeconds: 55
  },
  {
    id: 'T2 Reprisal',
    regex: /(T2 Reprisal)/,
    suppressSeconds: 55
  },
  {
    id: 'T1 Mitigation',
    regex: /(T1 Mitigation)/,
    suppressSeconds: 85
  },
  {
    id: 'T2 Mitigation',
    regex: /(T2 Mitigation)/,
    suppressSeconds: 85
  },
  {
    id: 'M1 Feint',
    regex: /(M1 Feint)/,
    suppressSeconds: 85
  },
  {
    id: 'R1 Mitigation',
    regex: /(R1 Mitigation)/,
    suppressSeconds: 115
  },
  {
    id: 'R2 Mitigation',
    regex: /(R2 Mitigation)/,
    suppressSeconds: 115
  }
  ],

  triggers: [{
    id: 'DNC Burst Prep',
    regex: Regexes.gainsEffect({ // eslint-disable-line no-undef
      effect: 'Technical Step',
      capture: false
    })
  },
  {
    id: 'DNC Burst Start',
    regex: Regexes.losesEffect({ // eslint-disable-line no-undef
      effect: 'Technical Step',
      capture: false
    })
  },
  {
    id: 'Limit Break Full',
    regex: / 24:Limit Break: 7530/
  }
  ]
}])

Object.assign(Options.PerTriggerOptions, { // eslint-disable-line no-undef
  'MT Pull to Center': {
    SpeechAlert: false,
    AlertText: 'To Center'
  },
  'T1 MT': {
    SpeechAlert: false,
    AlertText: 'Ahmed Main Tank'
  },
  'T2 MT': {
    SpeechAlert: false,
    AlertText: 'Talli Main Tank'
  },
  'Tank Swap': {
    SpeechAlert: false,
    AlertText: 'Swap'
  },
  'T1 Invuln': {
    SpeechAlert: true,
    TTSText: 'Ahmed Invuln'
  },
  'T2 Invuln': {
    SpeechAlert: true,
    TTSText: 'Talli Invuln'
  },
  'T1 Reprisal': {
    AlertText: 'Ahmed Reprisal'
  },
  'T2 Reprisal': {
    AlertText: 'Tali Reprisal'
  },
  'T1 Mitigation': {
    SpeechAlert: true,
    TTSText: 'Heart'
  },
  'T2 Mitigation': {
    SpeechAlert: true,
    TTSText: 'Missionary'
  },
  'M1 Feint': {
    SpeechAlert: true,
    TTSText: 'Feint'
  },
  'R1 Mitigation': {
    AlertText: 'Shield Samba'
  },
  'R2 Mitigation': {
    SpeechAlert: true,
    TTSText: 'Tactician'
  },
  'DNC Burst Prep': {
    SpeechAlert: false,
    TTSText: 'Burst in 6'
  },
  'DNC Burst Start': {
    SpeechAlert: true,
    TTSText: 'Burst'
  },
  'Limit Break Full': {
    SpeechAlert: true,
    TTSText: 'LB Full'
  }
})
