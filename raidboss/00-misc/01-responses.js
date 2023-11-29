"use strict";

if (!Options.UserResponses) {
  Options.UserResponses = {};
}

Options.UserResponses.knockback = "../../user/wav/bofuri-knockback.wav";

Options.UserResponses.dont_move = "../../user/wav/Thundercat Nobody Move.wav";

Options.UserResponses.beam = "../../user/wav/Haruhi - Mikuru Beam.wav";

Options.UserResponses.wait = () =>
  "../../user/wav/wait-for-it" + Math.floor(Math.random() * 37) + ".wav";

Options.UserResponses.partybuster =
  "../../user/wav/southpark-are-you-gonna-rape-us.wav";

Options.UserResponses.in_then_out =
  "../../user/wav/frank-zappa-i-have-been-in-you.wav";

Options.UserResponses.out_then_in =
  "../../user/wav/captain-america-get-away-get-back.wav";

Options.UserResponses.out = "../../user/wav/captain-america-get-away.wav";

Options.UserResponses.left = "../../user/wav/Beyoncé - to the left.wav";

Options.UserResponses.right =
  "../../user/wav/Cha-Cha Slide - slide to the right.wav";

Options.UserResponses.help = () =>
  "../../user/wav/" +
  Options.UserFunctions.random_array_element([
    "wasabihelp.wav",
    "FHJames-Helpx3.wav",
  ]);
