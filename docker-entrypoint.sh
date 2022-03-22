#!/bin/sh
JSON_STRING='window.configs = { \
  "VUE_APP_ROOT_API":"'${VUE_APP_ROOT_API}'", \
  "KEYCLOAK_ISSUER":"'${KEYCLOAK_ISSUER}'", \
  "KEYCLOAK_CLIENT_ID":"'${KEYCLOAK_CLIENT_ID}'", \
  "KEYCLOAK_REALM":"'${KEYCLOAK_REALM}'", \
  "VUE_APP_HOTJAR_PROJECT_KEY":"'${VUE_APP_HOTJAR_PROJECT_KEY}'", \
  "VUE_APP_SENTRY_DSN_ENDPOINT":"'${VUE_APP_SENTRY_DSN_ENDPOINT}'", \
  "VUE_APP_HELPHERO":"'${VUE_APP_HELPHERO}'", \
  "VUE_APP_STRIPE_API":"'${VUE_APP_STRIPE_API}'", \
  "LOGROCKET_ID":"'${LOGROCKET_ID}'", \
  "LOGROCKET_CHILD_DOMAINS":"'${LOGROCKET_CHILD_DOMAINS}'", \
}'
sed -i "s@// CONFIGURATIONS_PLACEHOLDER@${JSON_STRING}@" /usr/share/nginx/html/connect/index.html

exec "$@"
