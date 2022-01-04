'use strict';




Options.Triggers = Options.Triggers.concat([
    {
        zoneRegex: /(^Eden's Gate: Descent \(Savage\)$|Unknown Zone \(356\))/,
        
        
        timeline: `
        214 "SIW2"
        348 "SIW3-1"
        424 "SIW3-4"
        439 "SIW3-6"
        225 "Pull to Center"
        430 "Pull to Center"
        190 "DNC Shield Samba"
        375 "DNC Shield Samba"
        590 "DNC Shield Samba"
        20 "MCH Tactician"
        220 "MCH Tactician"
        425 "MCH Tactician"
        609 "MCH Tactician"
        `,
        
        
        timelineTriggers: [
            {
                id: 'E2s SIW 2',
                regex: /(SIW2)/,
            },
            {
                id: 'E2s SIW 3-1',
                regex: /(SIW3-1)/,
            },
            {
                id: 'E2s SIW 3-4',
                regex: /(SIW3-4)/,
            },
            {
                id: 'E2s SIW 3-6',
                regex: /(SIW3-6)/,
            },
            {
                id: 'E2S Punishing TTS',
                regex: /Punishing Ray/,
                beforeSeconds: 4,
            },
            {
                id: 'E2S Shadowflame TTS',
                regex: /Shadowflame/,
                beforeSeconds: 9,
            },
        ],
        
        
        triggers: [
            {
                id: 'E2S Flare Now',
                regex: / 1B:\y{ObjectId}:(\y{Name}):....:....:0057:/,
                condition: function (data, matches) {
                    return !data.waiting;
                },
                suppressSeconds: 4,
            },
            {
                id: 'E2S Flare in Waiting',
                regex: / 1B:\y{ObjectId}:(\y{Name}):....:....:0057:/,
                condition: function (data, matches) {
                    return data.waiting;
                },
                suppressSeconds: 4,
            },
        ],
    },
]);




Object.assign(Options.PerTriggerOptions, {
    'E2S Doomvoid Cleaver': {
        SpeechAlert: true,
        TTSText: 'Surround',
    },
    'E2S Doomvoid Guillotine': {
        SpeechAlert: true,
        TTSText: 'Sides',
    },
    'E2S Doomvoid Slicer': {
        SpeechAlert: true,
        TTSText: 'In',
    },
    'E2S Empty Hate': {
        SpeechAlert: true,
        TTSText: 'Knockback',
    },
    'E2S Empty Rage': {
        SpeechAlert: false,
        TTSText: 'Raging Hand',
    },
    'E2S Flare Now': {
        SpeechAlert: false,
        TTSText: 'Flare Now',
    },
    'E2S Flare in Waiting': {
        SpeechAlert: false,
        TTSText: 'Flare in Waiting',
    },
    'E2S Punishing TTS': {
        SpeechAlert: true,
        TTSText: 'Puddles',
    },
    'E2S Shadowflame TTS': {
        SpeechAlert: true,
        TTSText: 'Buster',
    },
    'E2s SIW 2': {
        SpeechAlert: false,
        TTSText: 'Flare, then Prey, Puddles and Eye',
        InfoText: 'Flare, then Prey, then Puddles plus Eye',
    },
    'E2s SIW 3-1': {
        SpeechAlert: false,
        TTSText: 'First Fist, then Flare, then everyone Stack fast',
        InfoText: 'First Fist, then Flare, then everyone Stack fast',
    },
    'E2s SIW 3-4': {
        SpeechAlert: false,
        TTSText: 'Flare plus Eyes, then Fire',
        InfoText: 'Flare plus Eyes, then Fire',
    },
    'E2s SIW 3-6': {
        SpeechAlert: false,
        TTSText: 'Sophia, then Puddles, and finally Surround',
        InfoText: 'Sophia, then Puddles, and finally Surround',
    },
    'E2S Cycle of Retribution': {
        SpeechAlert: true,
        TTSText: 'In, Surround, Sides. In first',
    },
    'E2S Cycle of Chaos': {
        SpeechAlert: true,
        TTSText: 'Sides, In, Surround. Sides first',
    },
});

