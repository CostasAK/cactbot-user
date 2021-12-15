'use strict';




Options.Triggers = Options.Triggers.concat([
    {
        zoneRegex: /^Alphascape V1.0 \(Savage\)$/,
        timeline: `
			2570 "Enrage Start"
			1018 "Stay Center"
			1105 "All Stack Center"
			1322 "Pull North"
			1391 "All Stack Center"
			1398 "All Stack Center"
			1436 "Stack Front"
			1443 "DPS Die"
			1481 "Stack Front"
			1493 "DPS Die"
			2017 "Pull North"
			2085 "All Stack Center"
			2092 "All Stack Center"
			2129 "Stack Front"
			2137 "DPS Die"
			2164 "Stack Front"
			2188 "DPS Die"
			2297 "Stay Center"
			2383 "All Stack Center"
			1023 "Fire Phase"
			1135 "Wind Phase"
			1245 "Orb Phase"
			1328 "Water Phase"
			1430 "Earth Phase"
			1532 "Enrage Phase"
			2023 "Water Phase"
			2123 "Earth Phase"
			2219 "Orb Phase"
			2302 "Fire Phase"
			2411 "Wind Phase"
			2524 "Enrage Phase"
			2531 "All Stack Center"
		`,
        timelineTriggers: [
            {
                id: 'O9S Enrage',
                regex: /(Enrage Start)/,
            },
            {
                id: 'O9S TH Spread',
                regex: /(\(T\/H\) Stray Flames)/,
                beforeSeconds: 5,
            },
            {
                id: 'O9S DPS Spread',
                regex: /(\(DPS\) Stray Flames)/,
                beforeSeconds: 5,
            },
            {
                id: 'O9S ALL Spread',
                regex: /(\ALL\) Stray Flames)/,
                beforeSeconds: 10,
            },
            {
                id: 'O9S Fire Phase',
                regex: /(Fire Phase)/,
                preRun: function (data) {
                    data.Phase = 'fire';
                },
            },
            {
                id: 'O9S Wind Phase',
                regex: /(Wind Phase)/,
                preRun: function (data) {
                    data.Phase = 'wind';
                },
            },
            {
                id: 'O9S Water Phase',
                regex: /(Water Phase)/,
                preRun: function (data) {
                    data.Phase = 'water';
                },
            },
            {
                id: 'O9S Earth Phase',
                regex: /(Earth Phase)/,
                preRun: function (data) {
                    data.Phase = 'earth';
                },
            },
            {
                id: 'O9S Orb Phase',
                regex: /(Orb Phase)/,
                preRun: function (data) {
                    data.Phase = 'orb';
                },
            },
            {
                id: 'O9S Enrage Phase',
                regex: /(Enrage Phase)/,
                preRun: function (data) {
                    data.Phase = 'enrage';
                },
            },
            {
                id: 'O9S Stay',
                regex: /(Stay Center)/,
            },
            {
                id: 'O9S Center',
                regex: /(All Stack Center)/,
            },
            {
                id: 'O9S North',
                regex: /(Pull North)/,
            },
            {
                id: 'O9S Front',
                regex: /(Stack Front)/,
            },
            {
                id: 'O9S Die',
                regex: /(DPS Die)/,
            },
        ],
    },
]);




Object.assign(Options.PerTriggerOptions, {
    'O9S Enrage': {
        SpeechAlert: true,
        TTSText: 'Enrage. Youve done it before, you can do it again!',
    },
    'O9S TH Spread': {
        SpeechAlert: true,
        TTSText: function (data) {
            if (data.Phase == 'fire') {
                return 'Tankheal to spots, DPS stack middle';
            }
        },
    },
    'O9S DPS Spread': {
        SpeechAlert: true,
        TTSText: function (data) {
            if (data.Phase == 'fire') {
                return 'DPS to spots, Tankheal stack middle';
            }
        },
    },
    'O9S ALL Spread': {
        SpeechAlert: true,
        TTSText: 'Enrage spots after heals. Stack center after fire',
    },
    'O9S Longitudinal Implosion': {
        SpeechAlert: true,
        TTSText: 'Sides to back',
    },
    'O9S Latitudinal Implosion': {
        SpeechAlert: true,
        TTSText: 'Back to sides',
    },
    'O9S Damning Edict': {
        SpeechAlert: true,
        TTSText: 'Get behind',
    },
    'O9S Stay': {
        SpeechAlert: true,
        TTSText: 'Stay Center',
    },
    'O9S Center': {
        SpeechAlert: true,
        TTSText: 'Stack Center',
    },
    'O9S North': {
        SpeechAlert: true,
        TTSText: 'Pull North',
    },
    'O9S Front': {
        SpeechAlert: true,
        TTSText: 'Stack Front',
    },
    'O9S Die': {
        SpeechAlert: true,
        TTSText: 'DPS Die',
    },
});

