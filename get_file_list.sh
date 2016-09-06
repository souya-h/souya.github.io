#!/bin/bash

files="./arts/img/lost_property_series/*"
counts=0
fileary=()
dirary=()
for filepath in $files; do
    fileary+=("$filepath")
done
echo [ > ./arts/file_list.json
for i in ${fileary[@]}; do
  echo '{ "id" : '$counts', "filepath" : "' ${i#*.} '"}' >> ./arts/file_list.json
let counts=$counts+1
done
echo ] >> ./arts/file_list.json
