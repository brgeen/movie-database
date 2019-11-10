const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const pool = require('./modules/pool')

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/

app.get('/movies', (req, res) => {
    const queryText = 'SELECT * FROM movies ORDER BY "title" ASC';
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error in GET for movies', error);
            res.sendStatus(500);
        });
});

app.get('/details', (req, res) => {

    const queryText = `SELECT * FROM movies WHERE id=${req.query.id};`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error in GET for details', error);
            res.sendStatus(500);
        });
});

app.get('/genres', (req, res) => {

    const queryText = `SELECT "name" FROM "movies" 
    JOIN "movie_genres" ON movies.id = movie_genres.movie_id
    JOIN "genres" ON movie_genres.genre_id = genres.id
    WHERE movies.id=${req.query.id};`;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error in GET for genres', error);
            res.sendStatus(500);
        });
});

app.put('/edit', (req, res) => {

    const queryText = `UPDATE "movies"
    SET "title" = '${req.body.data.title}', "description" = '${req.body.data.description}'
    WHERE "id"=${req.body.data.id}`;

    pool.query(queryText)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error in EDIT movies', error);
            res.sendStatus(500);
        });
});


/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});