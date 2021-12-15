'use strict';




Options.Triggers = Options.Triggers.concat([{
    zoneRegex: /^Eden's Gate: Sepulture \(Savage\)$/,


    timeline: `
            13 "Buster Invuln"
            339 "Ahmed Invuln"
            666 "Ahmed Invuln"
            32 "Ahmed Reprisal"
            43 "Tali Reprisal"
            311 "Tali Reprisal"
            633 "Tali Reprisal"
            335 "Ahmed Reprisal"
            661 "Ahmed Reprisal"
            1028 "Ahmed Reprisal"
            1103 "Ahmed Reprisal"
            1166 "Ahmed Reprisal"
            1278 "Ahmed Reprisal"
            1344 "Ahmed Reprisal"
            1095 "Tali Reprisal"
            1175 "Tali Reprisal"
            1244 "Tali Reprisal"
            1368 "Tali Reprisal"
            1433 "Tali Reprisal"
            1499 "Tali Reprisal"
            1411 "Ahmed Reprisal"
            1486 "Ahmed Reprisal"
            1550 "Ahmed Reprisal"
            1562 "Tali Reprisal"
            45 "Dark Missionary"
            661 "Dark Missionary"
            64 "Heart of Light"
            369 "Heart of Light"
            695 "Heart of Light"
            1028 "Dark Missionary"
            1096 "Heart of Light"
            1169 "Dark Missionary"
            1237 "Heart of Light"
            1272 "Dark Missionary"
            1337 "Heart of Light"
            1363 "Dark Missionary"
            1435 "Heart of Light"
            1501 "Dark Missionary"
            1540 "Heart of Light" 
            292 "Crumbling Prep"
            383 "Pull to Center"
            577 "Pull to Center"
            614 "Crumbling Prep"
            1392 "Agro Soon"
            1373 "Rotating 1"
            1438 "Rotating 2"
            1504 "Rotating 1"
            44 "DNC Shield Samba"
            661 "DNC Shield Samba"
            1096 "DNC Shield Samba"
            1280 "DNC Shield Samba"
            1412 "DNC Shield Samba"
            1550 "DNC Shield Samba"
            311 "MCH Tactician"
            633 "MCH Tactician"
            1023 "MCH Tactician"
            1169 "MCH Tactician"
            1336 "MCH Tactician"
            1490 "MCH Tactician"
            1541 "E4s Enrage"
        `,


    timelineTriggers: [{
            id: 'E4s Crumbling Prep',
            regex: /(Crumbling Prep)/,
        },
        {
            id: 'E4s Rotating 1',
            regex: /(Rotating 1)/,
        },
        {
            id: 'E4s Rotating 2',
            regex: /(Rotating 2)/,
        },
        {
            id: 'E4s Agro Soon',
            regex: /(Agro Soon)/,
        },
        {
            id: 'E4s Ahmed Invuln',
            regex: /(Ahmed Invuln)/,
        },
        {
            id: 'E4s Tali Invuln',
            regex: /(Tali Invuln)/,
        },
        {
            id: 'E4s Enrage',
            regex: /(E4s Enrage)/,
        },
    ],


    triggers: [{
            id: 'E4s Yellow Tank Prep',
            regex: / 14:4113:Titan starts using Geocrush/,
            run: function (data) {
                data.geocrush = true;
            },
        },
        {
            id: 'E4s Yellow Tank 1',
            regex: / 1B:\y{ObjectId}:(\y{Name}):....:....:00BA:/,
            condition: function (data, matches) {
                return data.geocrush && (matches[1] == 'Tannie Kleinvoetjies');
            },
            run: function (data) {
                delete data.geocrush;
            },
        },
        {
            id: 'E4s Yellow Tank 3',
            regex: / 1B:\y{ObjectId}:(\y{Name}):....:....:00B9:/,
            condition: function (data, matches) {
                return data.geocrush && (matches[1] == 'Tannie Kleinvoetjies');
            },
            run: function (data) {
                delete data.geocrush;
            },
        },
        {
            id: 'E4s Fist - Left/Right',
            regex: / 14:412F:Titan Maximum starts using Earthen Fist/,
            delaySeconds: 4,
        },
        {
            id: 'E4s Fist - Right/Left',
            regex: / 14:4130:Titan Maximum starts using Earthen Fist/,
            delaySeconds: 4,
        },
        {
            id: 'E4s Fist - 2x Left',
            regex: / 14:4131:Titan Maximum starts using Earthen Fist/,
            delaySeconds: 4,
        },
        {
            id: 'E4s Fist - 2x Right',
            regex: / 14:4132:Titan Maximum starts using Earthen Fist/,
            delaySeconds: 4,
        },
        {
            id: 'E4s Magnitude',
            regex: / 14:4121:Titan starts using Magnitude/,
        },
    ],
}, ]);




