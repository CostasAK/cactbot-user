'use strict';




Options.Triggers = Options.Triggers.concat([
    {
        zoneRegex: /^Alphascape V4.0 \(Savage\)$/,
        timeline: `
		22 "Spread 1"
		83 "Pre-Spread"
		87 "Spread 2"
		hideall "Spread 1"
		hideall "Pre-Spread"
		hideall "Spread 2"
		103 "Double Stack"
		123 "Groups"
		1248 "Swap Group"
		2248 "Swap Group"
		hideall "Swap Groups"
		hideall "Double Stack"
		hideall "Groups"
		155 "Slides Start"
		164 "Slides Odd"
		166 "Slides Even"
		1272 "Slides Start"
		1282 "Slides Odd"
		1284 "Slides Even"
		2271 "Slides Start"
		2281 "Slides Odd"
		2283 "Slides Even"
		hideall "Slides Start"
		hideall "Slides Odd"
		hideall "Slides Even"
		61 "FemCenter"
		190 "To Center"
		1308 "To Center"
		2307 "To Center"
		hideall "FemCenter"
		hideall "To Center"
		1201 "Shield Pattern"
		1210 "Cardinal Spread"
		1223 "Fire Spread"
		1227 "Male Stack"
		1229 "Male Away"
		2317 "Shield Pattern"
		2327 "Cardinal Spread"
		2339 "Fire Spread"
		2343 "Male Stack"
		2345 "Male Away"
		1318 "Blades Pattern"
		1324 "Behind Female"
		1333 "Male Intercardinal"
		1337 "Female Stack"
		1343 "Fire Male"
		2201 "Blades Pattern"
		2212 "Behind Female"
		2217 "Male Intercardinal"
		2220 "Female Stack"
		2226 "Fire Male"
		1364 "Both Left"
		2358 "Both Left"
		413 "Both Left"
		378 "Tank LB"
		430 "Tank LB"
		402 "Tank Invuln 1"
		454 "Tank Invuln 2"
		`,
        timelineTriggers: [
            {
                id: 'O12S1 Both Left',
                regex: /(Both Left)/,
            },
            {
                id: 'O12S1 Invuln 1',
                regex: /(Tank Invuln 1)/,
            },
            {
                id: 'O12S1 Invuln 2',
                regex: /(Tank Invuln 2)/,
            },
            {
                id: 'O12S1 Swap Groups',
                regex: /(Swap Group)/,
            },
            {
                id: 'O12S1 Blades Pattern',
                regex: /(Blades Pattern)/,
            },
            {
                id: 'O12S1 Behind Female',
                regex: /(Behind Female)/,
            },
            {
                id: 'O12S1 Male Intercardinal',
                regex: /(Male Intercardinal)/,
            },
            {
                id: 'O12S1 Female Stack',
                regex: /(Female Stack)/,
            },
            {
                id: 'O12S1 Fire Male',
                regex: /(Fire Male)/,
            },
            {
                id: 'O12S1 Shield Pattern',
                regex: /(Shield Pattern)/,
            },
            {
                id: 'O12S1 Cardinal Spread',
                regex: /(Cardinal Spread)/,
            },
            {
                id: 'O12S1 Fire Spread',
                regex: /(Fire Spread)/,
            },
            {
                id: 'O12S1 Male Stack',
                regex: /(Male Stack)/,
            },
            {
                id: 'O12S1 Male Away',
                regex: /(Male Away)/,
            },
            {
                id: 'O12S1 Spread 1',
                regex: /(Spread 1)/,
            },
            {
                id: 'O12S1 Pre-Spread',
                regex: /(Pre-Spread)/,
            },
            {
                id: 'O12S1 Spread 2',
                regex: /(Spread 2)/,
            },
            {
                id: 'O12S1 Double Stack',
                regex: /(Double Stack)/,
            },
            {
                id: 'O12S1 Groups',
                regex: /(Groups)/,
            },
            {
                id: 'O12S1 Slides',
                regex: /(Slides Start)/,
            },
            {
                id: 'O12S1 Slides Odd',
                regex: /(Slides Odd)/,
            },
            {
                id: 'O12S1 Slides Even',
                regex: /(Slides Even)/,
            },
            {
                id: 'O12S1 Center',
                regex: /(To Center)/,
            },
            {
                id: 'O12S1 Female Center',
                regex: /(FemCenter)/,
            },
            {
                id: 'O12S1 Tank LB',
                regex: /(Tank LB)/,
            },
            {
                id: 'O12S2 Aggro Target',
                beforeSeconds: 8,
                regex: /(Target Analysis)/,
            },
        ],
    },
]);




