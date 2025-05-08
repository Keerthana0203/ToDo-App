import React from "react";
import { Formik, Form } from "formik";
import { TextField, Button } from "@mui/material";
import * as Yup from "yup";

const TodoForm = ({ tasks, updateTasks }) => {
  const handleAddTask = (values, { resetForm }) => {
    const newTask = {
      id: Date.now(),
      title: values.title,
      description: values.description,
      completed: false,
    };
    const updatedTasks = [...tasks, newTask];
    updateTasks(updatedTasks);
    resetForm();
  };

  return (
    <div>
    <Formik
      initialValues={{ title: "", description: "" }}
      validationSchema={Yup.object({
        title: Yup.string().required("Required"),
        description: Yup.string(),
      })}
      onSubmit={handleAddTask}
    >
      {({ handleChange, handleBlur, values, errors, touched }) => (
        <Form>
          <TextField
            fullWidth
            margin="normal"
            label="Title"
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.title && Boolean(errors.title)}
            helperText={touched.title && errors.title}
          />
          <TextField
            fullWidth
            margin="normal"
            label="Description"
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.description && Boolean(errors.description)}
            helperText={touched.description && errors.description}
          />
          <div style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}>
  <Button
    type="submit"
    variant="contained"
    sx={{
      width: "200px",
      background: "linear-gradient(to right, rgb(218, 99, 137), rgb(167, 105, 188))",
      color: "#fff",
      boxShadow: "none",
      transition: "all 0.3s ease",
      "&:hover": {
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)", // shadow on hover
        background: "linear-gradient(to right, rgb(218, 99, 137), rgb(167, 105, 188))", // keep gradient
      },
    }}
  >
    Add Task
  </Button>
</div>
        </Form>
      )}
    </Formik>
    </div>
  );
};

export default TodoForm;
