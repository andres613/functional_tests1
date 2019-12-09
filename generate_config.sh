#!/bin/sh
rm functional_tests/cypress.json
echo "
{
\"baseUrl\": \"http://$1/public/index.php\",
\"userAgent\": \"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.80 Safari/537.36\"
}
" >> functional_tests/cypress.json
