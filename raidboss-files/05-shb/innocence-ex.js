'use strict';




Object.assign(Options.PerTriggerOptions, {
    'InnoEx Righteous Bolt': {
        SpeechAlert: true,
        TTSText: 'Swap',
    },
    'InnoEx Charge': {
        SpeechAlert: true,
        TTSText: function (data) {
            if (data.starbirthActive) {
                return {
                    en: 'Avoid Charge and Orbs',
                    fr: 'Evitez les charges et orbes',
                };
            }
            return {
                en: 'Avoid Charge',
                fr: 'Evitez les charges',
            };
        },
    },
    'InnoEx Starbirth Avoid': {
        SpeechAlert: true,
        TTSText: 'Go to safe corner',
    },
    'InnoEx Starbirth Explode': {
        SpeechAlert: true,
        TTSText: 'Go to safe corner',
    },
    'InnoEx God Ray': {
        SpeechAlert: true,
        TTSText: 'Avoid swords, then ray',
    },
    'InnoEx Light Pillar': {
        SpeechAlert: true,
        TTSText: function (data, matches) {
            if (data.lightPillar == 3) {
                return {
                    en: 'Aim Line stack At Back Orb',
                    fr: 'Visez l\'orbe arrière avec la ligne',
                };
            }
            return {
                en: 'Avoid Orbs With Line stack',
                fr: 'Evitez l\'orbe avec la ligne',
            };
        },
    },
});

