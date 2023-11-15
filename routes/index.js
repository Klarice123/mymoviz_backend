var express = require('express');
var router = express.Router();

//const apiKey = 'a3c079128d979f9f61b861842f02f346';
const apiKey = process.env.API_KEY;
/// Movies DTB infos ///
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer a3c079128d979f9f61b861842f02f346'
//   }};

router.get('/movies', (req,res) => {
    fetch(url)
  .then(response => response.json())
  .then(data => {
    res.json({movies: data.results})
  })
  .catch(err => console.error('error:' + err));
})

module.exports = router;
