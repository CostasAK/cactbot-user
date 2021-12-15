'use strict';




Object.assign(Options.PerTriggerOptions, {
  // Flexiclaw Lines
  'RubyEx Undermine': {
    SpeechAlert: true,
    TTSText: 'Away from lines',
  },
  'RubyEx Liquefaction': {
    SpeechAlert: false,
    TTSText: 'On lines',
  },
  'RubyEx Cut And Run': {
    SpeechAlert: true,
    TTSText: 'Go sides',
  },
  'RubyEx Change of Heart': {
    SpeechAlert: true,
    TTSText: 'Switch',
    SuppressSeconds: 3,
  },
  'RubyEx Negative Aura': {
    SpeechAlert: true,
    TTSText: 'Look Away',
  },
  'RubyEx Screech': {
    SpeechAlert: true,
    TTSText: 'Get knocked back to behind D',
  },
});