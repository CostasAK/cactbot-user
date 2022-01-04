'use strict';




Object.assign(Options.PerTriggerOptions, {
    'O12S2 Aggro Target': {
        SpeechAlert: false,
        SoundAlert: true,
        TextAlert: false,
        SoundOverride: 'C:/Program Files (x86)/Advanced Combat Tracker/Hojoring/resources/wav/Agro.wav',
    },
    'O12S Diffuse Wave Cannon Sides': {
        SpeechAlert: true,
        TTSText: 'Sides',
    },
    'O12S Diffuse Wave Cannon Front/Back': {
        SpeechAlert: true,
        TTSText: 'Front or Back',
    },
    'O12S Oversampled Wave Cannon Right': {
        SpeechAlert: true,
        TTSText: 'tanks right, rest left',
    },
    'O12S Oversampled Wave Cannon Left': {
        SpeechAlert: true,
        TTSText: 'tanks left, rest right',
    },
    'O12S Target Analysis Target': {
        SpeechAlert: true,
        TTSText: function (data, matches) {
            data.tankDefamation = true;
            return 'meme buster';
        },
    },
    'O12S Archive All Red Arrow': {
        SpeechAlert: true,
        DelaySeconds: 2,
        TTSText: 'back right',
    },
    'O12S Archive All Blue Arrow': {
        SpeechAlert: true,
        DelaySeconds: 3,
        TTSText: 'back left',
    },
    'O12S Archive Peripheral': {
        SpeechAlert: true,
        TTSText: function (data) {
            let v = parseInt(data.armValue);
            if (!(v >= 0) || v > 7)
                return;
            return {
                en: {
                    0b000: 'Delta, D',
                    0b001: 'Charlie 1, 1',
                    0b010: undefined,
                    0b011: 'Charlie 2, 2',
                    0b100: 'Delta Alpha, D A',
                    0b101: undefined,
                    0b110: 'Alpha Beta, A B',
                    0b111: 'Beta, B',
                },
            }[data.lang][v];
        },
    },
    'O12S Defamation': {
        Condition: function () {
            return true;
        },
        SpeechAlert: true,
        TTSText: function (data, matches) {
            if ((data.ShortName(matches[1]) == 'Chungus' || data.ShortName(matches[1]) == 'Tahli') && data.tankDefamation) {
                data.tankDefamation = false;
                return data.ShortName(matches[1]);
            }
        },
        AlarmText: function (data, matches) {
            if (data.me == matches[1]) {
                return 'Defamation on YOU';
            }
        },
    },
});

