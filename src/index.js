import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardChecklist, Trash } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import { Button, InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

function fetchTodos() {
  return [
    {
      id: 1,
      title: "Prepare Breakfast",
      completed: false,
    },
    {
      id: 2,
      title: "Cleaning",
      completed: true,
    },
    {
      id: 3,
      title: "Lundry",
      completed: false,
    },
    {
      id: 4,
      title: "Lunch",
      completed: true,
    },
    {
      id: 5,
      title: "Nap",
      completed: false,
    },
    {
      id: 6,
      title: "Study",
      completed: false,
    },
    {
      id: 7,
      title: "Parkrun",
      completed: false,
    },
    {
      id: 8,
      title: "Dinner",
      completed: false,
    },
    {
      id: 9,
      title: "sleeping",
      completed: false,
    },
  ];
}

function TodoItem(props) {
  return (
    <InputGroup key={props.id}>
      <InputGroup.Checkbox
        checked={props.completed}
        onChange={props.onToggle}
      />
      <FormControl
        value={props.title}
        style={{
          backgroundColor: "lightblue",
          textDecoration: props.completed ? "line-through 4px" : "none",
        }}
      />
      <Button variant="outline-danger" onClick={props.onDelete}>
        <Trash></Trash>
      </Button>
    </InputGroup>
  );
}

function App() {
  const [todos, setTodos] = useState(fetchTodos());

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <CardChecklist /> TodoList
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
            onDelete={() => {
              setTodos(todos.filter((x) => x.id !== todo.id));
            }}
            onToggle={() => {
              setTodos(
                todos.map((x) =>
                  x.id === todo.id ? { ...x, completed: !x.completed } : x
                )
              );
            }}
          />
        ))}
      </Container>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
