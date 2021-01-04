## DOCKER

### RUN all services

```
docker-compose up
```
### RUN per service

App: 
```
docker-compose up app 
```

Postgres: 
```
docker-compose up db_teemo
```

 You can use -d option to run the services in background

 ### RUN  the migrations

 > You have to run the postgres first 
 ```
docker-compose db_teemo
```

 > And run the command inside your app
  ```
docker-compose run app npm run migrate:up
```

### DOWN all services

```
docker-compose down
```
### DOWN per service

App: 
```
docker-compose down app 
```

Postgres: 
```
docker-compose down db_teemo
```




