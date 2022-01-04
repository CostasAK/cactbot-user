'use strict';




Object.assign(Options.PerTriggerOptions, {
    'O8S Shockwave': {
		SpeechAlert: true,
	},
	'O8S Indolent Will': {
		SpeechAlert: true,
	},
	'O8S Intemperate Will': {
		SpeechAlert: true,
		TTSText: 'West',
	},
	'O8S Gravitational Wave': {
		SpeechAlert: true,
		TTSText: 'East',
	},
	'O8S Ave Maria': {
		SpeechAlert: true,
	},
	'O8S Pasts Forgotten': {
		SpeechAlert: true,
	},
	'O8S Futures Numbered': {
		SpeechAlert: true,
	},
	'O8S Past\'s End': {
		Condition: function () {
			return true;
		},
		SpeechAlert: true,
		TTSText: 'Past',
	},
	'O8S Future\'s End': {
		Condition: function () {
			return true;
		},
		SpeechAlert: true,
		TTSText: 'Future',
	},
	'O8S Wings of Destruction': {
		SpeechAlert: true,
		TTSText: 'double wings',
	},
	'O8S Single Wing of Destruction': {
		SpeechAlert: true,
		TTSText: 'single wing',
	},
	'O8S Indulgent Will': {
		SpeechAlert: true,
		TTSText: 'dps out',
	},
	'O8S Idyllic Will': {
		SpeechAlert: true,
		TTSText: 'dps in',
	},
	'O8S Mana Release': {
		SpeechAlert: true,
	},
	'O8S Thrumming Thunder Real': {
		SpeechAlert: true,
	},
	'O8S Thrumming Thunder Fake': {
		SpeechAlert: true,
	},
	'O8S Blizzard Fake Donut': {
		SpeechAlert: true,
	},
	'O8S Blizzard True Donut': {
		SpeechAlert: true,
	},
	'O8S Blizzard Fake Near': {
		SpeechAlert: true,
	},
	'O8S Blizzard True Near': {
		SpeechAlert: true,
	},
});

