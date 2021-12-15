#!/bin/bash

printf "Updating Levels...\n\n"

wavPath="..\\wav"
triggernometryConfigFile="Triggernometry.config.xml"
triggernometryConfigFilePath="${triggernometryConfigPath}\\${triggernometryConfigFile}"

python normalise_sounds.py

git add "${wavPath}\\."
git commit -uno
