'use strict'

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
    .replace(/\bTali\b/gi, "Talli")
    .replace(/\bShiroe\b/gi, "Shihro")
    .replace(/\bMari\b/gi, "Mary")
    .replace(/\Tymo\b/gi, "Timo")
    .replace(/\Krato\b/gi, "Kraato")
    .replace(/\Seuny\b/gi, "Sunny");

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
});
