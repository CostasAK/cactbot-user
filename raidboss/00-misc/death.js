"use strict";

const death_volume = 0.75;

const death_sounds_enabled = true;

const death_root = "../../user/wav/Deaths2023-11/";

var deathCounterAhmed = 0;
var deathCounterKali = 0;
var deathCounterYuki = 0;

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
      sound: () => death_root + "ahmed" + deathCounterAhmed + ".wav",
      run: () => (deathCounterAhmed = (deathCounterAhmed + 1) % 3),
      options: {
        SoundAlert: true,
        VolumeOverride: death_volume,
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
      sound: () => death_root + "Tymo.wav",
      options: {
        SoundAlert: true,
        VolumeOverride: death_volume,
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
        death_root + "Mari" + Options.UserFunctions.random_integer(2) + ".wav",
      options: {
        SoundAlert: true,
        VolumeOverride: death_volume,
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
      sound: () => death_root + "Kali" + deathCounterKali + ".wav",
      run: () => (deathCounterKali = (deathCounterKali + 1) % 15),
      options: {
        SoundAlert: true,
        VolumeOverride: death_volume,
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
        death_root + "Tali" + Options.UserFunctions.random_integer(8) + ".wav",
      options: {
        SoundAlert: true,
        VolumeOverride: death_volume,
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
      sound: () => death_root + "Shiroe.wav",
      options: {
        SoundAlert: true,
        VolumeOverride: death_volume,
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
      sound: () => death_root + "Gust.wav",
      options: {
        SoundAlert: true,
        VolumeOverride: death_volume,
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
      sound: (data) => death_root + "Yuki" + deathCounterYuki + ".wav",
      run: (data) => (deathCounterYuki = (deathCounterYuki + 1) % 4),
      options: {
        SoundAlert: true,
        VolumeOverride: death_volume,
      },
    },
  ],
});
