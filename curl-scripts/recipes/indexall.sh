# TOKEN=" " sh curl-scripts/recipes/index.sh

curl 'http://localhost:4741/recipes/all' \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \

echo
