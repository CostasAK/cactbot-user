'use strict';




Options.Triggers = Options.Triggers.concat([
    {
        zoneRegex: /^Alphascape V3.0 \(Savage\)$/,
        timeline: `
			762 "Enrage Start"
			23 "Flamethrower Normal"
			331 "Flamethrower Ballistic"
			463 "Flamethrower Normal"
			601 "Flamethrower Ballistic"
			hideall "Flamethrower Normal"
			hideall "Flamethrower Ballistic"
			17 "Buster and Swap"
			65 "Buster and Swap"
			362 "Buster and Tether"
			582 "Buster and Swap"
			734 "Buster and Tether"
			hideall "Buster and Swap"
			hideall "Buster and Tether"
			45 "First Fists"
			386 "Second Fists"
			411 "Second Fists"
			559 "Red Fists Stack"
			562 "Red Fists LB"
			hideall "First Fists"
			hideall "Second Fists"
			hideall "Red Fists Stack"
			hideall "Red Fists LB"
			100 "Magnetics"
			115 "Memory"
			163 "Save LB"
			305 "Tank LB"
			hideall "Magnetics"
			hideall "Memory"
			hideall "Tank LB"
			510 "Panto1 Cardinals"
			519 "Panto1 Diagonals"
			526 "Panto1 Run"
			659 "Panto2 Tanks"
			665 "Panto2 Swappers"
			672 "Panto2 Stayers"
			681 "Panto2 Run"
		`,
        timelineTriggers: [
            {
                id: 'O11S Enrage',
                regex: /(Enrage Start)/,
            },
            {
                id: 'O11S Flamethrower Normal',
                regex: /(Flamethrower Normal)/,
            },
            {
                id: 'O11S Flamethrower Ballistic',
                regex: /(Flamethrower Ballistic)/,
            },
            {
                id: 'O11S Buster and Swap',
                regex: /(Buster and Swap)/,
            },
            {
                id: 'O11S Buster and Tether',
                regex: /(Buster and Tether)/,
            },
            {
                id: 'O11S Tether',
                beforeSeconds: 8,
                regex: /(Blaster)/,
            },
            {
                id: 'O11S First Fists',
                regex: /(First Fists)/,
            },
            {
                id: 'O11S Second Fists',
                regex: /(Second Fists)/,
            },
            {
                id: 'O11S Red Fists Stack',
                regex: /(Red Fists Stack)/,
            },
            {
                id: 'O11S Red Fists LB',
                regex: /(Red Fists LB)/,
            },
            {
                id: 'O11S Magnetics',
                regex: /(Magnetics)/,
            },
            {
                id: 'O11S Memory',
                regex: /(Memory)/,
            },
            {
                id: 'O11S Tank LB',
                regex: /(Tank LB)/,
            },
            {
                id: 'O11S Save LB',
                regex: /(Save LB)/,
            },
            {
                id: 'O11S Final Form',
                beforeSeconds: 4,
                regex: /(Update Program)/,
            },
            {
                id: 'O11S Panto 1',
                beforeSeconds: 4,
                regex: /(Pantokrator 1)/,
            },
            {
                id: 'O11S Panto 1 Cardinals',
                regex: /(Panto1 Cardinals)/,
            },
            {
                id: 'O11S Panto 1 Diagonals',
                regex: /(Panto1 Diagonals)/,
            },
            {
                id: 'O11S Panto 1 Run',
                regex: /(Panto1 Run)/,
            },
            {
                id: 'O11S Panto 2',
                beforeSeconds: 4,
                regex: /(Pantokrator 2)/,
            },
            {
                id: 'O11S Panto 2 Tanks',
                regex: /(Panto2 Tanks)/,
            },
            {
                id: 'O11S Panto 2 Swappers',
                regex: /(Panto2 Swappers)/,
            },
            {
                id: 'O11S Panto 2 Stayers',
                regex: /(Panto2 Stayers)/,
            },
            {
                id: 'O11S Panto 2 Run',
                regex: /(Panto2 Run)/,
            },
        ],
    },
]);




