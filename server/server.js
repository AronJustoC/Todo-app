const PORT = process.env.PORT ?? 8000;
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const app = express();
const pool = require('./db');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


app.use(cors({
  origin: "http://localhost:5173", // O la URL de tu frontend en producción
  credentials: true
}));
app.use(express.json())

//get all todos
app.get('/todos/:userEmail', async (req, res) => {
  //console.log(req);
  const { userEmail } = req.params;
  try {
    const todos = await pool.query('SELECT * FROM todos WHERE user_email = $1', [userEmail]);
    res.json(todos.rows);//rows es un arreglo que contiene los registros de la tabla
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

//Create a new todo
app.post('/todos', async (req, res) => {
  const { user_email, title, progress, date } = req.body;
  console.log(user_email, title, progress, date);
  const id = uuidv4();
  try {
    const newTodo = await pool.query(`INSERT INTO todos(id, user_email, title, progress, date) VALUES($1, $2, $3, $4, $5)`, [id, user_email, title, progress, date]);
    res.json(newTodo);
  } catch (error) {
    console.error(error);
  }
});

//Edit a new todo
app.put('/todos/:id', async (req, res) => {
  const { id } = req.params;
  const { user_email, title, progress, date } = req.body;

  console.log('Request body:', req.body);

  try {
    const editToDo = await pool.query('UPDATE todos SET user_email = $1, title = $2, progress = $3, date = $4 WHERE id = $5;', [user_email, title, progress, date, id]);
    res.json(editToDo);
  } catch (error) {
    console.error(error)
  }
})

//Delete todo
app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deleteToDo = await pool.query('DELETE FROM todos WHERE id = $1;', [id]);
    res.json(deleteToDo.rows[0]);
  } catch (error) {
    console.error(error);
  }
})

//Signup => Registrase
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  try {
    await pool.query(`INSERT INTO users (email, hashed_password) VALUES($1, $2);`, [email, hashedPassword]);

    const token = jwt.sign({ email }, 'secret', { expiresIn: '1hr' });
    res.json({ email, token });

  } catch (error) {
    console.error(error);
    if (error) {
      res.json({ detail: error.detail })
    }
  }
})

//Login => Logearse
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Busca al usuario en la base de datos
    const users = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

    if (!users.rows.length) return res.status(401).json({ detail: 'User not found' });


    // Verifica la contraseña
    const success = await bcrypt.compare(password, users.rows[0].hashed_password);

    // Genera un token JWT
    const token = jwt.sign({ email }, 'secret', { expiresIn: '1hr' });

    if (success) {
      res.json({ 'email': users.rows[0].email, token })
    } else {
      res.json({ detail: "Login failed" })
    }

  } catch (error) {
    console.error(error);
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
