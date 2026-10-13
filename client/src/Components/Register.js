import{userSchemaValidation} from "../Validations/UserValidation";
import { Container, FormGroup,Label,Input,Button,Row,Col,Form } from "reactstrap";
import{useForm} from "react-hook-form";
import{yupResolver} from "@hookform/resolvers/yup";
import {useSelector,useDispatch} from "react-redux";
import { useState } from "react";
import{Link} from "react-router-dom";
import { addUser ,deleteUser} from "../Features/UserSlice";
import UpdateUser from "./UpdateUser";

const Register = () => {

const[name,setname] = useState("");
const[email,setemail] = useState("");
const[password,setepassword] = useState("");
const[confirmPassword,setconfirmPassword] = useState("");

const dispatch = useDispatch();

const {register,
  handleSubmit,
  formState:{errors},

}=useForm({
  resolver:yupResolver(userSchemaValidation) 
});

const onSubmitFunc = (data)=>{
  try{
    const userData={
      name:data.name,
      email:data.email,
      password:data.password,
    }
    dispatch(addUser(userData));
  console.log('Form Data',data);
  alert('Vlaidation all good!')
  }
  catch(error){
    console.log("Error.")
  }
}

const handledelete = (email=>
    {
    dispatch(deleteUser(email));
    }
);



const userList = useSelector((state)=>state.users.value)
  return (
    <Container fluid>
      <Row className="formrow">
        <Col className="columndiv1">
        <Form className="div-form" onSubmit={handleSubmit(onSubmitFunc)}>
          <section className="form">
      <FormGroup className="form-group" >
        <Label>
          Name
        </Label>
    <input
      id="name"
      placeholder="Enter your name..."
      type="text"
      {...register("name",{onChange:(e)=>setname(e.target.value)})}
    />
    <p className="error">{errors.name?.message}</p>
  </FormGroup>
  <FormGroup>
    <Label>
          Email
        </Label>
    <input
      id="email"
       placeholder="Enter your email..."
      type="email"
      {...register("email",{onChange:(e)=>setemail(e.target.value)})}
    />
    <p className="error">{errors.email?.message}</p>
   </FormGroup>
  <FormGroup>
    <Label>
          Password
        </Label>
    <input
      id="password"
      placeholder="Enter your password..."
      type="password"
      {...register("password",{onChange:(e)=>setepassword(e.target.value)})}
    />
    <p className="error">{errors.password?.message}</p>
   </FormGroup>
  <FormGroup>
    <input
      id="confirmPassword"
      placeholder="Confirm your password..."
      type="password"
      {...register("confirmPassword",{onChange:(e)=>setconfirmPassword(e.target.value)})}
    />
    <p className="error">{errors.confirmPassword?.message}</p>
  </FormGroup>
  <Button className="button" color='primary'>
    Register
  </Button><br></br>

    </section>
    </Form>
    </Col>
    </Row>
    <Row>
      <Col md={6}>
      <table border={1}>
        <tbody>
          {userList.map((user)=>
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>{user.confirmPassword}</td>
            <td><Button className="button" color='danger' onClick={()=>handledelete(user.email)}>Delete</Button></td>
            <td>
              <Link to={`/update/${user.email}/${user.name}/${user.password}`}
              element={<UpdateUser/>}>
              <Button className="button" color='primary'>Update</Button>
              </Link>
              </td>
          </tr>
          )}
          
        </tbody>
        </table>
      </Col>
    </Row>
    </Container>
  );
};

export default Register;
