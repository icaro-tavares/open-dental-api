# sync-data-handler
Writes information from the OpenDental database to the CRM database.

# How to use?

Clone repository:
```bash
git clone git@github.com:icaro-tavares/sync-data-handler.git
```

Configure the variables in the `.env` file
```bash
cp .env.example .env
```

``` txt
API_PORT=9325

DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
```

```bash
$ yarn
$ yarn build
$ yarn start:dev
```
or
```bash
pm2 start ecosystem.config.js --env dev
```
