import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import "./AboutUs.css";
import { Text } from "@chakra-ui/react";
import { List, ListItem, ListIcon, OrderedList } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { Image } from "@chakra-ui/react";
import image from "./images/frontendicon.png";
import { Box } from "@chakra-ui/react";
function AboutUsComponent() {
  return (
    <>
      <div className="navcolor">
        <Breadcrumb className="navbar" Separator="/">
          <BreadcrumbItem>
            <BreadcrumbLink href="/home">
              <Text fontSize="xl">Back to home</Text>
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
        <Heading pl="580px" paddingTop="10px">
          About Us
        </Heading>
        <br></br>
        <Container>
          <Text noOfLines={3}>
            Esta app permite al usuario guardar y eliminar las tareas que
            necesite hacer.
          </Text>
        </Container>
        <br />
        <br />
        <Heading pl="510px">Tecnologias utilizadas:</Heading>
        <br></br>
        <Container>
          <OrderedList>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="blackalpha.500" />
              React
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="blackalpha.500" />
              Chakra UI
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="blackalpha.500" />
              HTML
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="blackalpha.500" />
              Lazy loading
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="blackalpha.500" />
              JavaScript
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="blackalpha.500" />
              CSS
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="blackalpha.500" />
              FireBase
            </ListItem>
          </OrderedList>
        </Container>
        <Image
          position="relative"
          left="580px"
          bottom="175px"
          src={image}
          alt="frontend"
          className="frontend"
        />
      </Box>
    </>
  );
}

export default AboutUsComponent;
