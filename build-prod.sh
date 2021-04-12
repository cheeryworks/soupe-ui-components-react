#!/bin/bash

npm run build
rm -rf docs
cp -r build docs
git add docs