Object.assign(Options.PerTriggerOptions, {
    'O11S Enrage': {
        SpeechAlert: true,
        TTSText: 'Enrage. You can do it. Just kidding, get fucked',
    },
    'O11S Starboard Cannon 1': {
        SpeechAlert: true,
        TTSText: 'Left',
    },
    'O11S Larboard Cannon 1': {
        SpeechAlert: true,
        TTSText: 'Right',
    },
    'O11S Starboard Cannon 2': {
        SpeechAlert: true,
        TTSText: function (data) {
            if (data.lastWasStarboard) {
                return 'Move';
            }
            return 'Stay';
        },
    },
    'O11S Larboard Cannon 2': {
        SpeechAlert: true,
        TTSText: function (data) {
            if (data.lastWasStarboard) {
                return 'Stay';
            }
            return 'Move';
        },
    },
    'O11S Starboard Surge 1': {
        SpeechAlert: true,
        TTSText: 'Left, then move fast',
    },
    'O11S Larboard Surge 1': {
        SpeechAlert: true,
        TTSText: 'Right, then move fast',
    },
    'O11S Starboard Surge 2': {
        SpeechAlert: true,
        TTSText: 'Move',
    },
    'O11S Larboard Surge 2': {
        SpeechAlert: true,
        TTSText: 'Move',
    },
    'O11S Flamethrower Normal': {
        SpeechAlert: true,
        TTSText: 'Lalaas are not for burning',
    },
    'O11S Flamethrower Ballistic': {
        SpeechAlert: true,
        TTSText: 'Flame Spots, then clockwise and fuck off',
    },
    'O11S Tether': {
        SpeechAlert: true,
        TTSText: 'Offtank Tether',
    },
    'O11S First Fists': {
        SpeechAlert: true,
        TTSText: 'Swihggity Swooty, right up the booty',
    },
    'O11S Second Fists': {
        SpeechAlert: true,
        TTSText: 'Tethered players to their fist, the rest stacks in the middle of the arena',
    },
    'O11S Red Fists Stack': {
        SpeechAlert: true,
        TTSText: 'Stack in the corner',
    },
    'O11S Red Fists LB': {
        SpeechAlert: true,
        TTSText: 'Tank LB',
    },
    'O11S Magnetics': {
        SpeechAlert: true,
        TTSText: 'Flame spots. Opposites attract, Equals repel',
    },
    'O11S Memory': {
        SpeechAlert: true,
        TTSText: 'South far then south, north close then north. Gust and Timo go west and east',
    },
    'O11S Tank LB': {
        SpeechAlert: true,
        TTSText: 'Tank LB,. Additional heavy mitigation. Heal to full immediately after',
    },
    'O11S Panto 1': {
        SpeechAlert: true,
        TTSText: 'Panto 1, a glimpse of whats to come. Also, get fucked',
    },
    'O11S Panto 1 Cardinals': {
        SpeechAlert: true,
        TTSText: 'Flame Spots, cardinals stand inside the hitbox, diagonals out',
    },
    'O11S Panto 1 Diagonals': {
        SpeechAlert: true,
        TTSText: 'Diagonals stand in the hitbox, cardinals out',
    },
    'O11S Panto 2': {
        SpeechAlert: true,
        TTSText: 'Panto 2, get fuckeder',
    },
    'O11S Panto 2 Tanks': {
        SpeechAlert: true,
        TTSText: 'Ahmed C, Tahli D, rest south',
    },
    'O11S Panto 2 Swappers': {
        SpeechAlert: true,
        TTSText: 'Swappers in the hitbox, stayers stay away',
    },
    'O11S Panto 2 Stayers': {
        SpeechAlert: true,
        TTSText: 'Stayers on the hitbox, swappers go away',
    },
});

