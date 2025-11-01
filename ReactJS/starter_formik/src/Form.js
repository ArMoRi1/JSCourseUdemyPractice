import {Formik, Form, Field, ErrorMessage, useField} from "formik";
import * as Yup from 'yup';

const MyTextInput = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.name}>{label}</label>
            <input {...props} {...field}/>
            {meta.touched && meta.error ? (
                <div className="error"> {meta.error} </div>
            ) : null}
        </>
    )
};

const MyTextCheckBox = ({children, ...props}) => {
    const [field, meta] = useField({...props, type : 'checkbox'});
    return (
        <>
            <label className="checkBox">
                <input type="checkbox" {...props} {...field}/>
                {children}
            </label>

            {meta.touched && meta.error ? (
                <div className="error"> {meta.error} </div>
            ) : null}
        </>
    )
};

const CustomForm = () => {

    return (
        <Formik initialValues={{
            name: '',
            email: '',
            amount: 0,
            currency: '',
            text: '',
            terms: false,
        }}

                validationSchema = {Yup.object({
                    name: Yup.string()
                        .min(2, 'minimum 2 symbols')
                        .required('this field is required'),
                    email: Yup.string()
                        .email('your email is incorrect')
                        .required('this field is required'),
                    amount: Yup.number()
                        .min(5, 'no less than 5')
                        .required('this field is required'),
                    currency: Yup.string().required('this field is required'),
                    text: Yup.string()
                        .min(10, 'no less than 10 symbols'),
                    terms: Yup.boolean()
                        .required('You need to read & accept terms')
                        .oneOf([true],'You need to read & accept terms' )
                })}

                onSubmit = {values => console.log(JSON.stringify(values, null, 2))}
        >
            <Form className="form">
                <h2>Отправить пожертвование</h2>

                <MyTextInput
                    label="Your name"
                    id="name"
                    name="name"
                    type="text"
                />

                <MyTextInput
                    label="Your name"
                    id="email"
                    name="email"
                    type="email"
                />

                <MyTextInput
                    label="Your amount"
                    id="amount"
                    name="amount"
                    type="number"
                />


                <label htmlFor="currency">Валюта</label>
                <Field
                    id="currency"
                    name="currency"
                    as="select"
                >
                    <option value="">Выберите валюту</option>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="RUB">RUB</option>
                </Field>
                <ErrorMessage className="error" name="currency" component="div"/>

                <label htmlFor="text">Ваше сообщение</label>
                <Field
                    id="text"
                    name="text"
                    as="textarea"
                />
                <ErrorMessage className="error" name="text" component="div"/>

                <MyTextCheckBox name="terms">
                    Соглашаетесь с политикой конфиденциальности?
                </MyTextCheckBox>

                <button type="submit">Отправить</button>
            </Form>
        </Formik>
)
}

export default CustomForm;