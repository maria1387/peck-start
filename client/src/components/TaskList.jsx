import { Button, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate()

  const loadTasks = async () => {
    const response = await fetch("http://localhost:8000/tasks");
    const data = await response.json();
    // console.log(data)
    setTasks(data);
  };

  //para elimimar 
   const  handleDelete =async (id)=>{
   try{
     //eliminar backend
  await fetch(`http://localhost:8000/tasks/${id}`,{
    method:"DELETE",
        });
    
    
        // console.log(response)
         //eliminar frondEnd
        setTasks(tasks.filter(task =>task.id !==id))
   }catch(error){
   console.log(error)
  }
   };
  useEffect(() => {
    loadTasks();
  }, []);
  return (
    <>
      {/* <h1> Task List</h1> */}
      {tasks?.map((task, i) => (
        <Card
          style={{
            marginBottom: ".8rem",
            backgroundColor: "#1e272e",
          }}
          key={i}
        >
          <CardContent
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div style={{color:'white'}}>
              <Typography>{task.title}</Typography>
              <Typography>{task.description}</Typography>
            </div>
            <div>
              <Button
                variant="contained"
                color="inherit"
                onClick={() => navigate(`/tasks/${task.id}/edit`)}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="warning"
                onClick={() => handleDelete(task.id) }
                style={{marginLeft:'.5rem'}}
              >
                delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default TaskList;
