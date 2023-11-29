'use strict';




Options.Triggers = Options.Triggers.concat([
    {
        zoneRegex: /^The Wreath Of Snakes \(Extreme\)$/,
        timeline: `
			90 "Adds 1"
			hideall "Adds 1"
			450 "Chungus 1"
			686 "Chungus 2"
			722 "Chungus 2"
			hideall "Chungus 1"
			hideall "Chungus 2"
		`,
        timelineTriggers: [
            {
                id: 'SeiryuEX Adds 1',
                regex: /(Adds 1)/,
                tts: 'Kill 3 small adds, then 1 big, etcetera. Tank silences the first Stoneskin, the DPS takes the second.',
            },
            {
                id: 'SeiryuEX Test',
                regex: /(Test)/,
                tts: 'Test succesful',
                infoText: 'Test succesful',
            },
            {
                id: 'SeiryuEX Chungus 1',
                regex: /(Chungus 1)/,
                tts: 'Big Chungus. I will call out the safe side.',
            },
            {
                id: 'SeiryuEX Chungus 2',
                regex: /(Chungus 2)/,
                tts: 'Big Chungus'
            },
        ],
    },
]);




Object.assign(Options.PerTriggerOptions, {
    'SeiryuEx Split Group': {
        SpeechAlert: true,
        TTSText: 'A and C stack west of boss, rest stacks east of boss',
    },
    'SeiryuEx Tether': {
        Condition: function () {
            return true;
        },
        SpeechAlert: true,
        TTSText: 'tanks, grab tethers and point away',
        AlertText: function (data) {
            if (data.role == 'tank') {
                return 'Grab Tether, Point Away';
            }
        },
    },
    'SeiryuEx Cursekeeper': {
        SpeechAlert: true,
        TTSText: 'Tank Swap, then AOE Buster',
    },
    'SeiryuEx Ascending Tracking': {
        SpeechAlert: true,
        TTSText: 'Stack middle to bait, then puddles',
    },
    'SeiryuEx Ascending Marker You': {
        SpeechAlert: true,
        TTSText: 'Stand in your puddle or spread',
    },
    'SeiryuEx Ascending Tower You': {
        SpeechAlert: true,
        TTSText: 'Stand in your puddle or spread',
    },
    'SeiryuEx Handprint East': {
        SpeechAlert: true,
        TTSText: '2',
    },
    'SeiryuEx Handprint West': {
        SpeechAlert: true,
        TTSText: '1',
    },
    'SeiryuEx Find Sneks': {
        SpeechAlert: true,
        TTSText: 'Noodle Boys Push Boys',
    },
    'SeiryuEx Silence': {
        Condition: function () {
            return true;
        },
        SpeechAlert: true,
        TTSText: 'Silence',
    },
    'SeiryuEx Sigil Single Out': {
        SpeechAlert: true,
        TTSText: 'Out',
    },
    'SeiryuEx Sigil In Out 1': {
        SpeechAlert: true,
        TTSText: 'In, then Out',
    },
    'SeiryuEx Sigil In Out 2': {
        SpeechAlert: true,
        TTSText: 'Out',
    },
    'SeiryuEx Sigil Out In 1': {
        SpeechAlert: true,
        TTSText: 'Out, then In',
    },
    'SeiryuEx Sigil Out In 2': {
        SpeechAlert: true,
        TTSText: 'In',
    },
    'SeiryuEx Swim Lessons': {
        SpeechAlert: true,
        TTSText: 'Pop Sprint',
    },
    'SeiryuEX Adds 1': {
        SpeechAlert: true,
    },
    'SeiryuEX Chungus 1': {
        SpeechAlert: true,
    },
    'SeiryuEX Chungus 2': {
        SpeechAlert: true,
    },
});