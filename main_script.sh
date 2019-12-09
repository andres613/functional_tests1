#!/usr/bin/env bash

echo $CI_MYSQL_HOST
CI_WEB_HOST=$(ping -c 1 web | gawk -F'[()]' '/PING/{print $2}')
export CI_WEB_HOST && echo "CI_WEB_HOST exported";
echo $CI_WEB_HOST
mysql --host=mysql --user=root --password="${MYSQL_ROOT_PASSWORD}" ${MYSQL_DATABASE} < db/base.sql
mysql --host=mysql --user=root --password="${MYSQL_ROOT_PASSWORD}" ${MYSQL_DATABASE} < db/test_data.sql
echo "Select * from bf_users where username = 'test';" | mysql --user=root --password="${MYSQL_ROOT_PASSWORD}" --host=mysql "${MYSQL_DATABASE}"
functional_tests/generate_config.sh $CI_WEB_HOST
chmod 755 functional_tests/generate_config.sh && echo "Permission to generate_config.sh";
curl "http://$CI_WEB_HOST/public/index.php"
cd functional_tests && echo "Access to functional_tests";
yarn install
echo "Select * from bf_users where username = 'test';" | mysql --user=root --password="${MYSQL_ROOT_PASSWORD}" --host=mysql "${MYSQL_DATABASE}"