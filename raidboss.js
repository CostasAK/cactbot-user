"use strict";

Options.TimelineEnabled = true;
Options.AlertsEnabled = true;
Options.TextAlertsEnabled = true;
Options.SoundAlertsEnabled = false;
Options.SpokenAlertsEnabled = false;
Options.InfoSoundVolume = 0;
Options.AlertSoundVolume = 0;
Options.AlarmSoundVolume = 0;
Options.LongSoundVolume = 1;
Options.PullSoundVolume = 1;
Options.ShowTimerBarsAtSeconds = 60;
Options.KeepExpiredTimerBarsForSeconds = 0.7;
Options.BarExpiresSoonSeconds = 8;
Options.MaxNumberOfTimerBars = 6;
Options.PlayerNicks = {
  "Tannie Kleinvoetjies": "Seth",
  "Roe Two": "Shiroe",
};
Options.TransformTts = (tts) =>
  tts
    .replace(/\bTali\b/gi, "Tealight")
    .replace(/\bShiroe\b/gi, "Shihro")
    .replace(/\bMarielle\b/gi, "Marry")
    .replace(/\bTymo\b/gi, "Timmy")
    .replace(/\bKrato\b/gi, "Kraato")
    .replace(/\bSeuny\b/gi, "Sunny")
    .replace(/\bKali\b/gi, "Kalium")
    .replace(/\b => \b/gi, " then ")
    .replace(/\b \+ \b/gi, " and ")
    .replace(/\bNW\b/gi, "1")
    .replace(/\bNE\b/gi, "2")
    .replace(/\bSE\b/gi, "3")
    .replace(/\bSW\b/gi, "4");
// .replace(/\bN(?:orth)?\s?.\s?S(?:outh)?\b/gi, "Snorth")
// .replace(/\bS(?:outh)?\s?.\s?N(?:orth)?\b/gi, "Snorth")
// .replace(/\bW(?:est)?\s?.\s?E(?:ast)?\b/gi, "Weast")
// .replace(/\bE(?:ast)?\s?.\s?W(?:est)?\b/gi, "Weast");
// .replace(/\b\/\b/gi, "slash");

Options.Triggers.map((element) => {
  if (element["triggers"] !== undefined) {
    element["triggers"].map((trigger) => {
      if (trigger["options"] !== undefined) {
        Object.assign(Options.PerTriggerOptions, {
          [trigger["id"]]: trigger["options"],
        });
      }
    });
  }
  if (element["timelineTriggers"] !== undefined) {
    element["timelineTriggers"].map((trigger) => {
      if (trigger["options"] !== undefined) {
        Object.assign(Options.PerTriggerOptions, {
          [trigger["id"]]: trigger["options"],
        });
      }
    });
  }
});
