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

var ready_check_chances = [];
for (let i = 0; i < ready_check_sounds.length; i++) {
  ready_check_chances.push(
    Array(
      Math.max(
        ready_check_sounds[i].fail.length,
        ready_check_sounds[i].success.length
      )
    ).fill(i)
  );
}

const random_array_element = (array) =>
  array[Math.floor(Math.random() * array.length)];
const new_ready_check_set = () => random_array_element(ready_check_chances);
var ready_check_set = new_ready_check_set();

Options.Triggers.push({
  zoneRegex: /.*/,
  triggers: [
    {
      id: "Ready Check Initiate",
      regex:
        /^.{15}ChatLog 00:0.{2}9:+[A-z' -]{3,21} ha(?:s|ve) (?:commenc|initiat)ed a ready check\.$/,
      sound: () =>
        "../../user/wav/" +
        random_array_element(ready_check_sounds[ready_check_set].initiate) +
        ".wav",
    },
    {
      id: "Ready Check Success",
      regex:
        /^.{15}ChatLog 00:0039::?Ready check complete\. Ready: \d{1,2}\/\d{1,2} Not Ready: 0/,
      sound: () =>
        "../../user/wav/" +
        random_array_element(ready_check_sounds[ready_check_set].success) +
        ".wav",
      run: () => (ready_check_set = new_ready_check_set()),
    },
    {
      id: "Ready Check Fail",
      regex:
        /^.{15}ChatLog 00:0039::?Ready check complete\. Ready: \d{1,2}\/\d{1,2} Not Ready: [1-9]/,
      sound: () =>
        "../../user/wav/" +
        random_array_element(ready_check_sounds[ready_check_set].fail) +
        ".wav",
      run: () => (ready_check_set = new_ready_check_set()),
    },
    {
      id: "Charybdis",
      regex:
        /^.{15}[A-Za-z]* 14:[\dA-F]{2,5}:(?:[ -9;-~èéêîïôàæûç]{1,99}) starts using (?:Charybdis|Terror Unleashed)/,
      sound: "../../user/wav/FH-Healthbars-Short.wav",
    },
    {
      id: "Damage Down",
      regex:
        /^.{15}1A:10.{6}:(?<victim>[A-z' -]{3,21}) gains the effect of Damage Down/,
      condition: (_, matches, _) => data.party.inParty(matches.victim),
      sound: "../../user/wav/roblox-death-sound.wav",
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
  Charybdis: {
    SoundAlert: true,
  },
  "Damage Down": {
    SoundAlert: true,
  },
});
