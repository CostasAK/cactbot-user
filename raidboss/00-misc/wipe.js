"use strict";

const wipe_sounds = [
  [
    ["shooting-stars-drop.wav", 2],
    ["tumbling-down.wav", 8],
    ["This is the one thing we didn't want to happen.wav", 8],
    ["Funny Scottish man can't say purple burglar alarm.wav", 8],
    ["PDP-Floor Gang.wav", 4],
    ["Futurama Bender Game's over losers.wav", 8],
    ["Hey you, you're finally awake.wav", 8],
    ["Devin Townsend - Well Poop.wav", 8],
    ["StatlerWaldorf.wav", 4],
    ["friendship-is-the-endgame.wav", 1],
  ],
  [
    ["BBT-ReallyDie.wav", 1],
    ["DieAsYouLived.wav", 1],
    ["Futurama-TerriblePain.wav", 1],
    ["MadMax-Mediocre.wav", 1],
    ["Meme-CryAhHa.wav", 1],
    ["Meme-GuessTheyNeverMiss.wav", 1],
    ["MGS-SNAKE.wav", 1],
    ["OW-DVa-AreYouEvenTrying.wav", 1],
    ["PSG-OiWTF.wav", 1],
    ["WaterDrop.wav", 1],
    ["BBT-WrongRight.wav", 1],
  ],
  [
    ["GG-Yikes.wav", 1],
    ["tsunami-clipping.wav", 25],
    ["worms-stiffupperlip-success.wav", 1],
    ["ko-ohshit.wav", 1],
    ["FilthyFrank-Konichiwa.wav", 1],
    ["SoulEater-Excalibur_mmBakame.wav", 5],
    ["Troll2-Oh-My-God.wav", 5],
    ["embarrassing-pyon.wav", 5],
  ],
  [
    ["Awooh.wav", 5],
    ["Anime-heeeeee.wav", 5],
    ["nein mann.wav", 5],
    ["Mari_dead.wav", 1],
    ["Tannie Scream.wav", 15],
    ["you-are-a-cunt.wav", 5],
    ["emotional-titanic-flute.wav", 5],
    ["red-letter-media-loves-rogue-one.wav", 1],
  ],
  [
    ["bald-head-slap.wav", 1],
    ["shes-dead.wav", 5],
    ["o-kawaii-koto-kaguya-sama.wav", 5],
    ["mari_death_sound_2020_04_12.wav", 1],
    ["boys-on-wheels-at-least-im-not-gay_3s.wav", 1],
    ["fuck i hate people.wav", 15],
    ["GustDeathSound.wav", 5],
    ["Metal_Gear_Solid_5_Red_Band_Trailer_E3.wav", 10],
  ],
].map((x, i, a) => [x, Math.min(a.length - i, 4)]);
wipe_sounds[0][1] = wipe_sounds.slice(1).reduce((a, x) => a + x[1], 0) / 2;

Options.Triggers.push({
  zoneRegex: /.*/,
  triggers: [
    {
      id: "Wipe",
      netRegex: NetRegexes.network6d({
        command: ["40000010", "4000000F"],
        capture: false,
      }),
      sound: () =>
        "../../user/wav/" +
        Options.UserFunctions.random_array_element(
          Options.UserFunctions.random_array_element(wipe_sounds)
        ),
      options: {
        SoundAlert: true,
      },
    },
  ],
});
