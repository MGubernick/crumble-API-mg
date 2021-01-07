#!/bin/bash
# EMAIL=" " PASSWORD=" " sh curl-scripts/auth/sign-in.sh

# local host: http://localhost:4741
# Heroku host: https://fathomless-brook-30890.herokuapp.com

API="http://localhost:4741"
URL_PATH="/sign-in"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
