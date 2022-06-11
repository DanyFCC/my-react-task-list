import { Box } from "@chakra-ui/react";
import "./Menu.css";
import { Heading } from "@chakra-ui/react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { List, UnorderedList, ListItem } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import magnifyingglass from "./images/magnifyingglass.png";
function MenuComponent() {
  return (
    <>
      <div className="navcolor">
        <Breadcrumb className="navbar" Separator="/">
          <BreadcrumbItem>
            <BreadcrumbLink href="/home">
              <Text fontSize="xl">Back to Home</Text>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/aboutus">
              <Text fontSize="xl">To about us</Text>
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
        <br></br>
        <Heading position="relative" left="630px">
          Menu
        </Heading>
        <br></br>
        <Container>
          Bienvenido, aqui te explico cada una de las secciones que tiene esta
          app:
          <br />
          <br />
          <br />
          <Image
            bg="white"
            boxSize="200px"
            position="relative"
            left="150px"
            src={magnifyingglass}
          ></Image>
          <br></br>
          <UnorderedList>
            <ListItem>Home: De regreso a la pagina principal. </ListItem>
            <ListItem>
              About us: Que es esta app y los lenguajes que se utilizo para
              crearlo.
            </ListItem>
            <ListItem>
              To do List: Te llevara a la lista de tareas, donde podras agregar,
              tus tareas.
            </ListItem>
            <br />
            <br />
            <br />
            <br />
          </UnorderedList>
        </Container>
      </Box>
    </>
  );
}

export default MenuComponent;
