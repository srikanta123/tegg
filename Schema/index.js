import * as yup from 'yup';

export const signUpSchema=yup.object({
    firstname:yup.string().min(2).max(25).required("please enter your name"),
    lastname:yup.string().min(2).max(25).required("please enter your lastName"),
    email:yup.string().email().required("please enter your email"),
    password:yup.string().min(6).required("please enter your password"),


})