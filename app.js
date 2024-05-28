const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const stolenCarsRouter = require('./routes/stolenCars');
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded());

const db = 'mongodb+srv://Admin:Admin@stolencars.lmgkudm.mongodb.net/?retryWrites=true&w=majority&appName=StolenCars';
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api/stolenCars', stolenCarsRouter);
app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}));

const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
