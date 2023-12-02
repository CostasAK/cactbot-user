"use strict";

Options.Triggers.push({
  zoneId: ZoneId.AnabaseiosTheTenthCircleSavage,
  timeline: ['75 "Bridge Towers Webs"', '285 "Bridge Webs Towers"'],
  timelineTriggers: [
    {
      id: "P10S Ultima 14s",
      regex: /Ultima/i,
      beforeSeconds: 12,
      sound: "../../user/wav/FFXIV_UnleashUltima.wav",
      soundVolume: 0.5,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "P10S Knockback 4s",
      regex: /knockback/i,
      beforeSeconds: 4,
      sound: "../../user/wav/bofuri-knockback.wav",
      soundVolume: 1,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "P10S Bridge Towers Webs",
      regex: /Bridge Towers Webs/i,
      tts: "Bridge, then Towers, then Webs",
      options: {
        SpeechAlert: true,
      },
    },
    {
      id: "P10S Bridge Webs Towers",
      regex: /Bridge Webs Towers/i,
      tts: "Bridge, then Webs, then Towers",
      options: {
        SpeechAlert: true,
      },
    },
  ],
  triggers: [
    {
      id: "P10S Dividing Wings Tether Heals",
      type: "Tether",
      netRegex: { id: "00F2", source: "Pand\u00e6monium" },
      delaySeconds: 0.5,
      suppressSeconds: 5,
      tts: (data) =>
        data.dividingWingsTethers
          .map((name) => data.ShortName(name))
          .join(" and ") + " have a tether",
      options: {
        SpeechAlert: true,
      },
    },
  ],
});

Object.assign(Options.PerTriggerOptions, {
  "P10S Circles of Pandaemonium": {
    SpeechAlert: true,
    TTSText: "Get in",
  },
  "P10S Pandaemon's Holy": {
    SoundAlert: true,
    SoundOverride: "../../user/wav/captain-america-get-away.wav",
    VolumeOverride: 1,
  },
  "P10S Pandaemoniac Turrets": {
    SpeechAlert: true,
  },
  "P9S Archaic Demolish": {
    SpeechAlert: true,
    TTSText: "Stacky's",
  },
  "P10S Pandaemoniac Meltdown Stack": {
    SpeechAlert: true,
    TTSText: (data) =>
      data.meltdownSpreads.map((name) => data.ShortName(name)).join(" and ") +
      " spread",
  },
  "P10S Daemoniac Bonds First": {
    SpeechAlert: true,
  },
  "P10S Dueodaemoniac Bonds First": {
    SpeechAlert: true,
  },
  "P10S TetraDaemoniac Bonds First": {
    SpeechAlert: true,
  },
  "P10S Daemoniac Bonds Followup": {
    SpeechAlert: true,
  },
  "P10S Pandaemoniac Ray": {
    SpeechAlert: true,
    TTSText: (_, matches) => (matches.id === "8289" ? "East" : "West"),
  },
  "P10S Jade Passage": {
    SpeechAlert: true,
  },
});
