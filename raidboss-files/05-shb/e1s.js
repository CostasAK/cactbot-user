'use strict';




Options.Triggers = Options.Triggers.concat([
    {
        zoneRegex: /(^Eden's Gate: Resurrection \(Savage\)$|Unknown Zone \(355\))/,


        timeline: `
            107 "In and Out"
            682 "DPS Cardinals"
            65 "DNC Shield Samba"
            552 "DNC Shield Samba"
            835 "DNC Shield Samba"
            82 "MCH Tactician"
            694 "MCH Tactician"
        `,
        

        timelineTriggers: [
            {
                id: 'E1s InOut',
                regex: /(In and Out)/,
            },
            {
                id: 'E1s Cardinals',
                regex: /(DPS Cardinals)/,
            },
        ],


        /*triggers: [
        ],*/
    },
]);




Object.assign(Options.PerTriggerOptions, {
    // Paradise Regained
    'E1S Paradise Regained': {
        SpeechAlert: true,
        TTSText: 'Paradise Regained',
    },
    'E1S Paradise Regained But Lost': {
        SpeechAlert: true,
        TTSText: 'Paradise Lost',
    },
    // Delta Attack
    'E1S Delta Attack 1': {
        SpeechAlert: false,
        TTSText: 'Delta Cross',
    },
    'E1S Delta Attack 2': {
        SpeechAlert: false,
        TTSText: 'Delta Donut',
    },
    // Vice and Virtue
    'E1S Vice and Virtue Tank Stack': {
        SpeechAlert: false,
        TTSText: 'Save tanks',
    },
    'E1s Cardinals': {
        SpeechAlert: true,
        TTSText: 'puddles on cardinals',
    },
    // Others
    'E1S Eden\'s Flare': {
        SpeechAlert: true,
        TTSText: 'In',
    },
    'E1s InOut': {
        SpeechAlert: true,
        TTSText: 'In and Out',
    },
});

