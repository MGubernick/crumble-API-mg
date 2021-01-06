# TOKEN=" " NAME=" " AUTHOR=' ' TYPE='' INGREDIENTS={} DIRECTIONS='' sh curl-scripts/recipes/create.sh

curl 'http://localhost:4741/recipes' \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "recipe": {
      "name": "'"${NAME}"'",
      "author": "'"${AUTHOR}"'",
      "cookieType": "'"${TYPE}"'",
      "ingredients": "'"${INGR}"'",
      "directions": "'"${DIR}"'"
    }
  }'

echo
