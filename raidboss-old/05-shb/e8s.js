'use strict'

// eslint-disable-next-line no-undef
Options.cactbote8sUptimeKnockbackStrat = true

// eslint-disable-next-line no-undef
Options.Triggers = Options.Triggers.concat([{
  zoneRegex: /^Eden's Verse: Refulgence \(Savage\)$/,

  timeline: `
    ### Party Mitigation
    # Absolute Zero
    6 "R1 Mitigation"
    6 "T2 Mitigation"
    # Diamond Frost
    60 "R2 Mitigation"
    69 "T1 Mitigation"
    # Light Rampant
    134 "R1 Mitigation"
    134 "T2 Mitigation"
    # Banish III
    180 "T1 Mitigation"
    186 "R2 Mitigation"
    # Akh Morn
    365 "T2 Mitigation"
    365 "R1 Mitigation"
    # Wyrm's Lament 1
    430 "T1 Mitigation"
    # Double Slap
    480 "T2 Mitigation"
    487 "R2 Mitigation"
    # Mirror, Mirror 4
    528 "R1 Mitigation"
    530 "T1 Mitigation"
    # Mirror, Mirror 5 Holy
    575 "T2 Mitigation"
    # Mirror, Mirror 6 Akh Morn
    618 "R2 Mitigation"
    # Icelit Dragonsong
    653 "R1 Mitigation"
    661 "T1 Mitigation"
    678 "T2 Mitigation"
    # Wyrm's Lament 2
    744 "R2 Mitigation"
    762 "T1 Mitigation"
    785 "R1 Mitigation"
    783 "T2 Mitigation"

    ### Feint
    40 "M1 Feint"
    160 "M1 Feint"
    351 "M1 Feint"
    484 "M1 Feint"
    631 "M1 Feint"
    799 "M1 Feint"

    ### Tank Stuff
    685 "T2 MT"
    380 "T2 MT"
    #482 "T2 MT"
    492 "Tank Swap"

    ### Reminders
    351 "Shiva Targetable"
    498 "Akh Rai Reminder"
    602 "Akh Rai Reminder"
    690 "Everyone South Reminder"
    730 "WL2 Reminder"
  `,

  timelineTriggers: [{
    id: 'E8S OT Help',
    regex: /Shiva Targetable/
  },
  {
    id: 'E8S Akh Rai Reminder',
    regex: /Akh Rai Reminder/
  },
  {
    id: 'E8S Everyone South Reminder',
    regex: /Everyone South Reminder/
  },
  {
    id: 'E8S WL2 Reminder',
    regex: /WL2 Reminder/
  }],

  triggers: [{
    id: 'E8S Invuln Help',
    // eslint-disable-next-line no-undef
    regex: Regexes.ability({
      source: 'Shiva',
      id: '4D65',
      capture: true
    }),
    run: function (data, matches) {
      data.slapped = matches.target
    }
  },
  {
    id: 'E8S Second Frost Help',
    // eslint-disable-next-line no-undef
    regex: Regexes.startsUsing({
      source: 'Shiva',
      id: '4D6[67]',
      capture: false
    }),
    delaySeconds: 43,
    durationSeconds: 10,
    suppressSeconds: 120
  },
  {
    id: 'E8S Axe Kick Help',
    // eslint-disable-next-line no-undef
    regex: Regexes.startsUsing({
      source: 'Shiva',
      id: '4D6D',
      capture: false
    }),
    delaySeconds: 49,
    durationSeconds: 10,
    suppressSeconds: 160
  },
  {
    id: 'E8S Scythe Kick Help',
    // eslint-disable-next-line no-undef
    regex: Regexes.startsUsing({
      source: 'Shiva',
      id: '4D6E',
      capture: false
    }),
    delaySeconds: 49,
    durationSeconds: 10,
    suppressSeconds: 160
  },
  {
    id: 'E8S LR Chain on Tannie',
    regex: /Tannie Kleinvoetjies gains the effect of Refulgent Chain/,
    suppressSeconds: 3,
    run: function (data) {
      data.chainedTannie = true
    }
  },
  {
    id: 'E8S LR Chain on Yuki',
    regex: /Yuki Kimura gains the effect of Refulgent Chain/,
    suppressSeconds: 3,
    run: function (data) {
      data.chainedYuki = true
    }
  },
  {
    id: 'E8S LR Chain on Gust',
    regex: /Gust Leonard gains the effect of Refulgent Chain/,
    suppressSeconds: 3,
    run: function (data) {
      data.chainedGust = true
    }
  },
  {
    id: 'E8S LR Chain on Shiroe',
    regex: /Shiroe Enchanter gains the effect of Refulgent Chain/,
    suppressSeconds: 3,
    run: function (data) {
      data.chainedShiroe = true
    }
  },
  {
    id: 'E8S WL Red on Tannie',
    regex: /Tannie Kleinvoetjies gains the effect of Wyrmclaw/,
    suppressSeconds: 3,
    run: function (data) {
      data.clawedTannie = true
    }
  },
  {
    id: 'E8S WL Red on Gust',
    regex: /Gust Leonard gains the effect of Wyrmclaw/,
    suppressSeconds: 3,
    run: function (data) {
      data.clawedGust = true
    }
  },
  {
    id: 'E8S WL Red on Shiroe',
    regex: /Shiroe Enchanter gains the effect of Wyrmclaw/,
    suppressSeconds: 3,
    run: function (data) {
      data.clawedShiroe = true
    }
  },
  {
    id: 'E8S WL Red on Yuki',
    regex: /Yuki Kimura gains the effect of Wyrmclaw/,
    suppressSeconds: 3,
    run: function (data) {
      data.clawedYuki = true
    }
  }
  ]
}])

