'use strict';




Object.assign(Options.PerTriggerOptions, {
    'ShinryuEx Akh Morn': {
		SpeechAlert: true,
	},
	'ShinryuEx Diamond Dust': {
		SpeechAlert: true,
		TTSText: 'Ice, stack and stand still',
	},
	'ShinryuEx Dragonfist': {
		SpeechAlert: true,
		TTSText: 'Out of middle',
	},
	'ShinryuEx Hellfire': {
		SpeechAlert: true,
		TTSText: 'In water',
	},
	'ShinryuEx Hypernova': {
		SpeechAlert: true,
		TTSText: function (data) {
			if (data.phase == 3) {
				return {
					en: 'stop to get frozen',
					de: 'Stopp! Einfrieren lassen',
				};
			}
			return {
				en: 'center water',
				de: 'Wasser',
			};
		},
	},
	'ShinryuEx Judgement Bolt': {
		SpeechAlert: true,
		TTSText: 'no water',
	},
	'ShinryuEx Levinbolt': {
		SpeechAlert: true,
		TTSText: function (data) {
			if (data.phase == 3) {
				return {
					en: 'bait bolt, keep moving',
					de: 'Blitz ködern, weiterbewegen',
				};
			}
			return {
				en: 'spread, no water',
				de: 'Blitz',
			};
		},
	},
	'ShinryuEx Levinbolt Phase 3': {
		SpeechAlert: true,
		TTSText: 'move away',
	},
	'ShinryuEx Icicle Left': {
		SpeechAlert: true,
		TTSText: 'icicle, lean west',
	},
	'ShinryuEx Icicle Right': {
		SpeechAlert: true,
		TTSText: 'icicle, lean east',
	},
	'ShinryuEx Tidal Wave': {
		SpeechAlert: true,
	},
	'ShinryuEx Final Tidal Wave': {
		SpeechAlert: true,
	},
	'ShinryuEx Tail Slap': {
		SpeechAlert: true,
	},
	'ShinryuEx Heart': {
		SpeechAlert: true,
	},
	'ShinryuEx Divebomb': {
		SpeechAlert: true,
	},
	'ShinryuEx Death Sentence': {
		SpeechAlert: true,
		TTSText: function (data, matches) {
			return 'death sentence on ' + data.ShortName(matches[1]);
		},
	},
	'ShinryuEx Tera Slash': {
		SpeechAlert: true,
		TTSText: 'buster and swap',
	},
	'ShinryuEx Wormwail': {
		SpeechAlert: true,
	},
	'ShinryuEx Breath': {
		SpeechAlert: true,
	},
	'ShinryuEx Final Left Wing': {
		SpeechAlert: true,
	},
	'ShinryuEx Final Right Wing': {
		SpeechAlert: true,
	},
	'ShinryuEx Tethers': {
		Condition: function () {
			return true;
		},
		SpeechAlert: false,
	},
	'ShinryuEx Tail Marker': {
		Condition: function () {
			return true;
		},
		SpeechAlert: true,
	},
	'ShinryuEx Shakers': {
		SpeechAlert: true,
		TTSText: 'shakers, marked healer left, marked dps right, rest center',
	},
	'ShinryuEx Cocoon Marker': {
		SpeechAlert: true,
		TTSText: 'spread',
	},
});

