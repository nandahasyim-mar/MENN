module.exports = {
    apps: [
        {
            name: "MENN - Movies",
            script: "cd server/service/myMovies && npm i && nodemon app.js",
            env: {
                DB_URL="mongodb://localhost:27017",
                DB_NAME="MENN",
                PORT: 3001
            }
        }
    ]
}