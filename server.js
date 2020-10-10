const express = require('express');
const path = require('path');
// const cors = require('cors');
// const mongoose = require('mongoose');
const app = express();

// app.use(cors());
app.use(express.json());
// app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
// ...if using React to render page
// if (process.env.NODE_ENV === 'production') {
  //   app.use(express.static(path.join(__dirname, 'client', 'build')));
  //   app.get('*', (req, res) => {
    //     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    //   });
// } else {
  //   app.use(express.static(path.join(__dirname, 'client', 'public')));
  // }

// Routes
app.use('/', require('./routes/index'));



// const url = 'mongodb+srv://...';
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
  //   console.log('Mongodb connected');

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`Development server: http://localhost:${port}`)
);

// });
