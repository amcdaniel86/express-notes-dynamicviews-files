const express = require('express');
const app = express();


//creates an absolute path pointing to folder called "views"
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');


app.get('/', (req, res, next) => {
// send views/index.hbs for displaying in the browser
  let data = {
      name: "Ironhacker",
      bootcamp: "IronHack WebDev",
      lastName: "butterscotch",
      address:  {
        street: "your heart",
        number: 87
      },
      cities: ["Miami", "Madrid", "Barcelona", "Paris", "Mexico City"]
  };

  res.render('index', data);
});



app.get('/about', (req, res, next) => {
  //send views/about.hbs to display in the browser.
  let dataTwo = {
      name: "who says",
      bootcamp: "guess"
  };
  
  
  
  res.render('about', dataTwo);
});



app.listen(3000, () => {
    console.log('listening');
});