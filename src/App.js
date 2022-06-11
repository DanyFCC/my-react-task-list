import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import SignInComponent from "./components/SignInComponent";
import { ProfileImage } from "./components/ProfileImage";
import LoginComponent from "./components/LoginComponent";
const AboutUsComponent = lazy(() => import("./components/AboutUsComponent"));
const MenuComponent = lazy(() => import("./components/MenuComponent"));
const TareaComponent = lazy(() => import("./components/TareaComponent"));
const HomeComponent = lazy(() => import("./components/HomeComponent"));

function App() {
  return (
    <>
      <Suspense fallback={<h2>...Loading</h2>}>
        <Router>
          <Box h="100vh">
            <Breadcrumb bg="#b794f4">
              <BreadcrumbItem>
                <BreadcrumbLink className="title" href="/home"></BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <div className="boox">
              <Button size="sm">
                <SignInComponent />
              </Button>
              <ProfileImage />
            </div>

            <Routes>
              <Route path="/menu" element={<MenuComponent />} />
              <Route path="/home" element={<HomeComponent />} />
              <Route path="/aboutus" element={<AboutUsComponent />} />
              <Route path="/tarea" element={<TareaComponent />} />
            </Routes>
            <LoginComponent />
          </Box>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
