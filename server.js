const app = require('./app');
require('dotenv').config();
const toDoRouter = require('./routes/routes');
const port = process.env.PORT || 4000;

app.use('/', toDoRouter);

app.listen(port, () => {
  console.log(`listening to PORT ${port}`);
});
