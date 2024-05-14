const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const tripRouter = require('./controllers/tripController'); // Załóżmy, że masz kontroler dla wyjazdów
app.use('/trips', tripRouter); // Definicja ścieżki dla routerów wyjazdów


app.get('/', (req, res) => {
    res.render('index', { title: 'Home page' }); // Przykładowy render widoku
});


app.listen(PORT, () => {
    console.log(`The server is running on the port ${PORT}`);
});

const mongoose = require('mongoose');
const travelRoutes = require('./routes/travels');

mongoose.connect('mongodb://localhost/travelplanner', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use('/api/travels', travelRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
