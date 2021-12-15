'use strict'

Options.TimelineEnabled = true // eslint-disable-line no-undef
Options.AlertsEnabled = true // eslint-disable-line no-undef
Options.TextAlertsEnabled = true // eslint-disable-line no-undef
Options.SoundAlertsEnabled = false // eslint-disable-line no-undef
Options.SpokenAlertsEnabled = false // eslint-disable-line no-undef
Options.GroupSpokenAlertsEnabled = true // eslint-disable-line no-undef
Options.InfoSoundVolume = 0 // eslint-disable-line no-undef
Options.AlertSoundVolume = 0 // eslint-disable-line no-undef
Options.AlarmSoundVolume = 0 // eslint-disable-line no-undef
Options.LongSoundVolume = 0 // eslint-disable-line no-undef
Options.PullSoundVolume = 0 // eslint-disable-line no-undef
Options.ShowTimerBarsAtSeconds = 60 // eslint-disable-line no-undef
Options.KeepExpiredTimerBarsForSeconds = 0.7 // eslint-disable-line no-undef
Options.BarExpiresSoonSeconds = 8 // eslint-disable-line no-undef
Options.MaxNumberOfTimerBars = 6 // eslint-disable-line no-undef
Options.PlayerNicks = { // eslint-disable-line no-undef
  'Gust Leonard': 'Gust',
  'YOU': 'Gust', // eslint-disable-line quote-props
  'Tali Lamora': 'Talli',
  'Tannie Kleinvoetjies': 'Tahnie',
  'Shiroe Enchanter': 'Shihro',
  'Roe Two': 'Shihro',
  'Marielle Maru': 'Marry',
  'Tymo Aimali': 'Timo',
  'Ahmed Sins': 'Ahmed',
  'Yuki Kimura': 'Yuki',
  'Mr Snuggleton': 'Snuggles',
  'Know Thyself': 'Pete',
  'Krato Nightwhisper': 'Kraato',
  'Seuny Hena': 'Sunny'
}

// Import custom fight files.
const myTriggerFiles = [
  // General
  '00-misc/test',
  '00-misc/raid',
  // Alliance Raids
  '04-sb/orbonne-monastary',
  // Trials
  '04-sb/shinryu-ex',
  '04-sb/seiryu-ex',
  '05-shb/titania-ex',
  '05-shb/innocence-ex',
  '05-shb/ruby-ex',
  '05-shb/varis-ex',
  // Savages
  '04-sb/o8s',
  '04-sb/o9s',
  '04-sb/o10s',
  '04-sb/o11s',
  '04-sb/o12s1',
  '04-sb/o12s2',
  '05-shb/e1s',
  '05-shb/e2s',
  '05-shb/e3s',
  '05-shb/e4s',
  '05-shb/e5s',
  '05-shb/e6s',
  '05-shb/e7s',
  '05-shb/e8s',
  // Ultimates
  '05-shb/tea'
]

myTriggerFiles.forEach((file) => {
  UserConfig.appendJSLink('../../user/raidboss-files/' + file + '.js') // eslint-disable-line no-undef
})
