"use strict";

const unstoppable_sounds = [
  "UT2k4-Sexy-Unstoppable.wav",
  "UT3-unstoppable.wav",
  "UT2k3-Main-unstoppable.wav",
  "UT2k4-Female-Unstoppable.wav",
  "UT2k4-Male-Unstoppable.wav",
];
const invulnerable_sounds = [
  "UT2k4-Female-Invulnerable.wav",
  "UT2k4-Male-Invulnerable.wav",
];

const random_array_element = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

Options.Triggers.push({
  zoneRegex: /.*/,
  initData: () => {
    return {
      no_invuln: [],
    };
  },
  triggers: [
    {
      id: "Invuln Cooldown",
      type: "Ability",
      netRegex: NetRegexes.ability({
        id: "E36|3F18|1E|2B",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.source),
      preRun: (data, matches) => data.no_invuln.push(matches.source),
      delaySeconds: (_, matches) =>
        (matches.id === "E36"
          ? 300
          : matches.id === "3F18"
          ? 360
          : matches.id === "1E"
          ? 420
          : 240) - 1,
      run: (data, matches) =>
        (data.no_invuln = data.no_invuln.filter((a) => a !== matches.source)),
    },
    {
      id: "DRK Living Dead",
      type: "Ability",
      netRegex: NetRegexes.ability({
        id: "E36",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.source),
      sound: "../../user/wav/minecraft-zombie-normal2.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "DRK Walking Dead",
      type: "GainsEffect",
      netRegex: NetRegexes.gainsEffect({
        effect: "Walking Dead",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.target),
      sound: "../../user/wav/minecraft-zombie-hurt2.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "GNB Superbolide",
      type: "Ability",
      netRegex: NetRegexes.ability({
        id: "3F18",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.source),
      sound: "../../user/wav/MGS_alert.wav",
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "PLD Hallowed Ground",
      type: "Ability",
      netRegex: NetRegexes.ability({
        id: "1E",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.source),
      sound: () =>
        "../../user/wav/" + random_array_element(invulnerable_sounds),
      soundVolume: 0.71,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "WAR Holmgang",
      type: "Ability",
      netRegex: NetRegexes.ability({
        id: "2B",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.source),
      sound: () => "../../user/wav/" + random_array_element(unstoppable_sounds),
      soundVolume: 0.71,
      options: {
        SoundAlert: true,
      },
    },
  ],
});
