"use strict";

Options.Triggers.push({
  zoneRegex: /.*/,
  triggers: [
    {
      id: "Death Ahmed",
      type: "WasDefeated",
      netRegex: NetRegexes.wasDefeated({
        target: "Ahmed Sins",
        capture: false,
      }),
      sound: "../../user/wav/roblox-death-sound.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "Death Tymo",
      type: "WasDefeated",
      netRegex: NetRegexes.wasDefeated({
        target: "Tymo Aimali",
        capture: false,
      }),
      sound: "../../user/wav/roblox-death-sound.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "Death Marielle",
      type: "WasDefeated",
      netRegex: NetRegexes.wasDefeated({
        target: "Marielle Maru",
        capture: false,
      }),
      sound: "../../user/wav/roblox-death-sound.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "Death Kali",
      type: "WasDefeated",
      netRegex: NetRegexes.wasDefeated({
        target: "Kali Sunfeather",
        capture: false,
      }),
      sound: "../../user/wav/roblox-death-sound.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "Death Tali",
      type: "WasDefeated",
      netRegex: NetRegexes.wasDefeated({
        target: "Tali Lamora",
        capture: false,
      }),
      sound: "../../user/wav/roblox-death-sound.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "Death Shiroe",
      type: "WasDefeated",
      netRegex: NetRegexes.wasDefeated({
        target: "Shiroe Enchanter",
        capture: false,
      }),
      sound: "../../user/wav/roblox-death-sound.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "Death Gust",
      type: "WasDefeated",
      netRegex: NetRegexes.wasDefeated({
        target: "Gust Leonard",
        capture: false,
      }),
      sound: "../../user/wav/roblox-death-sound.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "Death Yuki",
      type: "WasDefeated",
      netRegex: NetRegexes.wasDefeated({
        target: "Yuki Kimura",
        capture: false,
      }),
      sound: "../../user/wav/roblox-death-sound.wav",
      options: {
        SoundAlert: true,
      },
    },
  ],
});
