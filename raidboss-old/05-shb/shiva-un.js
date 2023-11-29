'use strict'
;[
  {
    zoneId: ZoneId.TheAkhAfahAmphitheatreUnreal,
    timelineFile: 'shiva-un.txt',
    timelineTriggers: [
      {
        id: 'ShivaUn Heavenly Strike',
        regex: /Heavenly Strike/,
        beforeSeconds: 9
      },
      {
        id: 'ShivaUn Avalanche',
        regex: /Avalanche/,
        beforeSeconds: 5
      },
      {
        id: 'ShivaUn Spread Time',
        regex: /Hailstorm/,
        beforeSeconds: 6
      },
      {
        id: 'ShivaUn Melt Time',
        regex: /Melt/
      }
    ]
  }
]

Object.assign(Options.PerTriggerOptions, {
  'ShivaUn Sword Phase': {
    SpeechAlert: true,
    TTSText: 'Sword. Party Share'
  },
  'ShivaUn Staff Phase': {
    SpeechAlert: true,
    TTSText: 'Staff'
  },
  'ShivaUn Melt Time': {
    SpeechAlert: true,
    TTSText: 'Tank Swap'
  },
  'ShivaUn Glacier Bash': {
    SpeechAlert: true,
    TTSText: 'Frontnt'
  },
  'ShivaUn Whiteout': {
    SpeechAlert: true,
    TTSText: 'In'
  },
  'ShivaUn Permafrost': {
    SpeechAlert: true,
    TTSText: 'Alright stop'
  },
  'ShivaUn Ice Boulder': {
    SpeechAlert: true,
    Condition: function () {
      return true
    }
  },
  'ShivaUn Spread Time': {
    SpeechAlert: true,
    TTSText: 'Spread'
  },
  'ShivaUn Heavenly Strike': {
    AlertText: 'Shields'
  },
  'ShivaUn Frost Bow': {
    SpeechAlert: true,
    TTSText: 'Behind'
  },
  'ShivaUn Avalanche': {
    SpeechAlert: true,
    TTSText: 'nokku bakku'
  },
  'ShivaUn Permafrost': {
    SpeechAlert: true,
    TTSText: 'Alright stop'
  },
  'ShivaUn Ice Boulder': {
    SpeechAlert: true,
    Condition: function () {
      return true
    }
  }
})
