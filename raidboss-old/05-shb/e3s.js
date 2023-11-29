'use strict';




Options.Triggers = Options.Triggers.concat([
    {
        zoneRegex: /^Eden's Gate: Inundation \(Savage\)$/,
        timeline: `
            15 "Rip Ahmed Invuln"
            166 "Rip Tali Invuln"
            314 "Rip Swap"
            490 "Rip Tali Invuln"
            541 "Healer Soak"
            544 "Melee Soak"
            547 "Healer Soak"
            550 "Ranged Soak"
            213 "DNC Shield Samba"
            427 "DNC Shield Samba"
            622 "DNC Shield Samba"
            120 "MCH Tactician"
            360 "MCH Tactician"
            585 "MCH Tactician"
        `,


        timelineTriggers: [
            {
                id: 'E3s Rip Ahmed Invuln',
                regex: /(Rip Ahmed Invuln)/,
            },
            {
                id: 'E3s Rip Tali Invuln',
                regex: /(Rip Tali Invuln)/,
            },
            {
                id: 'E3s Rip Swap',
                regex: /(Rip Swap)/,
            },
            /*{
                id: 'E3s Maelstrom',
                regex: /(Maelstrom)/,
            },*/
            {
                id: 'E3s Black Smokers',
                regex: /(Black Smokers)/,
                beforeSeconds: 4,
            },
        ],


        triggers: [
            {
                id: 'E3S Sundering Waters Group',
                regex: / 1A:\y{ObjectId}:(\y{Name}) gains the effect of Sundering Waters from (?:.*) for (.*) Seconds/,
            },
            {
                id: 'E3S Undersea Quake Inside Custom',
                regex: / 14:3FEE:Leviathan starts using Undersea Quake/,
            },
            {
                id: 'E3S Undersea Quake Outside Custom',
                regex: / 14:3FEF:Leviathan starts using Undersea Quake/,
            },
        ],
    },
]);




/*Object.assign(Options.DisabledTriggers, {
    // Disabled triggers
});*/




Object.assign(Options.PerTriggerOptions, {
    // Tank Busters
    'E3s Rip Ahmed Invuln': {
        SpeechAlert: true,
        TTSText: 'Ahmed, buster',
    },
    'E3s Rip Tali Invuln': {
        SpeechAlert: true,
        TTSText: 'Tahli, buster',
    },
    'E3s Rip Swap': {
        SpeechAlert: false,
        TTSText: 'Buster with Swap',
    },
    // Temporary Current
    'E3S Front Left Temporary Current': {
        SpeechAlert: false,
        TTSText: function (data) {
            if (data.refreshed == true) {
                return 'Double Current';
            }
            return 'Current';
        },
    },
    'E3S Front Right Temporary Current': {
        SpeechAlert: false,
        TTSText: function (data) {
            if (data.refreshed == true) {
                return 'Double Current';
            }
            return 'Current';
        },
    },
    // Undersea Quake
    'E3S Undersea Quake Outside Custom': {
        SpeechAlert: false,
        TTSText: 'Middle, and North',
    },
    'E3S Undersea Quake Inside Custom': {
        SpeechAlert: true,
        TTSText: 'Sides',
    },
    // Black Smokers
    'E3s Black Smokers': {
        SpeechAlert: false,
        TTSText: 'Line up for Smokers',
    },
    // Other Mechanics
    'E3S Tidal Wave Knockback': {
        SpeechAlert: true,
        TTSText: 'Knockback',
    },
    /*'E3s Maelstrom': {
        SpeechAlert: true,
        TTSText: function (data) {
            if (data.refreshed == true) {
                return 'Git Gudder';
            }
            return 'Git Gud';
        },
    },*/
    'E3S Drenching Pulse': {
        SpeechAlert: false,
        TTSText: function (data) {
            if (data.refreshed == true) {
                return 'Bait, then spread to sides';
            }
            return 'Bait, then spread';
        },
    },
    'E3S Sundering Waters Group': {
        SpeechAlert: true,
        TTSText: function (data, matches) {
            let seconds = matches[2];
            if (seconds <= 8) {
                return 'Knockback on ' + data.ShortName(matches[1]);
            }
        },
    },
    'E3S Stormy Horizon': {
        SpeechAlert: true,
        TTSText: 'B',
    },
    'E3S Roiling Pulse': {
        SpeechAlert: false,
        TTSText: 'Bait, then corners',
    },
});

