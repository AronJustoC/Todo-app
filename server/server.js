const PORT = process.env.PORT ?? 8000;
const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db');


app.use(cors());
//get all todos
app.get('/todos/:userEmail', async (req, res) => {
  console.log(req);
  const userEmail = req.params.userEmail;
  try {
    const todos = await pool.query('SELECT * FROM todos WHERE user_email = $1', [userEmail]);
    res.json(todos.rows);//rows es un arreglo que contiene los registros de la tabla
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
