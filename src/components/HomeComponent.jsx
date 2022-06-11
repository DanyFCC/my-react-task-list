import { useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container, Heading } from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import "./Home.css";
import { Text } from "@chakra-ui/react";
import { useUser } from "../providers/UserProvider";
import image from "./images/todolist.jpg";
import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

function HomeComponent() {
  const { user } = useUser();
  return (
    <>
      <div className="navcolor">
        <Breadcrumb className="navbar" Separator="/">
          <BreadcrumbItem>
            <BreadcrumbLink href="/aboutus">
              <Text fontSize="xl">To about us</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/menu">
              <Text fontSize="xl"> To menu</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/tarea">
              <Text fontSize="xl"> To do List</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <Box bgColor="#9AE6B4">
        <Heading bgColor="#9AE6B4" position="relative" left="550px">
          Home page
        </Heading>
        <br></br>
        <Container bgColor="#9AE6B4">
          <Text>
            Hola {user.name} y bienvenido a tu To do list. De este pagina puedes
            navegar y aprender mas de como se creó esta aplicacion o puedes ir
            directo a tu lista de tarea.
          </Text>
          <Image src={image}></Image>
        </Container>
      </Box>
    </>
  );
}

export default HomeComponent;
