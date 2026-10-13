import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {Container,Form,FormGroup,Label,Col,Input,Button} from "reactstrap";
import { userSchemaValidations } from "../Validations/UserValidation2";

const Register2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidations),
  });

  const onSubmitf = (data) => {
    console.log("Form Data", data);
    alert("validation good");
  };

  return (
    <Container fluid>
      <Form onSubmit={handleSubmit(onSubmitf)}>

        {/* Date of Birth */}
        <FormGroup>
          <Label for="date">Date of Birth</Label>

          <Input
            id="date"
            bsSize="sm"
            type="date"
            {...register("date")}
          />

          <p className="error">
            {errors.date?.message}
          </p>
        </FormGroup>


        {/* Age */}
        <FormGroup row>
          <Label for="age" sm={2}>
            Select Your Age:
          </Label>

          <Col sm={10}>
            <Input
              id="age"
              type="select"
              {...register("age")}
            >
              <option value="">Select age</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
            </Input>

            <p className="error">
              {errors.age?.message}
            </p>
          </Col>
        </FormGroup>


        {/* Gender */}
        <FormGroup row tag="fieldset">
          <legend className="col-form-label col-sm-2">
            Gender
          </legend>

          <Col sm={10}>

            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  value="male"
                  {...register("gender")}
                />
                Male
              </Label>
            </FormGroup>

            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  value="female"
                  {...register("gender")}
                />
                Female
              </Label>
            </FormGroup>

            <p className="error">
              {errors.gender?.message}
            </p>

          </Col>
        </FormGroup>


        {/* Learning */}
        <FormGroup check>
          <Label check>
            <Input
              id="learning"
              type="checkbox"
              value="learning"
              {...register("check")}
            />
            Learning
          </Label>
        </FormGroup>


        {/* Teaching */}
        <FormGroup check>
          <Label check>
            <Input
              id="teaching"
              type="checkbox"
              value="teaching"
              {...register("check")}
            />
            Teaching
          </Label>
        </FormGroup>


        {/* Entertainment */}
        <FormGroup check>
          <Label check>
            <Input
              id="entertainment"
              type="checkbox"
              value="entertainment"
              {...register("check")}
            />
            Entertainment
          </Label>
        </FormGroup>

        <p className="error">
          {errors.check?.message}
        </p>


        {/* Submit */}
        <Button className="button" color="primary" type="submit">
          Submit
        </Button>

      </Form>
    </Container>
  );
};

export default Register2;
