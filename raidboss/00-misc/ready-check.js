"use strict";

const generic_ready_check_sounds = [
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
    initiate: ["Jez-LittleBuddy0"],
    fail: ["Jez-LittleBuddy2"],
    success: ["Jez-LittleBuddy1"],
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
  {
    initiate: ["JoelHaverRPG - 10", "JoelHaverRPG - 11"],
    fail: ["JoelHaverRPG - 7", "JoelHaverRPG - 8", "JoelHaverRPG - 9"],
    success: ["JoelHaverRPG - 12"],
  },
];

const random_array_element = (arr) =>
  arr[Math.floor(Math.random() * arr.length)];

var generic_ready_check_chances = [];
for (let i = 0; i < generic_ready_check_sounds.length; i++) {
  generic_ready_check_chances = generic_ready_check_chances.concat(
    Array(
      Math.max(
        generic_ready_check_sounds[i].initiate.length,
        generic_ready_check_sounds[i].fail.length,
        generic_ready_check_sounds[i].success.length
      )
    ).fill(i)
  );
}

const generic_new_ready_check_set = () =>
  random_array_element(generic_ready_check_chances);
var generic_ready_check_set = generic_new_ready_check_set();

Options.Triggers.push({
  zoneRegex: /.*/,
  triggers: [
    {
      id: "Ready Check Initiate",
      type: "GameLog",
      netRegex: NetRegexes.gameLog({
        line: "(?:\\y{Name} has initiated|You have commenced) a ready check\\..*?",
        capture: false,
      }),
      suppressSeconds: 2,
      sound: () =>
        "../../user/wav/" +
        random_array_element(
          generic_ready_check_sounds[generic_ready_check_set].initiate
        ) +
        ".wav",
    },
    {
      id: "Ready Check Success",
      type: "GameLog",
      netRegex: NetRegexes.gameLog({
        line: "Ready check complete\\. Ready: \\d{1,2}\\/\\d{1,2} Not Ready: 0.*?",
        capture: false,
      }),
      sound: () =>
        "../../user/wav/" +
        random_array_element(
          generic_ready_check_sounds[generic_ready_check_set].success
        ) +
        ".wav",
      run: () => (generic_ready_check_set = generic_new_ready_check_set()),
    },
    {
      id: "Ready Check Fail",
      type: "GameLog",
      netRegex: NetRegexes.gameLog({
        line: "Ready check complete\\. Ready: \\d{1,2}\\/\\d{1,2} Not Ready: [1-9].*?",
        capture: false,
      }),
      sound: () =>
        "../../user/wav/" +
        random_array_element(
          generic_ready_check_sounds[generic_ready_check_set].fail
        ) +
        ".wav",
      run: () => (generic_ready_check_set = generic_new_ready_check_set()),
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
