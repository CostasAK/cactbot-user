"use strict";

const ready_check_sounds = [
  {
    initiate: ["RKelly - My Mind Is Telling Me No"],
    fail: ["RKelly - But My Body Is Telling Me Hell No"],
    success: ["RKelly - But My Body Is Telling Me Yes"],
  },
  {
    initiate: ["LOTR - Aragorn Ready1"],
    fail: ["LOTR - Aragorn Ready3"],
    success: ["LOTR - Aragorn Ready2"],
  },
  {
    initiate: ["JoelHaverRPG - 1", "JoelHaverRPG - 2"],
    fail: ["JoelHaverRPG - 7", "JoelHaverRPG - 8", "JoelHaverRPG - 9"],
    success: [
      "JoelHaverRPG - 3",
      "JoelHaverRPG - 4",
      "JoelHaverRPG - 5",
      "JoelHaverRPG - 6",
    ],
  },
  {
    initiate: ["D.Va_-_Group_up", "D.Va_-_Game_on", "D.Va_-_Suiting_up"],
    fail: ["D.Va_-_Almost_ready"],
    success: [
      "D.Va_-_All_systems_opped",
      "D.Va_-_Fully_operational",
      "D.Va_-_Gameface_on",
      "D.Va_-_Ready",
    ],
  },
];
ready_check_sounds.map(
  (sound_set) =>
    (sound_set.chance = Math.max(
      sound_set.fail.length,
      sound_set.success.length
    ))
);
var ready_check_set = Math.floor(Math.random() * ready_check_sounds.length);

Options.Triggers.push({
  zoneRegex: /.*/,
  triggers: [
    {
      id: "Ready Check Initiate",
      regex:
        /^.{15}ChatLog 00:0.{2}9:+[A-z' -]{3,21} ha(?:s|ve) (?:commenc|initiat)ed a ready check\.$/,
      sound: () =>
        "../../user/wav/" +
        ready_check_sounds[ready_check_set].initiate[
          Math.floor(
            Math.random() * ready_check_sounds[ready_check_set].initiate.length
          )
        ] +
        ".wav",
    },
    {
      id: "Ready Check Success",
      regex:
        /^.{15}ChatLog 00:0039::?Ready check complete\. Ready: \d{1,2}\/\d{1,2} Not Ready: 0/,
      sound: () =>
        "../../user/wav/" +
        ready_check_sounds[ready_check_set].success[
          Math.floor(
            Math.random() * ready_check_sounds[ready_check_set].success.length
          )
        ] +
        ".wav",
      run: () =>
        (ready_check_set = Math.floor(
          Math.random() * ready_check_sounds.length
        )),
    },
    {
      id: "Ready Check Fail",
      regex:
        /^.{15}ChatLog 00:0039::?Ready check complete\. Ready: \d{1,2}\/\d{1,2} Not Ready: [1-9]/,
      sound: () =>
        "../../user/wav/" +
        ready_check_sounds[ready_check_set].fail[
          Math.floor(
            Math.random() * ready_check_sounds[ready_check_set].fail.length
          )
        ] +
        ".wav",
      run: () =>
        (ready_check_set = Math.floor(
          Math.random() * ready_check_sounds.length
        )),
    },
  ],
});

Object.assign(Options.PerTriggerOptions, {
  "Ready Check Initiate": {
    SoundAlert: true,
  },
  "Ready Check Success": {
    SoundAlert: true,
  },
  "Ready Check Fail": {
    SoundAlert: true,
  },
});
