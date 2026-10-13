import { Container, FormGroup,Label,Input,Button } from "reactstrap";
import logo from "../Images/logo-t.png";
import{Link} from "react-router-dom";
const Login = () => {
  return (
    <Container>
      <img src={logo}></img>
      <FormGroup className="login-form input">
    <Label>
      Email
    </Label>
    <Input
      id=""
      name="email"
      type="email"
    />
  </FormGroup>
  <FormGroup>
    <Label>
      Password
    </Label>
    <Input
      id=""
      name="password"
      type="password"
    />
  
  <Button className="">
    Login
  </Button><br></br>
  <p className="smalltext">No account?<Link to='register'>
  Sign up here
  </Link></p>
  </FormGroup>
    </Container>

  );
};

export default Login;
