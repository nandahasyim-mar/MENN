module.exports = {
    apps: [
        {
            name: "MENN - Movies",
            script: "./server/service/myMovies/app.js",
            env: {
                DB_URL:"mongodb://localhost:27017",
                DB_NAME:"MENN",
                PORT: 3001
            }
        },
        {
            name: "MENN - Series",
            script: "./server/service/myTVSeries/app.js",
            env: {
                DB_URL:"mongodb://localhost:27017",
                DB_NAME:"MENN",
                PORT: 3002
            }
        }
    ]
}