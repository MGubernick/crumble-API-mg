# TOKEN=" " ID=" " sh curl-scripts/recipes/index.sh

curl "http://localhost:4741/recipes/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \

echo