Object.assign(Options.PerTriggerOptions, {
    'O12S Local Resonance': {
        SpeechAlert: true,
        TTSText: function (data) {
            data.Seperate = true;
            return 'Seperate';
        },
    },
    'O12S Remote Resonance': {
        SpeechAlert: true,
        TTSText: function (data) {
            data.Seperate = false;
            return 'Together';
        },
    },
    'O12S Beyond Defense': {
        Condition: function () {
            return true;
        },
        SpeechAlert: true,
        AlarmText: function (data, matches) {
            if (data.me == matches[1]) {
                return 'Don\'t Stack!';
            }
        },
        TTSText: function (data, matches) {
            return data.ShortName(matches[1]);
        },
    },
    'O12S1 Spread 1': {
        SpeechAlert: false,
        TTSText: 'Spread',
    },
    'O12S1 Pre-Spread': {
        SpeechAlert: true,
        TTSText: 'Safe cone',
    },
    'O12S1 Spread 2': {
        SpeechAlert: false,
        TTSText: 'Spread',
    },
    'O12S1 Double Stack': {
        SpeechAlert: true,
        TTSText: 'Male group opposite Eye, female left from eye',
    },
    'O12S1 Slides': {
        SpeechAlert: true,
        TTSText: 'Ones and threes run. Check eye',
    },
    'O12S1 Slides Odd': {
        SpeechAlert: false,
        TTSText: 'One Three swap',
    },
    'O12S1 Slides Even': {
        SpeechAlert: false,
        TTSText: 'Two Four swap',
    },
    'O12S1 Groups': {
        SpeechAlert: false,
        TTSText: 'Close to assigned boss. Careful with aggro',
    },
    'O12S1 Center': {
        SpeechAlert: true,
        TTSText: 'Female to center facing north. Male south-east',
    },
    'O12S1 Female Center': {
        SpeechAlert: false,
        TTSText: 'To center and facing Eye',
    },
    'O12S1 Shield Pattern': {
        SpeechAlert: true,
        TTSText: 'Shield pattern, quadrants',
    },
    'O12S1 Cardinal Spread': {
        SpeechAlert: false,
        TTSText: 'Quadrant spread',
    },
    'O12S1 Fire Spread': {
        SpeechAlert: true,
        TTSText: 'Shaker Spots',
    },
    'O12S1 Male Stack': {
        SpeechAlert: true,
        TTSText: 'Stack under male',
    },
    'O12S1 Male Away': {
        SpeechAlert: true,
        TTSText: 'Away from male',
    },
    'O12S1 Blades Pattern': {
        SpeechAlert: true,
        TTSText: 'Blades pattern, safe middle line',
    },
    'O12S1 Behind Female': {
        SpeechAlert: false,
        TTSText: 'Behind female',
    },
    'O12S1 Male Intercardinal': {
        SpeechAlert: true,
        TTSText: 'south east quadrant',
    },
    'O12S1 Female Stack': {
        SpeechAlert: true,
        TTSText: 'Stack behind female',
    },
    'O12S1 Fire Male': {
        SpeechAlert: true,
        TTSText: 'Shaker Spots',
    },
    'O12S1 Both Left': {
        SpeechAlert: true,
        TTSText: 'Both left, male slightly further from eye',
    },
    'O12S1 Tank LB': {
        SpeechAlert: true,
        TTSText: 'Flare sprint opposite, red mark faces bosses',
    },
    'O12S1 Invuln 1': {
        SpeechAlert: true,
        TTSText: 'Tahli stop. Ahmed Ultimatum and Holmgang',
    },
    'O12S1 Invuln 2': {
        SpeechAlert: true,
        TTSText: 'Tanks use all the buffs on the next busters',
    },
    'O12S1 Swap Groups': {
        SpeechAlert: true,
        TTSText: function (data) {
            if (data.Seperate) {
                return 'Group swap. Both left';
            }
            return 'Group swap. Male left, female right';
        },
    },
});

