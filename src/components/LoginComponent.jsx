import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Box, Heading, Button, Grid } from "@chakra-ui/react";
import SignInComponent from "./SignInComponent";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";
import HomeComponent from "./HomeComponent";

function LoginComponent() {
  return (
    <>
      <Grid justifyContent="center">
        <Box
          boxShadow="xl"
          p="6"
          rounded="md"
          bg="white"
          w="1250px"
          border="black"
        >
          <Container>
            <Heading>Login</Heading>
            <br></br>
            <Button size="md" bg="teal">
              <SignInComponent />
            </Button>
            <br />
            <br />
            <br />
            <a href="/home">
              <Button size="md" bg="teal">
                To App
              </Button>
            </a>
          </Container>
        </Box>
      </Grid>
    </>
  );
}

export default LoginComponent;
