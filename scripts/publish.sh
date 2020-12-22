#!/bin/bash
set -exo pipefail

rm -rf ./bin-release/web/*

egret publish

rm -rf ./docs/*

cp -r ./bin-release/web/* ./docs/

cp -r ./js/* ./docs/js/