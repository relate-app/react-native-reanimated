#!/bin/bash
set -e
set -x

ROOT=$(pwd)

unset CI

versions=("0.66.0")
version_name=("66")

for index in {0..3}
do
  yarn add react-native@"${versions[$index]}"
  for for_hermes in "True" "False"
  do
    engine="jsc"
    if [ "$for_hermes" == "True" ]; then
      engine="hermes"
    fi
    echo "engine=${engine}"

    cd android
    gradle clean

    FOR_HERMES=${for_hermes} gradle :assembleDebug
    cd $ROOT

    rm -rf android-npm/react-native-reanimated-"${version_name[$index]}-${engine}".aar
    cp android/build/outputs/aar/*.aar android-npm/react-native-reanimated-"${version_name[$index]}-${engine}".aar
  done
done

rm -rf libSo
mkdir libSo
cd libSo
mkdir fbjni
cd fbjni
wget https://repo1.maven.org/maven2/com/facebook/fbjni/fbjni/0.2.2/fbjni-0.2.2.aar
unzip fbjni-0.2.2.aar
rm -r $(find . ! -name '.' ! -name 'jni' -maxdepth 1)
rm $(find . -name '*libc++_shared.so')
cd ../..

yarn add react-native@0.66.0 --dev

mv android android-temp
mv android-npm android

yarn run type:generate

npm pack

mv android android-npm
mv android-temp android

rm -rf ./lib
rm -rf ./libSo

echo "Done!"
