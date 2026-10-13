import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row, Column, Form } from "reactstrap";
import UpdateUser from "./Components/UpdateUser";
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Register from "./Components/Register";
import Register2 from "./Components/Register2";
const App = () => {
  return (
    <>
    <Container>
      <Router>
      <Row>
          <Header/>
      </Row>
      
      <Row className="main">
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/register2' element={<Register2/>}></Route>
            <Route path='/update/:user_email/:user_name/:user_password' element={<UpdateUser/>}></Route>
          </Routes>
      </Row>
      
      <Row>
          <Footer/>
      </Row>
      </Router>
    </Container>
      
    </>
  );
};

export default App;