/*Object.assign(Options.DisabledTriggers, {
    // Disabled triggers
});*/




Object.assign(Options.PerTriggerOptions, {
    // Tank Busters
    'E4s Ahmed Invuln': {
        SpeechAlert: true,
        TTSText: 'Ahmed, buster',
    },
    'E4s Tali Invuln': {
        SpeechAlert: true,
        TTSText: 'Tahli, buster',
    },
    'E4S Megalith': {
        SpeechAlert: false,
        TTSText: 'tank stack',
    },
    // Aftershock
    'E4S Massive Landslide - Sides': {
        SpeechAlert: false,
        TTSText: 'Aftershock',
    },
    'E4S Fault Line - Front': {
        SpeechAlert: false,
        TTSText: 'Aftershock and tank charge',
    },
    // Earthen Fist
    'E4s Fist - Left/Right': {
        SpeechAlert: true,
        TTSText: 'left, then right',
    },
    'E4s Fist - Right/Left': {
        SpeechAlert: true,
        TTSText: 'right, then left',
    },
    'E4s Fist - 2x Left': {
        SpeechAlert: true,
        TTSText: 'left, and stay',
    },
    'E4s Fist - 2x Right': {
        SpeechAlert: true,
        TTSText: 'right, and stay',
    },
    // Others
    'E4s Yellow Tank 1': {
        SpeechAlert: true,
        TTSText: 'Yellow Tank First Tile',
    },
    'E4s Yellow Tank 3': {
        SpeechAlert: true,
        TTSText: 'Yellow Tank Third Tile',
    },
    'E4S Landslide': {
        SpeechAlert: true,
        TTSText: 'T pose jump',
    },
    'E4s Magnitude': {
        SpeechAlert: false,
        TTSText: 'In, then surround',
    },
    'E4s Crumbling Prep': {
        SpeechAlert: true,
        TTSText: 'Center facing north, prepare for meteors',
    },
    'E4S Bury Directions': {
        SpeechAlert: true,
        TTSText: function (data, matches) {
            let x = matches[1];
            let y = matches[2];

            if (data.phase == 'armor') {
                // Three line bombs (middle, e/w, w/e), with seismic wave.
                if (x < 95) {
                    data.printedBury = true;
                    return 'Sprint East';
                } else if (x > 105) {
                    data.printedBury = true;
                    return 'Stay West';
                }
            } else if (data.phase == 'landslide') {
                // Landslide cardinals/corners + middle, followed by remaining 4.
                let xMiddle = x < 105 && x > 95;
                let yMiddle = y < 105 && y > 95;
                // Ignore middle point, which may come first.
                if (xMiddle && yMiddle)
                    return;

                data.printedBury = true;
                if (!xMiddle && !yMiddle) {
                    // Corners dropped first.  Cardinals safe.
                    return 'hmm';
                }
                // Cardinals dropped first.  Corners safe.
                return 'hmm';
            }
        },
    },
    'E4s Rotating 1': {
        SpeechAlert: true,
        TTSText: 'Rotating 1. ranged out, rest in',
    },
    'E4s Rotating 2': {
        SpeechAlert: true,
        TTSText: 'Rotating 2. healers out, rest in',
    },
    'E4s Agro Soon': {
        SpeechAlert: true,
        TTSText: 'Agro Soon',
    },
    'E4s Enrage': {
        SpeechAlert: true,
        TTSText: 'This is it',
    },
});