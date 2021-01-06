# TOKEN=" " ID='' NAME=" " AUTHOR=' ' TYPE='' INGREDIENTS={} DIRECTIONS='' sh curl-scripts/recipes/update.sh

curl "http://localhost:4741/recipes/${ID}" \
  --include \
  --request PATCH \
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
