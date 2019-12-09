#!/usr/bin/env bash

CI_MYSQL_HOST_UPDATED=$(ping -c 1 mysql | gawk -F'[()]' '/PING/{print $2}')
export CI_MYSQL_HOST_UPDATED && echo "CI_MYSQL_HOST_UPDATED exported";
echo "CI_MYSQL_HOST_UPDATED = " $CI_MYSQL_HOST_UPDATED
CI_MONGO_HOST_UPDATED=$(ping -c 1 mongo | gawk -F'[()]' '/PING/{print $2}')
export CI_MONGO_HOST_UPDATED && echo "CI_MONGO_HOST_UPDATED exported";
echo "CI_MONGO_HOST_UPDATED = " $CI_MONGO_HOST_UPDATED
chmod 777 /var/www/html/application/logs &> /dev/null || echo "Could not give permissions to application/logs folder";
chmod 777 /var/www/html/application/cache &> /dev/null || echo "Could not give permissions to application/cache folder";
chmod 777 /var/www/html/public/assets/cache &> /dev/null || echo "Coudl not give permissions to assets/cache folder";