// eslint-disable-next-line no-undef
Object.assign(Options.PerTriggerOptions, {
  'E8S Biting Frost First Mirror': {
    SpeechAlert: false
  },
  'E8S Driving Frost First Mirror': {
    SpeechAlert: false
  },
  'E8S Icicle Impact': {
    SpeechAlert: true
  },
  'E8S Double Slap': {
    SpeechAlert: false
  },
  'E8S Axe Kick': {
    SpeechAlert: true
  },
  'E8S Scythe Kick': {
    SpeechAlert: true
  },
  'E8S Holy': {
    SpeechAlert: true
  },
  'E8S Holy Divided': {
    SpeechAlert: true
  },
  'E8S Second Frost Help': {
    SpeechAlert: true,
    AlertText: function (data) {
      if (data.firstFrost === 'driving') {
        return 'Face Boss Out'
      }
      return 'Face Boss In'
    }
  },
  'E8S Axe Kick Help': {
    SpeechAlert: true,
    AlertText: function (data) {
      if (data.firstKick) {
        return ''
      }
      data.firstKick = true
      return 'Take Boss to North Mirror'
    }
  },
  'E8S Scythe Kick Help': {
    SpeechAlert: true,
    AlertText: function (data) {
      if (data.firstKick) {
        return ''
      }
      data.firstKick = true
      return 'Keep Boss in the Centre'
    }
  },
  'E8S OT Help': {
    SpeechAlert: true,
    AlertText: function (data) {
      return data.ShortName(data.slapped) + ' Off-Tank'
    }
  },
  'E8S Akh Rai Reminder': {
    SpeechAlert: true,
    AlertText: 'East West groups at the sides'
  },
  'E8S Everyone South Reminder': {
    SpeechAlert: true,
    AlertText: 'Everyone South'
  },
  'E8S WL2 Reminder': {
    SpeechAlert: true,
    AlertText: 'East West groups at the sides, slightly to the rear'
  },
  'E8S LR Chain on Tannie': {
    AlertText: function (data) {
      if (data.chainedGust) {
        return 'Gust to C'
      }
    }
  },
  'E8S LR Chain on Yuki': {
    AlertText: function (data) {
      if (data.chainedShiroe) {
        return 'Shiroe to D'
      }
    }
  },
  'E8S LR Chain on Gust': {
    AlertText: function (data) {
      if (data.chainedTannie) {
        return 'Gust to C'
      }
    }
  },
  'E8S LR Chain on Shiroe': {
    AlertText: function (data) {
      if (data.chainedYuki) {
        return 'Shiroe to D'
      }
    }
  },
  'E8S WL Red on Tannie': {
    SpeechAlert: true,
    AlertText: function (data) {
      if (data.clawedGust) {
        return 'Gust Shihro Swap'
      }
    }
  },
  'E8S WL Red on Gust': {
    SpeechAlert: true,
    AlertText: function (data) {
      if (data.clawedTannie) {
        return 'Gust Shihro Swap'
      }
    }
  },
  'E8S WL Red on Shiroe': {
    SpeechAlert: true,
    AlertText: function (data) {
      if (data.clawedYuki) {
        return 'Gust Shihro Swap'
      }
    }
  },
  'E8S WL Red on Yuki': {
    SpeechAlert: true,
    AlertText: function (data) {
      if (data.clawedShiroe) {
        return 'Gust Shihro Swap'
      }
    }
  }
})
