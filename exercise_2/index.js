const PORT = 3001
const express = require("express")
const app = express()

const es6Renderer = require("express-es6-template-engine")
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');
app.use(express.static(__dirname + "/styles"))

const places = [
{cityName: "Charleston", continent: "North America"}, 
{cityName: "Paris", continent: "Europe"},
{cityName: "Boston", continent: "North America"},
{cityName: "Sao Jose", continent: "South America"},
{cityName: "Awash", continent: "Africa"},
{cityName: "Opelousas", continent: "North America"}, 
{cityName: "Tours", continent: "Europe"},
{cityName: "Baton Rouge", continent: "North America"},
{cityName: "Santa Rosa", continent: "South America"},
{cityName: "Beijing", continent: "Asia"},
]


const me = {name: "Zak", city: "Charleston", state: "SC"}


const movies = [
{movieName: "The Shining", poster: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/05/21/09/the-shining-2.jpg?width=1200"},
{movieName: "The Lion King", poster: "https://m.media-amazon.com/images/I/61sJaBqGxZL._AC_SL1184_.jpg"},
{movieName: "Spiderman", poster: "https://m.media-amazon.com/images/I/61XqUvAyE1L._AC_SY606_.jpg"},
{movieName: "The Punisher", poster: "https://m.media-amazon.com/images/I/517rlsmZqfL._AC_.jpg"},
{movieName: "Happy Gilmore", poster: "https://m.media-amazon.com/images/I/51z0M0q0+ML._AC_SY450_.jpg"}
]
// Write your routes between the ***

// ***

app.get("/message", (req, res) => {
    res.send("Node and Express are just lovely")
})


app.get("/cities", (req, res) => {
    res.render('home', {
        locals: {
            places
        }
    })
})

app.get("/status", (req, res) => {
    res.status(400)
    res.send("status 400")
})


app.get('/me', (req, res) => {
    res.send(me)
})


app.get('/movies', (req, res) => {
    res.render('index', {
        locals: {
            movies
        }
    })
})


// ***

app.listen(PORT, console.log(`Listening on port ${PORT}`))