[GET] http://localhost:3000/ > Returns Hello world!


[GET] http://localhost:3000/users > Return all users (200)

[GET] http://localhost:3000/users/:id > Return user with id :id (200)

[POST] http://localhost:3000/users > Return the user created (201)

[DELETE] http://localhost:3000/users/:id > Return status user deleted (200)

[PUT] http://localhost:3000/users/:id > Return the user updated (200)



postgresql://postgres:IKddVDCUrwPckDnVlFyBclpLCsqqIJLG@postgres.railway.internal:5432/railway
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=IKddVDCUrwPckDnVlFyBclpLCsqqIJLG
DB_NAME=railway
DB_HOST=postgres.railway.internal

