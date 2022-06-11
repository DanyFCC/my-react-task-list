import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Checkbox, WrapItem } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import "./Tarea.css";
import { Heading } from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import { Image, Text } from "@chakra-ui/react";
import { useUser } from "../providers/UserProvider";
import { Button } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

function TareaComponent() {
  const { user } = useUser();

  const [todos, SetTodos] = useState([]);
  const [todo, SetTodo] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    SetTodos([...todos].concat(newTodo));
    SetTodo("");
  }

  function deleteTodo(id) {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    SetTodos(updatedTodos);
  }
  function toggleComplete(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    SetTodos(updatedTodos);
  }

  return (
    <>
      <div className="navcolor">
        <Breadcrumb className="navbar" Separator="/">
          <BreadcrumbItem>
            <BreadcrumbLink href="/home">
              <Text fontSize="xl"> Back to Home</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/aboutus">
              <Text fontSize="xl"> To about us</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/menu">
              <Text fontSize="xl">To menu</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>

      <Suspense fallback={<h2>...Loading</h2>}>
        <Box p="10px" bgColor="#9AE6B4">
          <Container
            className="todolist"
            boxShadow="md"
            bg="#ECC94B"
            centerContent
            w="-moz-fit-content"
            p="6"
            rounded="md"
            display="flex"
            flexDirection={["column"]}
            minH="100vh"
          >
            <form className="form" onSubmit={handleSubmit}>
              <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Heading pl="35px" paddingTop="20px">
                  To Do List de {user.name}
                </Heading>
                <br />
                <br />

                <Avatar
                  className="avatar"
                  boxSize="150px"
                  src={user.profileImage}
                  alt="avatar"
                ></Avatar>
              </Flex>
              <br></br>
              <br></br>
              <Grid justifyContent="center">
                <Input
                  width="150px"
                  placeholder="Input text"
                  backgroundColor="white"
                  size="md"
                  className="txtbox" // how to link button onsubmit with rest of form
                  type="text"
                  onChange={(e) => SetTodo(e.target.value)}
                  value={todo}
                ></Input>

                <Button
                  size="sm"
                  borderRadius="md"
                  bg="#3182CE"
                  color="white"
                  type="submit"
                  className="addbutton"
                >
                  Add To Do
                </Button>

                <br />
                <br />

                {todos.map((todo) => (
                  <div key={todo.id}>
                    <div className="answers">{todo.text}</div>
                    <Button
                      size="md"
                      as="button"
                      borderRadius="md"
                      bg="#3182CE"
                      color="white"
                      display="inline-flex"
                      px={4}
                      h={8}
                      className="delete"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      Delete
                    </Button>

                    <Checkbox
                      isInvalid
                      className="checkbox"
                      type="checkbox"
                      onChange={() => toggleComplete(todo.id)}
                      checked={todo.completed}
                    ></Checkbox>
                  </div> //way to show stuff on screen// and delete
                ))}
              </Grid>
            </form>
          </Container>
        </Box>
      </Suspense>
    </>
  );
}

export default TareaComponent;
