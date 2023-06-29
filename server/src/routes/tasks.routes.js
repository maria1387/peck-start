const {Router} = require('express');
// const pool = require('../db')
const { getAllTasks, getTask, createTask, deleteTask, updateTask } = require('../controllers/tasks.controllers')


const router = Router();
//obtener datos
router.get('/tasks', getAllTasks)
//obtener datou una persona
router.get('/tasks/:id', getTask)
//crear datos
router.post('/tasks', createTask)
//eliminar datos
router.delete('/tasks/:id', deleteTask)
// actualizar datos 
router.put('/tasks/:id', updateTask)
module.exports = router;