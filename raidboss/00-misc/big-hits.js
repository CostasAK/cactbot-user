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

var pneuma_odds = Math.random();
var pneuma_counter = 0;

Options.Triggers.push({
  zoneRegex: /.*/,
  triggers: [
    {
      id: "AST Earthly Star DirectCrit or InstaKill",
      type: "Ability",
      netRegex: NetRegexes.abilityFull({
        id: "1D11",
        flags: "\\d{3,5}(3\\d|\\d3)3",
        capture: false,
      }),
      sound: "../../user/wav/Independence Day Welcome to Earth.wav",
      soundVolume: 0.2,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "BLM Xenoglossy Big Hit",
      type: "Ability",
      netRegex: NetRegexes.abilityFull({
        id: "407B",
        capture: true,
      }),
      condition: (data, matches) =>
        data.party.inParty(matches.source) && log2dmg(matches.damage) >= 32768,
      sound: "../../user/wav/KonoSuba-Megumin-Explosion.wav",
      soundVolume: 0.2,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "DRK Esteem DirectCrit or InstaKill",
      type: "Ability",
      netRegex: NetRegexes.abilityFull({
        source: "Esteem",
        flags: "\\d{3,5}(3\\d|\\d3)3",
        capture: false,
      }),
      sound: "../../user/wav/Edgy!.wav",
      soundVolume: 0.25,
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
      netRegex: NetRegexes.abilityFull({
        id: "4072",
        flags: "\\d{3,5}(3\\d|\\d3)3",
        capture: true,
      }),
      condition: (data, matches) =>
        data.party.inParty(matches.source) && !data.mch_reassemble,
      sound: "../../user/wav/TTGL_drill.wav",
      soundVolume: 0.2,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "NIN Bunshin",
      type: "Ability",
      netRegex: NetRegexes.abilityFull({
        ability: "Bunshin",
        flags: "\\d{3,5}(3\\d|\\d3)3",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.source),
      sound: "../../user/wav/NARUTO_KAGE-BUNSHIN-NO-JUTSU.wav",
      soundVolume: 0.2,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "SAM Midare Setsugekka Big Hit",
      type: "Ability",
      netRegex: NetRegexes.abilityFull({
        id: "1D3F",
        capture: true,
      }),
      condition: (data, matches) =>
        data.party.inParty(matches.source) && log2dmg(matches.damage) >= 40000,
      sound: "../../user/wav/south-park-lets-fighting-love-wonderful-penis.wav",
      soundVolume: 0.2,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "SGE Pneuma DirectCrit or InstaKill",
      type: "Ability",
      netRegex: NetRegexes.abilityFull({
        id: "5EFE",
        flags: "\\d{3,5}(3\\d|\\d3)3",
        capture: true,
      }),
      condition: (data, matches) => data.party.inParty(matches.source),
      preRun: () => (pneuma_odds = Math.random()),
      sound: () => {
        "../../user/wav/" +
          (pneuma_odds ? "TOOL Become Pneuma" : "Numa Numa " + pneuma_counter) +
          ".wav";
      },
      soundVolume: 0.2,
      options: {
        SoundAlert: true,
      },
      run: () =>
        (pneuma_counter = pneuma_odds < 0.1 ? 0 : (pneuma_counter + 1) % 3),
    },
    {
      id: "WHM Afflatus Misery Big Hit",
      type: "Ability",
      netRegex: NetRegexes.abilityFull({
        id: "4097",
        capture: true,
      }),
      condition: (data, matches) =>
        data.party.inParty(matches.source) && log2dmg(matches.damage) >= 32768,
      sound: "../../user/wav/anime-wow-sound-effect.wav",
      soundVolume: 0.2,
      options: {
        SoundAlert: true,
      },
    },
  ],
});
