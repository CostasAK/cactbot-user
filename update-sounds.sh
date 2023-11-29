#!/bin/bash

printf "NORMALISE WAV\n\n"
cd normalise-wav/
pipenv run python normalise_sounds.py
cd ../