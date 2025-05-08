import React, { useEffect, useState } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const Dashboard = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 4,
        mb: 4,
        borderRadius: 2,
        boxShadow: 3,
        border: "1px solid #ccc",
        backgroundColor: "white",
        padding: 4,
        marginLeft: "400px",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        my={4}
      >
        <Typography variant="h4" sx={{ color: "black" }}>
          To-Do List
        </Typography>
        <Button
          variant="outlined"
          color="error"
          onClick={handleLogout}
          sx={{
            fontWeight: "bold",
            color: "error.main",
            borderColor: "error.main",
            "&:hover": {
              backgroundColor: "error.main",
              color: "#fff",
              borderColor: "error.main",
            },
          }}
        >
          Logout
        </Button>
      </Box>

      <TodoForm tasks={tasks} updateTasks={setTasks} />

      <Box my={4}>
        <Typography variant="h5" gutterBottom sx={{color:"#3d348b", textAlign: 'center'}}>
          Your Tasks
        </Typography>
        <TodoList tasks={tasks} updateTasks={setTasks} />
      </Box>
    </Container>
  );
};

export default Dashboard;
