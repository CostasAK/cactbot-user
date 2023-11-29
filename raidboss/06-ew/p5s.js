"use strict";

const directions = ["NW", "NE", "SE", "SW"];

const convertCoordinatesToDirection = (x, y) => {
  if (x > 100) return y < 100 ? "NE" : "SE";
  return y < 100 ? "NW" : "SW";
};

const convertCoordinatesToWaymark = (x, y) => {
  if (x > 100) return y < 100 ? "2" : "3";
  return y < 100 ? "1" : "4";
};

const convertDirectionToWaymark = (dir) => {
  return dir === "NW"
    ? "1"
    : dir === "NE"
    ? "2"
    : dir === "SE"
    ? "3"
    : dir === "SW"
    ? "4"
    : "";
};

Object.assign(Options.PerTriggerOptions, {
  "P5S Sonic Howl": {
    SoundAlert: true,
    SoundOverride: "../../user/wav/SonicWow.wav",
    VolumeOverride: 0.5,
  },
  "P5S Ruby Glow": {
    SoundAlert: true,
    SoundOverride: "../../user/wav/kaiser-chiefs-ruby-short.wav",
    VolumeOverride: 0.5,
  },
  "P5S Ruby 1 Topaz Stones": {
    SpeechAlert: true,
    TTSText: (data) => {
      const safeQuadrants = new Set(directions);
      for (const stone of data.ruby1TopazStones)
        safeQuadrants.delete(
          convertCoordinatesToDirection(
            parseFloat(stone.targetX),
            parseFloat(stone.targetY)
          )
        );

      const safe = Array.from(safeQuadrants);
      const [safe0, safe1] = safe;
      data.isRuby1Done = true;

      if (safe1 !== undefined)
        // too many safe quadrants
        return;
      else if (safe0 !== undefined)
        // one safe quadrant, we're done
        return convertDirectionToWaymark(safe0);

      // no safe quadrants - find the one with a stone closest to center (x100,y100)
      // magic stones will always have an x/y center offset of 7.5/1.0 or 1.0/7.5
      // poison stone closest to center will always have an x/y center offset of 4.0/4.0
      for (const stone of data.ruby1TopazStones) {
        const stoneX = parseFloat(stone.targetX);
        const stoneY = parseFloat(stone.targetY);
        if (Math.abs(stoneX - 100) < 5 && Math.abs(stoneY - 100) < 5)
          return convertCoordinatesToWaymark(stoneX, stoneY) + ", avoid poison";
      }
      return;
    },
  },
  "P5S Double Rush": {
    SoundOverride: "../../user/wav/bofuri-knockback.wav",
    SoundAlert: true,
    VolumeOverride: 1,
  },
  "P5S Ruby 3 Topaz Cluster": {
    DelaySeconds: 10,
    SpeechAlert: true,
    TTSText: (data) => {
      const remainingDirections = {};
      for (const [index, dirs] of Object.entries(data.topazRays)) {
        remainingDirections[index] = new Set(directions);
        for (const dir of dirs) remainingDirections[index]?.delete(dir);
      }

      // 770[34] cast 2 times, 770[56] cast 3 times
      const expectedLengths = [2, 2, 1, 1];
      const safeDirs = [];
      for (let i = 0; i < 4; i++) {
        if (remainingDirections[i]?.size !== expectedLengths[i]) return;

        const tmpDirs = [...(remainingDirections[i] ?? [])];
        if (!tmpDirs[0]) return;

        // If there's one safe location, print that
        let dirStr = tmpDirs[0];
        // If there's multiple, prefer south
        if (tmpDirs.length === 2 && tmpDirs[1])
          dirStr = ["SE", "SW"].includes(tmpDirs[0]) ? tmpDirs[0] : tmpDirs[1];
        safeDirs.push(convertDirectionToWaymark(dirStr));
      }

      if (safeDirs.length !== 4) return;
      return safeDirs.join(", ");
    },
  },
  "P5S Venom Squall/Surge": {
    SpeechAlert: true,
    TTSText: (_data, matches) => {
      // Venom Squall
      if (matches.id === "7716")
        return "Spread first, then bait and healer stacks";
      return "Healer stacks first, then bait and spread";
    },
  },
  "P5S Tail to Claw": {
    SoundAlert: true,
    SoundOverride:
      "../../user/wav/ffxiv-cruisechaser-forward-and-back_dB-3.wav",
    VolumeOverride: 1,
  },
  "P5S Claw to Tail": {
    SoundAlert: true,
    SoundOverride:
      "../../user/wav/ffxiv-cruisechaser-back-and-forward_dB-3.wav",
    VolumeOverride: 1,
  },
  "P5S Raging Tail Move": {
    SoundAlert: true,
    SoundOverride: "../../user/wav/DojaCatBack.wav",
    VolumeOverride: 1,
  },
  "P5S Raging Claw Move": {
    SpeechAlert: true,
  },
  "P5S Searing Ray": {
    SoundAlert: true,
    SoundOverride: "../../user/wav/WallaWalla.wav",
    VolumeOverride: 1,
  },
  "P5S Raging Claw": {
    SoundAlert: true,
    SoundOverride: "../../user/wav/DojaCatBack.wav",
    VolumeOverride: 1,
  },
});
