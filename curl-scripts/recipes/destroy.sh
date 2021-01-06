# TOKEN=" " ID=" " sh curl-scripts/recipes/destroy.sh

curl "http://localhost:4741/recipes/${ID}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \

echo
