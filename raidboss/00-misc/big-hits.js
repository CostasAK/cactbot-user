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

Options.Triggers.push({
  zoneRegex: /.*/,
  triggers: [
    {
      id: "AST Earthly Star DirectCrit or InstaKill",
      type: "Ability",
      netRegex: NetRegexes.abilityFull({
        id: "1D11",
        flags: "\\d{3,5}(3\\d|\\d3)3",
        capture: true,
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
      condition: (_, matches) => log2dmg(matches.damage) >= 2 ** 15,
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
  ],
});
