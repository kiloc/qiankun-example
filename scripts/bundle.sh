#!/bin/bash

rm -rf ./dist

mkdir ./dist
mkdir ./dist/subapp

# sub-vue-2子应用
cp -r ./sub-vue-2/build/ ./dist/subapp/sub-vue-2/

# sub-vue-1子应用
cp -r ./sub-vue-1/dist/ ./dist/subapp/sub-vue-1/

# sub-html子应用
cp -r ./sub-html/dist/ ./dist/subapp/sub-html/

# main基座
cp -r ./main/dist/ ./dist/main/

# cd ./dist
# zip -r mp$(date +%Y%m%d%H%M%S).zip *
# cd ..
echo 'bundle.sh execute success.'
