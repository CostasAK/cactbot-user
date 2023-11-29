"use strict";

Options.Triggers.push({
  zoneId: ZoneId.AbyssosTheEighthCircleSavage,
});

Object.assign(Options.PerTriggerOptions, {
  "P8S Scorching Fang": {
    SpeechAlert: true,
  },
  "P8S Sun's Pinion": {
    SpeechAlert: true,
  },
  "P8S Conceptual Diflare Quadruped": {
    SpeechAlert: true,
  },
  "P8S Conceptual Tetraflare Quadruped": {
    SpeechAlert: true,
  },
  "P8S Octaflare": {
    SpeechAlert: true,
  },
  "P8S Tetraflare": {
    SpeechAlert: true,
  },
  "P8S Nest of Flamevipers": {
    SpeechAlert: true,
  },
  "P8S Torch Flame": {
    SpeechAlert: true,
  },
  "P8S Footprint": {
    SoundAlert: true,
    SoundOverride: "../../user/wav/bofuri-knockback.wav",
    VolumeOverride: 1,
  },
  "P8S Snaking Kick": {
    SoundAlert: true,
    SoundOverride: "../../user/wav/captain-america-get-away.wav",
    VolumeOverride: 1,
  },
  "P8S Gorgon Location": {
    SpeechAlert: true,
  },
  "P8S Uplift Counter": { SpeechAlert: true },
  "P8S Quadrupedal Impact/Crush": {
    SpeechAlert: true,
  },
  "P8S Illusory Hephaistos Scorched Pinion First": {
    SpeechAlert: true,
  },
  "P8S Illusory Hephaistos Scorched Pinion Second": {
    SpeechAlert: true,
  },
  "P8S Hemitheos's Flare Hit": {
    SpeechAlert: false,
    TTSText: "Tank heal in",
  },
  "P8S Hemitheos's Flare Not Hit": {
    SpeechAlert: false,
    TTSText: "DPS in",
  },
  "P8S Suneater Cthonic Vent Initial": {
    SpeechAlert: true,
  },
  "P8S Suneater Cthonic Vent Later": {
    SpeechAlert: true,
  },
  "P8S Gorgospit Location": {
    SpeechAlert: true,
  },
});
