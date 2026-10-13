import{userSchemaValidation} from "../Validations/UserValidation";
import { Container, FormGroup,Label,Input,Button,Row,Col,Form } from "reactstrap";
import{useForm} from "react-hook-form";
import{yupResolver} from "@hookform/resolvers/yup";
import {useSelector,useDispatch} from "react-redux";
import { useState } from "react";
import { updateUser } from "../Features/UserSlice";
import { useParams,Link } from "react-router-dom";

const UpdateUser =()=>{
    const {user_email,user_name,user_password}=useParams();//from register page (variables)
    const[name,setname] = useState(user_name);
    const[email,setemail] = useState(user_email);
    const[password,setepassword] = useState(user_password);
    const[confirmPassword,setconfirmPassword] = useState(user_password);



    const {register,
        handleSubmit,
        formState:{errors},

        }=useForm({
        resolver:yupResolver(userSchemaValidation) 
        });

const dispatch = useDispatch();
const handleUpdate=(data)=>{
    const userData={
      name:data.name,
      email:data.email,
      password:data.password,
    }
    dispatch(updateUser(userData));
    alert('profile updated!')
}

    return (
    <Container fluid>
      <Row className="formrow">
        <Col className="columndiv1">
        <Form className="div-form" onSubmit={handleSubmit(handleUpdate)}>
          <section className="form">
      <FormGroup className="form-group" >
        <Label>
          Name
        </Label>
    <input
      id="name"
      type="text"
      value={name}
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
      value={email}readOnly
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
      value={password}
      type="password"
      {...register("password",{onChange:(e)=>setepassword(e.target.value)})}
    />
    <p className="error">{errors.password?.message}</p>
   </FormGroup>
  <FormGroup>
    <label>
      confirm Password
    </label>
    <input
      id="confirmPassword"
      value={password}
      type="password"
      {...register("confirmPassword",{onChange:(e)=>setconfirmPassword(e.target.value)})}
    />
    <p className="error">{errors.confirmPassword?.message}</p>
  </FormGroup>

  
  <Button className="button" color='primary'>
    Confirm
  </Button>
  <br></br>

    </section>
    </Form>
    </Col>
    </Row>
    </Container>

)}
export default UpdateUser;