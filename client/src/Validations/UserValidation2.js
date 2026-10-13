import *as yup from 'yup';
export const userSchemaValidations=yup.object().shape({
    date:yup.date().required("date is required"),
    age:yup.string().required("age is required"),
    gender:yup.string().required("gender is required"),
    check:yup.array().min(1,"Please select at least one option").required("required"),
});