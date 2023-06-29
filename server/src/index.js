const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const {PORT} = require('../src/config')

const taskRouter = require('./routes/tasks.routes')
const app = express();
const pool = require('../src/db')
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(taskRouter)

app.use((err, req, res, next) => {
	return res.json({
		message:err.message
	})
})


app.listen(PORT)
console.log(`The app is running at http://localhost:${PORT}`)