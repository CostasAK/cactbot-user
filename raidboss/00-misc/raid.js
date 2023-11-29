"use strict";

Options.Triggers.push({
  zoneRegex: /The Minstrel.s Ballad. |\((Savage|Extreme|Ultimate|Unreal)\)$/,

  timelineTriggers: [
    {
      id: "Announce Enrage",
      regex: /(Announce Enrage)/,
      suppressSeconds: 5,
      sound: "../../user/wav/D.Va_-_Time's_Running_Out,_Everyone_Attack.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "MT Pull to Center",
      regex: /(MT Pull to Center)/,
    },
    {
      id: "T1 MT",
      regex: /(T1 MT)/,
    },
    {
      id: "T2 MT",
      regex: /(T2 MT)/,
    },
    {
      id: "Tank Swap",
      regex: /(Tank Swap)/,
    },
    {
      id: "T1 Invuln",
      regex: /(T1 Invuln)/,
      suppressSeconds: 235,
    },
    {
      id: "T2 Invuln",
      regex: /(T2 Invuln)/,
      suppressSeconds: 235,
    },
    {
      id: "T1 Reprisal",
      regex: /(T1 Reprisal)/,
      suppressSeconds: 55,
    },
    {
      id: "T2 Reprisal",
      regex: /(T2 Reprisal)/,
      suppressSeconds: 55,
    },
    {
      id: "T1 Mitigation",
      regex: /(T1 Mitigation)/,
      suppressSeconds: 85,
    },
    {
      id: "T2 Mitigation",
      regex: /(T2 Mitigation)/,
      suppressSeconds: 85,
    },
    {
      id: "H1 Sacred Soil",
      regex: /(H1 Sacred Soil)/,
      suppressSeconds: 25,
      durationSeconds: 5,
    },
    {
      id: "H1 Recitation",
      regex: /(H1 Recitation)/,
      suppressSeconds: 85,
      durationSeconds: 5,
    },
    {
      id: "H1 Deployment Tactics",
      regex: /(H1 Deployment Tactics)/,
      suppressSeconds: 25,
      durationSeconds: 5,
    },
    {
      id: "H1 Whispering Dawn",
      regex: /(H1 Whispering Dawn)/,
      suppressSeconds: 25,
      durationSeconds: 5,
    },
    {
      id: "H1 Fey Illumination",
      regex: /(H1 Fey Illumination)/,
      suppressSeconds: 25,
      durationSeconds: 5,
    },
    {
      id: "M1 Feint",
      regex: /(M1 Feint)/,
      suppressSeconds: 85,
    },
    {
      id: "R1 Mitigation",
      regex: /(R1 Mitigation)/,
      suppressSeconds: 115,
    },
    {
      id: "R2 Mitigation",
      regex: /(R2 Mitigation)/,
      suppressSeconds: 115,
    },
  ],

  triggers: [
    {
      id: "DNC Burst Prep",
      regex: Regexes.gainsEffect({
        effect: "Technical Step",
        capture: false,
      }),
    },
    {
      id: "DNC Burst Start",
      regex: Regexes.losesEffect({
        effect: "Technical Step",
        capture: false,
      }),
    },
    {
      id: "Someones Bursting",
      regex: Regexes.ability({
        ability: "(?:Divination|Embolden|Arcane Circle)",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.source),
      suppressSeconds: 20,
    },
    {
      id: "NIN Trick Attack",
      regex: /^\[.{14}15:10.{6}:[A-z' -]{3,21}:8D2:/,
    },
    {
      id: "Limit Break Full",
      regex: / 24:Limit Break: 7530/,
    },
  ],
});

Object.assign(Options.PerTriggerOptions, {
  "MT Pull to Center": {
    SpeechAlert: true,
    AlertText: "Pull To Center",
  },
  "T1 MT": {
    SpeechAlert: false,
    AlertText: "Timo Main Tank",
  },
  "T2 MT": {
    SpeechAlert: false,
    AlertText: "Ahmed Main Tank",
  },
  "Tank Swap": {
    SpeechAlert: false,
    AlertText: "Swap",
  },
  "T1 Invuln": {
    SpeechAlert: true,
    TTSText: "Timo Invuln",
  },
  "T2 Invuln": {
    SpeechAlert: true,
    TTSText: "Ahmed Invuln",
  },
  "T1 Reprisal": {
    SpeechAlert: true,
    AlertText: "Timo Reprisal",
  },
  "T2 Reprisal": {
    SpeechAlert: true,
    AlertText: "Ahmed Reprisal",
  },
  "T1 Mitigation": {
    SpeechAlert: true,
    TTSText: "Veil",
  },
  "T2 Mitigation": {
    SpeechAlert: true,
    TTSText: "Shake",
  },
  "H1 Sacred Soil": {
    AlertText: "Sacred Soil",
  },
  "H1 Recitation": {
    AlertText: "Recitation",
  },
  "H1 Whispering Dawn": {
    AlertText: "Whispering Dawn",
  },
  "H1 Fey Illumination": {
    AlertText: "Fey Illumination",
  },
  "H1 Deployment Tactics": {
    AlertText: "Deployment Tactics",
  },
  "M1 Feint": {
    SpeechAlert: true,
    TTSText: "Feint",
  },
  "R1 Mitigation": {
    AlertText: "Samba",
  },
  "R2 Mitigation": {
    SpeechAlert: true,
    TTSText: "Addle",
  },
  "DNC Burst Prep": {
    SpeechAlert: false,
    TTSText: "Burst in 6",
  },
  "DNC Burst Start": {
    SpeechAlert: true,
    TTSText: "Burst",
  },
  "Someones Bursting": {
    SpeechAlert: true,
    TTSText: "Burst",
  },
  "NIN Trick Attack": {
    SpeechAlert: false,
    TTSText: "Trick",
  },
  "Limit Break Full": {
    SpeechAlert: true,
    TTSText: "LB Full",
  },
});
