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
  "Gust Leonard": "Gust",
  "Tali Lamora": "Talli",
  "Tannie Kleinvoetjies": "Seth",
  "Seth Rah": "Seth",
  "Shiroe Enchanter": "Shihro",
  "Roe Two": "Shihro",
  "Marielle Maru": "Mary",
  "Tymo Aimali": "Timo",
  "Ahmed Sins": "Ahmed",
  "Yuki Kimura": "Yuki",
  "Mr Snuggleton": "Snuggles",
  "Know Thyself": "Pete",
  "Krato Nightwhisper": "Kraato",
  "Seuny Hena": "Sunny",
  "Kali Sunfeather": "Kali",
};

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
