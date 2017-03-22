# url-minifie

##Routes

Verbe | Url | Data
---  | --- | ---
post | /users | {mail: string, password: string, confirmPassword: string}
post | /users/connect | {mail: string, password: string}
post | /urls | {url: string, urlMinifie: string}
delete | /urls/:id | { }
get | /urls | [url: string, urlMinifie: string]
