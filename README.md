# url-minifie

## Installation
Pour installer les dépendances:
``npm install``

## Init
* `npm run test`: run les tests de l'API
* `npm run test-front`: run ng test
* `npm run prod`: run node app.js
* `npm run dev`: run nodemon app.js
* `npm run dev-front`: run ng serve

## Routes
Verbe | Url | Data
---  | --- | ---
post | /users | {mail: string, password: string, confirmPassword: string}
post | /users/connect | {mail: string, password: string}
post | /urls | {url: string, urlMinifie: string}
delete | /urls/:id | { }
get | /urls | [{url: string, urlMinifie: string}]

