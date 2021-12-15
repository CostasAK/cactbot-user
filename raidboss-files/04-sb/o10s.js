'use strict';




Options.Triggers = Options.Triggers.concat([
    {
        zoneRegex: /^Alphascape V2.0 \(Savage\)$/,
        timeline: `
			701 "Enrage Start"
			81 "Shaker Spots"
			1477 "Shaker Spots"
			1539 "Shaker Spots"
			104 "Thunder Spots"
			2477 "Thunder Spots"
			2539 "Thunder Spots"
			340 "Bulwark Crimsons"
			373 "Spyro"
			180 "Butt Bait"
			450 "Center Bait"
			100 "Air Phase"
			124 "Orange Tank"
			200 "Grounded Phase"
			203 "Call Tank"
			409 "Air Phase"
			427 "Call Tank"
			1495 "Orange Tank"
			2495 "Orange Tank"
			183 "Hold CDs"
			504 "Watch Exaflare"
			102 "Palisade"
			435 "Palisade"
			570 "Palisade"
		`,
        timelineTriggers: [
            {
                id: 'O10S Palisade',
                regex: /(Palisade)/,
            },
            {
                id: 'O10S Enrage',
                regex: /(Enrage Start)/,
            },
            {
                id: 'O10S Shaker',
                regex: /(Shaker Spots)/,
            },
            {
                id: 'O10S Thunder',
                regex: /(Thunder Spots)/,
            },
            {
                id: 'O10S Butt',
                regex: /(Butt Bait)/,
            },
            {
                id: 'O10S Center',
                regex: /(Center Bait)/,
            },
            {
                id: 'O10S Watch',
                regex: /(Watch Exaflare)/,
            },
            {
                id: 'O10S Blue',
                regex: /(Blue Tank)/,
                preRun: function (data) {
                    data.MainTank = 'Blue';
                },
            },
            {
                id: 'O10S Orange',
                regex: /(Orange Tank)/,
                preRun: function (data) {
                    data.MainTank = 'Orange';
                },
            },
            {
                id: 'O10S Grounded',
                regex: /(Grounded Phase)/,
                preRun: function (data) {
                    data.MainTank = 'Blue';
                },
            },
            {
                id: 'O10S Airborne',
                regex: /(Air Phase)/,
                preRun: function (data) {
                    data.MainTank = 'Orange';
                },
            },
            {
                id: 'O10S Call Tank',
                regex: /(Call Tank)/,
            },
            {
                id: 'O10S Hold',
                regex: /(Hold CDs)/,
            },
            {
                id: 'O10S Crimson',
                regex: /(Bulwark Crimsons)/,
            },
            {
                id: 'O10S Spyro',
                regex: /(Spyro)/,
            },
        ],
    },
]);




Object.assign(Options.PerTriggerOptions, {
    'O10S Palisade': {
        AlertText: function (data) {
            if (data.MainTank == 'Blue') {
                return 'Palisade on ' + data.BlueTank;
            }
            return 'Palisade on ' + data.OrangeTank;
        },
    },
    'O10S Enrage': {
        SpeechAlert: true,
        TTSText: 'Enrage. Slap that Tail End, Slap it Good',
    },
    'O10N Horizontal Spin 1': {
        SpeechAlert: true,
        TTSText: 'Next, In or Out',
    },
    'O10N Vertical Spin 1': {
        SpeechAlert: true,
        TTSText: 'Next, Sides or Corners',
    },
    'O10N Horizontal Spin 2': {
        SpeechAlert: true,
        TTSText: function (data) {
            if (data.lastSpinWasHorizontal) {
                return {
                    en: 'Out',
                };
            }
            return {
                en: 'Sides',
            };
        },
    },
    'O10N Vertical Spin 2': {
        SpeechAlert: true,
        TTSText: function (data) {
            if (data.lastSpinWasHorizontal) {
                return {
                    en: 'In',
                };
            }
            return {
                en: 'Corners',
            };
        },
    },
    'O10S Shaker': {
        SpeechAlert: true,
        TTSText: 'Shaker Spots',
    },
    'O10S Thunder': {
        SpeechAlert: true,
        TTSText: 'Thunder Spots',
    },
    'O10S Butt': {
        SpeechAlert: true,
        TTSText: 'Butt Bait',
    },
    'O10S Blue': {
        SpeechAlert: true,
        TTSText: 'Blue Main Tank',
    },
    'O10S Orange': {
        SpeechAlert: true,
        TTSText: 'Orange Main Tank',
    },
    'O10S Call Tank': {
        SpeechAlert: true,
        TTSText: function (data) {
            if (data.MainTank == 'Blue') {
                return data.BlueTank + ' Main Tank';
            }
            return data.OrangeTank + ' Main Tank';
        },
    },
    'O10S Center': {
        SpeechAlert: true,
        TTSText: 'Center Bait',
    },
    'O10S Watch': {
        SpeechAlert: true,
        TTSText: 'Watch Exaflare',
    },
    'O10S Crimson': {
        SpeechAlert: true,
        TTSText: function (data) {
            return 'Party on C, ' + data.OrangeTank + ' on D';
        },
    },
    'O10S Fire Marker': {
        Condition: function () {
            return true;
        },
        SpeechAlert: true,
        TTSText: function (data, matches) {
            data.fireMark = data.ShortName(matches[1]);
            return data.ShortName(matches[1]);
        },
        AlarmText: function (data, matches) {
            if (data.me == matches[1])
                return 'Fire Marker on YOU';
        },
    },
    'O10S Death From Below': {
        Condition: function () {
            return true;
        },
        SpeechAlert: true,
        InfoText: function (data, matches) {
            if (matches[1] == data.me) {
                return 'Death From Below';
            }
        },
        TTSText: function (data, matches) {
            data.OrangeTank = data.ShortName(matches[1]);
            if (data.MainTank == 'Orange') {
                return data.ShortName(matches[1]) + ' Main Tank';
            }
        },
    },
    'O10S Death From Above': {
        Condition: function () {
            return true;
        },
        SpeechAlert: true,
        InfoText: function (data, matches) {
            if (matches[1] == data.me) {
                return 'Death From Above';
            }
        },
        TTSText: function (data, matches) {
            data.BlueTank = data.ShortName(matches[1]);
            if (data.MainTank == 'Blue') {
                return data.ShortName(matches[1]) + ' Main Tank';
            }
        },
    },
    'O10S Spyro': {
        SpeechAlert: true,
        TTSText: function (data) {
            return 'Party on C,. ' + data.fireMark + ' take tether to D.';
        },
    },
});

