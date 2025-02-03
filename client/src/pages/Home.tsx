import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Hero } from "../components";

const Home = () => {
  const navigate = useNavigate();
  const { loginWithRedirect, isAuthenticated } = useAuth0();

   return (
     <Container customStyles="h-[90%] rounded-3xl relative overflow-hidden">
      <Hero>
        {isAuthenticated ? (
          <Button
            content="Board"
             onClick={() => navigate("/dashboard")}
          />
        ) : (
          <Button
            content="Log in"
            onClick={() => loginWithRedirect()}
          />
        )}
         </Hero>
     </Container>
  )
 }

export default Home
