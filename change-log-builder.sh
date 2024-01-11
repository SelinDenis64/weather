#!/usr/bin/env bash
previous_tag=0
date=$(date '+%d-%m-%Y')
printf "## This version (${date}): \n\n"
git log HEAD...$(git describe --tags --abbrev=0) --pretty=format:'*  %s [%h](https://gitlab.transtelematica.ru//media_player_templates/other-project/integration_testing_template/-/commit/%H)' --reverse | grep -v Merge
printf "\n\n"