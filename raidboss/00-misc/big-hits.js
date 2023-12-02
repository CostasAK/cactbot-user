"use strict";

const log2dmg = (log) => {
  // Check Hallowed
  if ((parseInt(log, 16) & parseInt("1000", 16)) > 0) return 0;

  let damage = log.padStart(8, "0");

  if (!((parseInt(damage, 16) & parseInt("4000", 16)) > 0)) {
    return parseInt(damage.substr(0, 4), 16);
  }

  const parts = [
    damage.substr(0, 2),
    damage.substr(2, 2),
    damage.substr(4, 2),
    damage.substr(6, 2),
  ];

  return parseInt(
    parts[3] +
      parts[0] +
      (parseInt(parts[1], 16) - parseInt(parts[3], 16)).toString(16),
    16
  );
};

const dhcrit_regex = /7[51](?:6\d{2}|\d{2}3)3/gi;
const dh_or_crit_regex = /7[51](?:[246]\d{2}|\d{2}3)3/gi;
const raise_ability = /Raise|Resurrection|Ascend|Egeiro/gi;

var pneuma_odds = Math.random() < 0.1;
var pneuma_counter = 0;

Options.Triggers.push({
  zoneRegex: /.*/,
  triggers: [
    {
      id: "PLD Blade of Valor",
      type: "Ability",
      netRegex: NetRegexes.ability({
        id: "6496",
        flags: dhcrit_regex,
        capture: false,
      }),
      sound: "../../user/wav/anime-wow-sound-effect.wav",
      soundVolume: 0.5,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "WAR Primal Rend",
      type: "Ability",
      netRegex: NetRegexes.ability({
        id: "6499",
        capture: true,
      }),
      condition: (_, matches) => log2dmg(matches.damage) >= 42069,
      sound: "../../user/wav/BerserkClang.wav",
      soundVolume: 0.5,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "DRK Esteem DirectCrit or InstaKill",
      type: "Ability",
      netRegex: NetRegexes.ability({
        source: "Esteem",
        flags: dhcrit_regex,
        capture: false,
      }),
      sound: "../../user/wav/Edgy!.wav",
      soundVolume: 0.5,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "WHM Afflatus Misery Big Hit",
      type: "Ability",
      netRegex: NetRegexes.ability({
        id: "4097",
        flags: dhcrit_regex,
        capture: false,
      }),
      sound: "../../user/wav/anime-wow-sound-effect.wav",
      soundVolume: 0.5,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "AST Earthly Star DirectCrit or InstaKill",
      type: "Ability",
      netRegex: NetRegexes.ability({
        id: "1D11",
        flags: dhcrit_regex,
        capture: false,
      }),
      sound: "../../user/wav/Independence Day Welcome to Earth.wav",
      soundVolume: 0.5,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "SGE Pneuma DirectCrit or InstaKill",
      type: "Ability",
      netRegex: NetRegexes.ability({
        id: "5EFE",
        flags: dh_or_crit_regex,
        capture: false,
      }),
      preRun: () => {
        pneuma_odds = Math.random() < 0.1;
        pneuma_counter ||= 0;
      },
      sound: () =>
        `../../user/wav/${
          pneuma_odds ? "TOOL Become Pneuma" : "Numa Numa " + pneuma_counter
        }.wav`,
      soundVolume: 0.5,
      options: {
        SoundAlert: true,
      },
      run: () =>
        (pneuma_counter = pneuma_odds
          ? pneuma_counter
          : (pneuma_counter + 1) % 3),
    },
    {
      id: "NIN Bunshin",
      type: "Ability",
      netRegex: NetRegexes.ability({
        ability: "Bunshin",
        flags: dhcrit_regex,
        capture: false,
      }),
      sound: "../../user/wav/NARUTO_KAGE-BUNSHIN-NO-JUTSU.wav",
      soundVolume: 0.5,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "SAM Midare Setsugekka Big Hit",
      type: "Ability",
      netRegex: NetRegexes.ability({
        id: "1D3F",
        flags: dhcrit_regex,
        capture: false,
      }),
      sound: "../../user/wav/south-park-lets-fighting-love-wonderful-penis.wav",
      soundVolume: 0.5,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "RPR Plentiful Harvest",
      type: "Ability",
      netRegex: NetRegexes.ability({
        id: "5F41",
        flags: dhcrit_regex,
        capture: false,
      }),
      sound: "../../user/wav/SpookySlice.wav",
      soundVolume: 0.5,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "MCH Reassemble",
      type: "Ability",
      netRegex: NetRegexes.ability({
        id: "B3C",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.source),
      preRun: (data) => (data.mch_reassemble = true),
      delaySeconds: 5.5,
      run: (data) => (data.mch_reassemble = false),
    },
    {
      id: "MCH Natural DirectCrit Drill",
      type: "Ability",
      netRegex: NetRegexes.ability({
        id: "4072",
        flags: dhcrit_regex,
        capture: true,
      }),
      condition: (data, matches) =>
        data.party.inParty(matches.source) && !data.mch_reassemble,
      sound: "../../user/wav/TTGL_drill.wav",
      soundVolume: 0.5,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "BLM Xenoglossy Big Hit",
      type: "Ability",
      netRegex: NetRegexes.ability({
        id: "407B",
        flags: dhcrit_regex,
        capture: false,
      }),
      sound: "../../user/wav/KonoSuba-Megumin-Explosion.wav",
      soundVolume: 0.5,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "Mari Raise",
      type: "Ability",
      netRegex: NetRegexes.ability({
        type: "21",
        source: "Marielle Maru",
        ability: raise_ability,
        capture: true,
      }),
      sound: () =>
        "../../user/wav/" +
        Options.UserFunctions.random_array_element([
          "ImInDanger",
          "donotredeem",
        ]) +
        ".wav",
      soundVolume: 0.5,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "Kali Raise",
      type: "Ability",
      netRegex: NetRegexes.ability({
        type: "21",
        source: "Kali Sunfeather",
        ability: raise_ability,
        capture: true,
      }),
      sound: () =>
        "../../user/wav/Kali2022-01-10/Recording_" +
        Options.UserFunctions.random_array_element(["0", "4", "5", "7"]) +
        ".wav",
      soundVolume: 0.5,
      options: {
        SoundAlert: true,
      },
    },
  ],
});
