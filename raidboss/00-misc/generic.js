"use strict";

const random_array_element = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

Options.Triggers.push({
  zoneRegex: /.*/,
  triggers: [
    {
      id: "Charybdis",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({
        ability: "(?:Charybdis|Terror Unleashed)",
        capture: false,
      }),
      sound: "../../user/wav/FH-Healthbars-Short.wav",
      soundVolume: 0.25,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "Look Away",
      type: "StartsUsing",
      netRegex: NetRegexes.startsUsing({
        ability: "(?:Petrifaction|Nightmare|Absolute Flash)",
        capture: false,
      }),
      sound: "../../user/wav/MITE MITE NYARUKO.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "Damage Down",
      type: "GainsEffect",
      netRegex: NetRegexes.gainsEffect({
        effect: "(?:Damage Down|Vulnerability Up|Paralysis|Stun)",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.target),
      suppressSeconds: 1,
      sound: () =>
        "../../user/wav/" +
        random_array_element([
          "CrashBandicoot Woah 01.wav",
          "CrashBandicoot Woah 02.wav",
          "CrashBandicoot Woah 03.wav",
          "roblox-death-sound.wav",
        ]),
      soundVolume: 0.5,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "Request Message",
      type: "GameLog",
      netRegex: NetRegexes.gameLog({
        code: "000e",
        line: "YUKKURI: (?<message>.*)",
        capture: true,
      }),
      suppressSeconds: 1,
      tts: (_, matches) => matches.message,
      options: {
        SpeechAlert: true,
      },
    },
    {
      id: "Provoke",
      type: "Ability",
      netRegex: NetRegexes.ability({
        id: "1D6D",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.source),
      sound: () =>
        "../../user/wav/" +
        random_array_element(
          [
            ["Monty Python and the Holy Grail - Ni 1.wav", 4],
            ["Monty Python and the Holy Grail - Ni 2.wav", 4],
            ["Monty Python and the Holy Grail - Ni 3.wav", 4],
            ["Monty Python and the Holy Grail - Ni 4.wav", 4],
            ["Monty Python and the Holy Grail - Ni 5.wav", 4],
            ["Monty Python and the Holy Grail - Ni 6.wav", 4],
            ["Monty Python and the Holy Grail - Ni 7.wav", 4],
            ["Monty Python and the Holy Grail - Ni 8.wav", 4],
            ["Monty Python and the Holy Grail - Ni 9.wav", 4],
            ["Monty Python and the Holy Grail - Ni 10.wav", 4],
            ["Monty Python and the Holy Grail - Ni 11.wav", 4],
            ["Monty Python and the Holy Grail - Ni 12.wav", 4],
            ["Monty Python and the Holy Grail - Ni 13.wav", 4],
            ["Monty Python and the Holy Grail - tPeng.wav", 1],
            ["Monty Python and the Holy Grail - NiWong.wav", 1],
            ["anime-rabbit-touch-me.wav", 2],
            ["anime-rabbit-touch-me-harder.wav", 1],
          ]
            .map((elem) => Array(elem[1]).fill(elem[0]))
            .flat(Infinity)
        ),
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "Teleport",
      type: "Ability",
      netRegex: NetRegexes.ability({
        id: "3E8A|64A2|5F51|5F52|5F53|5EE7|9B|1CFB|8D6",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.source),
      sound: () =>
        "../../user/wav/" +
        random_array_element(
          [
            ["Dragon Ball Super Teleport 1.wav", 2],
            ["Dragon Ball Super Teleport 2.wav", 2],
            ["Dragon Ball Super Teleport 3.wav", 2],
            ["Dragon Ball Super Teleport 4.wav", 2],
            ["Dragon Ball Super Teleport 5.wav", 2],
            ["Dragon Ball Super Teleport 6.wav", 2],
            ["Bleach - Shunpo.wav", 1],
            ["Bleach - Sonido.wav", 2],
          ]
            .map((elem) => Array(elem[1]).fill(elem[0]))
            .flat(Infinity)
        ),
      soundVolume: 0.2,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "Missed Combo",
      disabled: true,
      type: "Ability",
      netRegex: NetRegexes.ability({
        id: "0F|DD3|DD2|4049|25|2A|2D|404E|E27|E30|4054|3F0B|3F11|3F15|4E|54|57|58|1CE5|405D|8C2|8CF|4068|DEB|1D37|1D3A|1D36|1D39|1D38|1D3D|1D3C|1CF4|1CF5|3E76|3E7A|1D68|1D69|1D58|1D5C",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.source),
      sound: () =>
        "../../user/wav/" +
        random_array_element([
          "CrashBandicoot Woah 01.wav",
          "CrashBandicoot Woah 02.wav",
          "CrashBandicoot Woah 03.wav",
        ]),
      soundVolume: 0.25,
      options: {
        SoundAlert: false,
      },
    },
    {
      id: "NIN Bunny",
      type: "Ability",
      netRegex: NetRegexes.ability({
        id: "8E0",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.source),
      sound: () => "../../user/wav/ACNH_stung_by_wasps.wav",
      soundVolume: 0.2,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "DNC Improvisation",
      type: "Ability",
      netRegex: NetRegexes.ability({
        id: "3E8E",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.source),
      sound: () =>
        "../../user/wav/" +
        random_array_element(
          [
            ["Eskimo Callboy Hypa Hypa dance baby dance.wav", 2],
            ["Eskimo Callboy Hypa Hypa Dance for me Dance.wav", 2],
            ["Eskimo Callboy Hypa Hypa Let me see you shake your hips.wav", 2],
            ["everybody-dance-now.wav", 3],
            ["everybody-dance-now-2.wav", 3],
            ["House of Pain - Jump Around (Official Music Video).wav", 6],
            ["david-bowie-lets-dance-short.wav", 6],
            [
              "Technotronic - Pump Up The Jam (Get Your Booty on the Floor Tonight).wav",
              6,
            ],
            ["Bee Gees - You Should Be Dancing 1976 (HQ Audio).wav", 6],
            ["Bruce Springsteen - Dancing In the Dark (Official Video).wav", 6],
            [
              "Whitney Houston - I Wanna Dance With Somebody (Official Video).wav",
              6,
            ],
            ["Men Without Hats - Safety Dance (HD 720p).wav", 6],
            [
              "KC & The Sunshine Band - Get Down Tonight (HQ with lyrics).wav",
              6,
            ],
            ["Billy Idol - Dancing With Myself (Official Music Video).wav", 6],
            ["I'm Happy Just To Dance With You (Remastered 2009).wav", 6],
            ["Chic - Everybody Dance.wav", 6],
            ["Leo Sayer - You make me feel like dancing (1976).wav", 6],
            ["Madonna - Into The Groove (Official Music Video).wav", 6],
            ["Salt-N-Pepa - Push It (Official Video).wav", 6],
            ["Sly & The Family Stone - Dance To The Music (Audio).wav", 6],
            ["The Hooters - And We Danced (Official Video).wav", 6],
            [
              "Backstreet Boys - Everybody (Backstreet's Back) (Official Music Video).wav",
              6,
            ],
            ["Elton John - Tiny Dancer (Official Music Video).wav", 6],
            ["The Kinks Come Dancing.wav", 6],
            [
              "C+C Music Factory - Gonna Make You Sweat (Everybody Dance Now) ft. Freedom Williams.wav",
              6,
            ],
          ]
            .map((elem) => Array(elem[1]).fill(elem[0]))
            .flat(Infinity)
        ),
      soundVolume: 0.71,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "Rescue",
      type: "Ability",
      netRegex: NetRegexes.ability({
        id: "1D93",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.source),
      sound: () =>
        "../../user/wav/" +
        random_array_element(
          [
            ["GET OVER HERE.wav", 3],
            ["accio bum0.wav", 2],
            ["accio bum1.wav", 2],
            ["accio bum2.wav", 1],
            ["accio bum3.wav", 1],
          ]
            .map((elem) => Array(elem[1]).fill(elem[0]))
            .flat(Infinity)
        ),
      soundVolume: 0.32,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "PLD Cover",
      type: "Ability",
      netRegex: NetRegexes.ability({
        id: "1B",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.source),
      sound: () =>
        "../../user/wav/DarknessPLD/Cover" +
        Math.floor(Math.random() * 5) +
        ".wav",
      soundVolume: 0.5,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "PLD Wings",
      type: "Ability",
      netRegex: NetRegexes.ability({
        id: "1CD9",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.source),
      sound: () =>
        "../../user/wav/DarknessPLD/Wings" +
        Math.floor(Math.random() * 5) +
        ".wav",
      soundVolume: 0.5,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "This Is The End",
      type: "Ability",
      netRegex: NetRegexes.ability({
        ability: ".*?\\bEnd\\b.*?",
        capture: true,
      }),
      condition: (data, matches) => !data.party.inParty(matches.source),
      sound: () => "../../user/wav/This is The End.wav",
      soundVolume: 0.32,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "Well Fed",
      type: "GainsEffect",
      netRegex: NetRegexes.gainsEffect({
        effect: "Well Fed",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.target),
      suppressSeconds: 1,
      sound: () =>
        "../../user/wav/" +
        random_array_element([
          "Minecraft eating sound effect 1.wav",
          "Minecraft eating sound effect 2.wav",
          "ACNH_Eat_Short.wav",
          "ACNH_Eat.wav",
        ]),
      soundVolume: 0.2,
      options: {
        SoundAlert: true,
      },
    },
  ],
});
