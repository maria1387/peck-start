import {
 BrowserRouter, Routes, Route} from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import{Container, } from '@mui/material'
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Container>
    <Routes>
      <Route path="/" element={<TaskForm/>}/>
       <Route path="/tasks" element={<TaskList/>}/>
       <Route path="/tasks/:id/edit" element={<TaskForm/>}/>
     </Routes>
    </Container>
    </BrowserRouter>
  )
};

export default App;

