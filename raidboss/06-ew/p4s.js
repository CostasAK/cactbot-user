"use strict";

Options.Triggers.push({
  zoneId: ZoneId.AsphodelosTheFourthCircleSavage,
  timeline: ['1240 "Announce Blue Go"'],
  timelineTriggers: [
    {
      id: "P4S Announce Blue Go",
      regex: /Announce Blue Go/i,
      tts: "Blue Go",
      options: {
        SpeechAlert: true,
      },
    },
  ],
  triggers: [
    {
      id: "P4S Fleeting Impulse All",
      type: "Ability",
      netRegex: NetRegexes.ability({ id: "6A1C", source: "Hesperos" }),
      preRun: (data, _matches) => {
        data.fleetingImpulseCounterAll =
          (data.fleetingImpulseCounterAll ?? 0) + 1;
      },
      tts: (data, matches) => {
        return (
          data.ShortName(matches.target) + " " + data.fleetingImpulseCounterAll
        );
      },
      options: {
        SpeechAlert: true,
      },
    },
    {
      id: "P4S Curtain Call Debuffs All",
      type: "GainsEffect",
      netRegex: NetRegexes.gainsEffect({ effectId: "AF4", capture: true }),
      condition: (data, matches) => {
        return data.act === "curtain";
      },
      delaySeconds: (data, matches) =>
        parseFloat(matches.duration) -
        (data.party.isDPS(matches.target) ? 12 : 7),
      tts: (data, matches) => {
        return data.ShortName(matches.target) + " Go";
      },
      options: {
        SpeechAlert: true,
      },
    },
  ],
});

Object.assign(Options.PerTriggerOptions, {
  "P4S Northerly Shift Slash": {
    AlertText: "Cleave A, I'm walking here",
    DurationSeconds: 8,
    SpeechAlert: true,
  },
  "P4S Easterly Shift Slash": {
    AlertText: "Cleave B, boob",
    DurationSeconds: 8,
    SpeechAlert: true,
  },
  "P4S Southerly Shift Slash": {
    AlertText: "Cleave C, how they massacred my boy",
    DurationSeconds: 8,
    SpeechAlert: true,
  },
  "P4S Westerly Shift Slash": {
    AlertText: "Cleave D, eez nuts",
    DurationSeconds: 8,
    SpeechAlert: true,
  },
  "P4S Northerly Shift Cape": {
    AlertText: "Cape A, I'm walking here",
    DurationSeconds: 8,
    SpeechAlert: true,
  },
  "P4S Easterly Shift Cape": {
    AlertText: "Cape B, boob",
    DurationSeconds: 8,
    SpeechAlert: true,
  },
  "P4S Southerly Shift Cape": {
    AlertText: "Cape C, how they massacred my boy",
    DurationSeconds: 8,
    SpeechAlert: true,
  },
  "P4S Westerly Shift Cape": {
    AlertText: "Cape D, eez nuts",
    DurationSeconds: 8,
    SpeechAlert: true,
  },
  "P4S Hemitheos's Water IV": {
    SoundOverride: "../../user/wav/bofuri-knockback.wav",
    SoundAlert: true,
  },
  "P4S Bloodrake Store": {
    SpeechAlert: true,
  },
  "P4S Belone Coils": {
    SpeechAlert: true,
  },
  "P4S Inversive Chlamys": {
    SpeechAlert: true,
  },
  "P4S Levinstrike Pinax": {
    SpeechAlert: true,
  },
  "P4S Well Pinax": {
    SpeechAlert: true,
    TTSText: "Water",
  },
  "P4S Well Pinax Knockback": {
    SoundOverride: "../../user/wav/bofuri-knockback.wav",
    SoundAlert: true,
  },
  "P4S Acid Pinax": {
    SpeechAlert: true,
  },
  "P4S Lava Pinax": {
    SpeechAlert: true,
  },
  "P4S Directional Shift Knockback": {
    SoundOverride: "../../user/wav/bofuri-knockback.wav",
    SoundAlert: true,
  },
  "P4S Belone Bursts": {
    SpeechAlert: true,
  },
  "P4S Periaktoi": {
    SpeechAlert: true,
    TTSText: (_, matches) => {
      const pinax = {
        "69F5": "Green",
        "69F6": "Red",
        "69F7": "Water",
        "69F8": "Thunder",
      };
      return pinax[matches.id] + " safe";
    },
  },
  "P4S Act One Safe Spots": {
    SpeechAlert: true,
  },
  "P4S Nearsight": {
    TTSText: "Party Out",
    SpeechAlert: true,
  },
  "P4S Farsight": {
    TTSText: "Party In",
    SpeechAlert: true,
  },
  "P4S Act Two Safe Spots": {
    SpeechAlert: true,
  },
  "P4S Wreath of Thorns 5": {
    SpeechAlert: true,
  },
  "P4S Hell's Sting": {
    SpeechAlert: true,
  },
});
