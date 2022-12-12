#!/bin/sh
export JSON_STRING='window.configs = { \
  "VUE_APP_ROOT_API":"'${VUE_APP_ROOT_API}'", \
  "VUE_APP_KEYCLOAK_ISSUER":"'${VUE_APP_KEYCLOAK_ISSUER}'", \
  "VUE_APP_KEYCLOAK_CLIENT_ID":"'${VUE_APP_KEYCLOAK_CLIENT_ID}'", \
  "VUE_APP_KEYCLOAK_REALM":"'${VUE_APP_KEYCLOAK_REALM}'", \
  "VUE_APP_SENTRY_DSN_ENDPOINT":"'${VUE_APP_SENTRY_DSN_ENDPOINT}'", \
  "VUE_APP_HELPHERO":"'${VUE_APP_HELPHERO}'", \
  "VUE_APP_STRIPE_API":"'${VUE_APP_STRIPE_API}'", \
  "VUE_APP_URL_ACADEMY":"'${VUE_APP_URL_ACADEMY}'", \
  "URL_FLOWS":"'${URL_FLOWS}'", \
  "VUE_APP_BOT_URL":"'${VUE_APP_BOT_URL}'", \
  "VUE_APP_2FA_APP_ANDROID":"'${VUE_APP_2FA_APP_ANDROID}'", \
  "VUE_APP_2FA_APP_IOS":"'${VUE_APP_2FA_APP_IOS}'", \
  "LOGROCKET_ID":"'${LOGROCKET_ID}'", \
  "LOGROCKET_CHILD_DOMAINS":"'${LOGROCKET_CHILD_DOMAINS}'", \
  "MODULE_CHATS":"'${MODULE_CHATS}'", \
  "FLOWS_GENERIC_TOKEN":"'${FLOWS_GENERIC_TOKEN}'", \
}'
sed -i "s|\/\/CONFIGURATIONS_PLACEHOLDER|${JSON_STRING}|" /usr/share/nginx/html/connect/index.html

exec "$@"
