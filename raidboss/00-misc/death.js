"use strict";

const death_sounds_enabled = true;

var mari_death_counter = 0;

Options.Triggers.push({
  zoneRegex: /.*/,
  triggers: [
    {
      id: "Death Cooldown",
      type: "WasDefeated",
      netRegex: NetRegexes.wasDefeated({
        capture: false,
      }),
      delaySeconds: 5,
      run: (data) => (data.death_cooldown = false),
    },
    {
      id: "Death Ahmed",
      disabled: !death_sounds_enabled,
      type: "WasDefeated",
      netRegex: NetRegexes.wasDefeated({
        target: "Ahmed Sins",
        capture: false,
      }),
      condition: (data) => !data.death_cooldown,
      preRun: (data) => (data.death_cooldown = true),
      sound: () =>
        "../../user/wav/Ahmed2022-01-11/0" +
        Options.UserFunctions.random_array_element([
          ["1", 6],
          ["2", 5],
          ["3", 4],
          ["4", 3],
          ["5", 2],
          ["6", 1],
        ]) +
        ".wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "Death Tymo",
      disabled: !death_sounds_enabled,
      type: "WasDefeated",
      netRegex: NetRegexes.wasDefeated({
        target: "Tymo Aimali",
        capture: false,
      }),
      condition: (data) => !data.death_cooldown,
      preRun: (data) => (data.death_cooldown = true),
      sound: () =>
        "../../user/wav/Tymo2022-01-11/" +
        Options.UserFunctions.random_integer(28) +
        ".wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "Death Marielle",
      disabled: !death_sounds_enabled,
      type: "WasDefeated",
      netRegex: NetRegexes.wasDefeated({
        target: "Marielle Maru",
        capture: false,
      }),
      condition: (data) => !data.death_cooldown,
      preRun: (data) => (data.death_cooldown = true),
      sound: () =>
        "../../user/wav/Mari2022-01-12/" + mari_death_counter + ".wav",
      run: () => (mari_death_counter = (mari_death_counter + 1) % 3),
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "Death Kali",
      disabled: !death_sounds_enabled,
      type: "WasDefeated",
      netRegex: NetRegexes.wasDefeated({
        target: "Kali Sunfeather",
        capture: false,
      }),
      condition: (data) => !data.death_cooldown,
      preRun: (data) => (data.death_cooldown = true),
      sound: () =>
        "../../user/wav/Kali2022-01-10/Recording_" +
        Math.floor(Math.random() * 10) +
        ".wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "Death Tali",
      disabled: !death_sounds_enabled,
      type: "WasDefeated",
      netRegex: NetRegexes.wasDefeated({
        target: "Tali Lamora",
        capture: false,
      }),
      condition: (data) => !data.death_cooldown,
      preRun: (data) => (data.death_cooldown = true),
      sound: () =>
        "../../user/wav/tali2022-01-10/tali-" +
        Math.floor(Math.random() * 6) +
        ".wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "Death Shiroe",
      disabled: !death_sounds_enabled,
      type: "WasDefeated",
      netRegex: NetRegexes.wasDefeated({
        target: "Shiroe Enchanter|Roe Two",
        capture: false,
      }),
      condition: (data) => !data.death_cooldown,
      preRun: (data) => (data.death_cooldown = true),
      sound: () =>
        "../../user/wav/Shiroe2022-01-10/Shiroe-0" +
        Math.floor(Math.random() * 9) +
        ".wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "Death Gust",
      disabled: !death_sounds_enabled,
      type: "WasDefeated",
      netRegex: NetRegexes.wasDefeated({
        target: "Gust Leonard",
        capture: false,
      }),
      condition: (data) => !data.death_cooldown,
      preRun: (data) => (data.death_cooldown = true),
      sound: () =>
        "../../user/wav/Gust2022-01-12/" +
        Options.UserFunctions.random_array_element([
          "Back to work",
          "How dissapointing",
          "How intriguing",
          "It's size",
          "No no no",
          "Pathetic thing",
          "Personal development",
          "Try again",
        ]) +
        ".wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "Death Yuki",
      disabled: !death_sounds_enabled,
      type: "WasDefeated",
      netRegex: NetRegexes.wasDefeated({
        target: "Yuki Kimura",
        capture: false,
      }),
      condition: (data) => !data.death_cooldown,
      preRun: (data) => (data.death_cooldown = true),
      sound: "../../user/wav/oh-no-knuckles.wav",
      options: {
        SoundAlert: true,
      },
    },
  ],
});
