'use strict'

// eslint-disable-next-line no-undef
Options.Triggers = Options.Triggers.concat([{
  zoneRegex: /.*/,

  triggers: [{
    id: 'Test Sounds',
    regex: /Ready to unleash Eternal Breath/,
    sound: '../../user/sounds/tsunami-drop.wav',
    soundVolume: 0,
    delaySeconds: 0
  }]
},

// Pre-raid Check
{
  zoneRegex: /Barracks$/,
  timeline: `
    0 "--Reset--" sync /You bid farewell to the flame squadron sergeant/ window 10000 jump 0
    0 "Start" sync /:You bow courteously to the flame squadron sergeant/ window 0,1
    0 "--Reset--" sync /You bid farewell to the serpent squadron sergeant/ window 10000 jump 0
    0 "Start" sync /:You bow courteously to the serpent squadron sergeant/ window 0,1
    3 "Double Call-outs Test"
  `,

  timelineTriggers: [{
    id: 'Double Test',
    regex: /(Double Call-outs Test)/,
    infoText: 'Please tell me if I am repeating myself',
    tts: 'Testing testing'
  }]
}
])

// eslint-disable-next-line no-undef
Object.assign(Options.PerTriggerOptions, {
  'Test Poke': {
    SpeechAlert: false,
    SoundAlert: true,
    TextAlert: false,
    // Override the tts output as well.
    TTSText: function (data) {
      return 'Custom Poke (' + data.pokes + ')'
    },
    SoundOverride: 'C:/Program Files (x86)/Advanced Combat Tracker/Hojoring/resources/wav/Agro.wav'
  },

  'Double Test': {
    SpeechAlert: true
  }
})
