'use strict';




Options.Triggers = Options.Triggers.concat([
    {
        zoneRegex: /\(Savage|Extreme|Ultimate\)$/ ,
        /*timeline: `
            # Timeline items
        `,*/
        

        /*timelineTriggers: [
            // Timeline triggers
        ],*/


        triggers: [
            {
                id: 'TitaniaEX Rhythm of the Light',
                regex: /This is the rhythm of the light/,
            },
        ],
    },
]);




Object.assign(Options.PerTriggerOptions, {
	'TitaniaEX Rhythm of the Light': {
        SoundAlert: true,
        SoundOverride: '../../user/sounds/rhythm-of-the-night.wav',
        VolumeOverride: 0.2,
    },
    'TitaniaEx Phantom Out': {
		SpeechAlert: true,
		TTSText: 'Out',
	},
	'TitaniaEx Phantom In': {
		SpeechAlert: true,
		TTSText: 'In',
	},
	'TitaniaEx Mist Failure': {
		SpeechAlert: true,
		TTSText: 'Bonus Add',
	},
	'TitaniaEx Mist': {
		SpeechAlert: true,
		TTSText: function (data) {
			if (data.seenMistRune) {
				return 'In or Out first, then Water';
			}
		},
	},
	'TitaniaEx Flame': {
		SpeechAlert: true,
		TTSText: function (data) {
			if (data.seenFlameRune) {
				return 'Stack and maybe rotate';
			}
		},
	},
	'TitaniaEx Divination': {
		SpeechAlert: true,
		TTSText: function (data, matches) {
			return 'Cleave on ' + data.ShortName(matches[1]);
		},
	},
	'TitaniaEx Bramble 1': {
		SpeechAlert: true,
		TTSText: 'Brambles',
	},
	'TitaniaEx Bramble 2': {
		SpeechAlert: true,
		TTSText: 'Run',
	},
	'TitaniaEx Bramble Knockback': {
		SpeechAlert: true,
		TTSText: 'Knockback soon',
	},
	'TitaniaEx Fae Light': {
		SpeechAlert: true,
		TTSText: function (data, matches) {
			return 'Big Buster on ' + data.ShortName(matches[1]);
		},
	},
	'TitaniaEx Frost Rune 1': {
		SpeechAlert: true,
		TTSText: 'Shiva',
	},
	'TitaniaEx Adds Stack': {
		SpeechAlert: true,
		TTSText: 'Stack',
	},
	'TitaniaEx Frost Rune 1': {
		SpeechAlert: true,
		TTSText: 'Shiva',
	},
	'TitaniaEx Thunder Tether': {
		SpeechAlert: true,
		TTSText: 'Initial Thunder Tether',
	},
	'TitaniaEx Thunder Rune': {
		SpeechAlert: true,
		TTSText: function (data) {
			return data.thunderCount;
		},
	},
});

