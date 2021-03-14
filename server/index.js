import express from 'express';
const app = express();
const PORT = 8080;
import path from 'path';

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));



app.listen(PORT , () => {
  console.log(`listening on port: ${PORT}`);
})