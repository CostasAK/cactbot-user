"use strict";

Options.Triggers.push({
  zoneId: ZoneId.AnabaseiosTheEleventhCircleSavage,
  triggers: [
    {
      id: "P11S Knockback",
      type: "StartsUsing",
      netRegex: { id: /8784|8785/, source: "Themis", capture: false },
      sound: "../../user/wav/bofuri-knockback.wav",
      soundVolume: 1,
      options: {
        SoundAlert: true,
      },
    },
    {
      id: "P11S Dismissal Overruling Light Then",
      type: "StartsUsing",
      netRegex: { id: /8784|8785/, source: "Themis", capture: false },
      delaySeconds: 1.1,
      tts: "then Healer Stacks + Out"
      options: {
        SpeechAlert: true,
      },
    },
    {
      id: "P11S Dismissal Overruling Dark Then",
      type: "StartsUsing",
      netRegex: { id: /8784|8785/, source: "Themis", capture: false },
      delaySeconds: 1.1,
      tts: "then In + Partners"
      options: {
        SpeechAlert: true,
      },
    },
  ],
});

Object.assign(Options.PerTriggerOptions, {
  "P11S Jury Overruling Light": {
    SpeechAlert: true,
  },
  "P11S Jury Overruling Light Followup": {
    SpeechAlert: true,
  },
  "P11S Jury Overruling Dark": {
    SpeechAlert: true,
  },
  "P11S Jury Overruling Dark Followup": {
    SpeechAlert: true,
  },
  "P11S Upheld Overruling Light": {
    SpeechAlert: true,
  },
  "P11S Upheld Overruling Light Followup": {
    SpeechAlert: true,
  },
  "P11S Upheld Overruling Dark": {
    SpeechAlert: true,
  },
  "P11S Upheld Overruling Dark Followup": {
    SpeechAlert: true,
  },
  "P11S Upheld Ruling Tether": {
    SpeechAlert: true,
  },
  "P11S Upheld Ruling Dark Followup": {
    SpeechAlert: true,
  },
  "P11S Dark Perimeter Followup": {
    SpeechAlert: true,
  },
  "P11S Divisive Overruling Light": {
    SpeechAlert: true,
  },
  "P11S Divisive Overruling Dark": {
    SpeechAlert: true,
  },
  "P11S Divisive Overruling Dark Followup": {
    SpeechAlert: true,
  },
  "P11S Divisive Overruling Light Shadowed Messengers": {
    SpeechAlert: true,
  },
  "P11S Divisive Overruling Dark Shadowed Messengers": {
    SpeechAlert: true,
  },
  "P11S Dismissal Overruling Light Followup": {
    SpeechAlert: true,
  },
  "P11S Dismissal Overruling Dark Followup": {
    SpeechAlert: true,
  },
  "P11S Arcane Revelation Light Portals": {
    SpeechAlert: true,
  },
  "P11S Arcane Revelation Dark Portals": {
    SpeechAlert: true,
  },
  "P11S Arcane Revelation Light Orbs": {
    SpeechAlert: true,
  },
  "P11S Arcane Revelation Dark Orbs": {
    SpeechAlert: true,
  },
  "P11S Twofold Revelation Light": {
    SpeechAlert: true,
  },
  "P11S Twofold Revelation Dark": {
    SpeechAlert: true,
  },
  "P11S Lightstream Collect": {
    SpeechAlert: true,
  }
});
