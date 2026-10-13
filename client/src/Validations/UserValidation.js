import * as yup from 'yup';
export const userSchemaValidation = yup.object().shape({
name:yup.string().required("Name is required"),
email:yup.string().email("must be an email").required("Email is required"),
password:yup.string().min(4).max(20).required("password is required"),
confirmPassword:yup.string().oneOf([yup.ref("password")],"password do not match").required("Confirm password is required"),
});