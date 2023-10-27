import * as yup from 'yup';

const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Please enter a valid email')
        .required('Obligatory field'),
    password: yup
        .string()
        .min(6, ({min}) => `The password must contain at least ${min} characters`)
        .required('Obligatory field')
});

export default loginValidationSchema;