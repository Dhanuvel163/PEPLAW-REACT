const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const config = require('./config');

const app = express();

mongoose.connect(config.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
}, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to the database');
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

const userRoutes = require('./routes/useraccount');
const lawyerRoutes = require('./routes/lawyeraccount');
// const mainRoutes = require('./routes/main');
// const sellerRoutes = require('./routes/seller');
// const productSearchRoutes = require('./routes/product-search');

// app.use('/api', mainRoutes);
app.use('/api/useraccounts', userRoutes);
app.use('/api/lawyeraccounts', lawyerRoutes)
// app.use('/api/seller', sellerRoutes);
// app.use('/api/search', productSearchRoutes);


app.listen(config.port, err => {
  console.log('Listening at port' + config.port);
});
