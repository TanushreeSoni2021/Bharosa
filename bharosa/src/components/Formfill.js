import "../Styles/Home.css";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
function Formfill() {
    const initialValues = {
        name: '',
        email: '',
        phone: '',
        thoughts: '',
        location: '',
        confirm: '',
    }
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Required'),
        phone: Yup.number()
            .min(8).required('Required'),
        // thoughts: Yup.string().required('Required'),
        // location: Yup.string().required('Required'),
        confirm: Yup.string().required('Required'),
    })
    const submit = (values, { resetForm }) => {
        // console.log('form data', values)
        // localStorage.setItem("Name", values.name)
        // localStorage.setItem("email", values.email)
        // localStorage.setItem("contact", values.Phone)
        // localStorage.setItem("thought", values.thoughts)
        // localStorage.setItem("location", values.location)

        const url = "http://localhost:4000/users";
        axios.post(url, {
            "name": values.name,
            "email": values.email,
            "phone": values.phone,
            "thoughts": values.thoughts,
            "location": values.location,
            "confirm": values.confirm,

        });
        alert("submit")
        resetForm({ values: ' ' });

    }
    return (
        <div className='container' >

            <div className="my-form mt-5">
                <h2 className="head mt-5">Talk to us</h2>


                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={submit} >

                    <Form className='mt-5'>
                        <div className='col-12 d-flex flex-column justify-content-lg-end justify-content-center mx-1 mb-3 position-relative'>
                            <Field type="text" className="form-control input__field" placeholder=" " id="name" name="name" />
                            <label htmlFor="name" className='lable__box'>Name<span className="text-danger">*</span></label>
                            <p className='text-danger error__message'> <ErrorMessage name="name" /></p>
                        </div>
                        <div className='col-12 d-flex flex-column justify-content-lg-end justify-content-center mx-1 mb-3 position-relative'>
                            <Field type="email" className="form-control input__field" placeholder=" " id="email" name="email" />
                            <label htmlFor="email" className='lable__box'>Email<span className="text-danger">*</span></label>
                            <p className='text-danger error__message'><ErrorMessage name="email" /></p>
                        </div>
                        <div className='col-12 d-flex flex-column justify-content-lg-end justify-content-center mx-1 mb-3 position-relative'>
                            <Field type="number" className="form-control input__field" placeholder=" " id="phone" name="phone" />
                            <label htmlFor="Phone" className='lable__box'>Phone Number<span className="text-danger">*</span></label>
                            <p className='text-danger error__message'><ErrorMessage name="Phone" /></p>
                        </div>
                        <div className='col-12 d-flex flex-column justify-content-lg-end justify-content-center mx-1 mb-3 position-relative'>
                            <Field type="text" className="form-control input__field" placeholder=" " id="location" name="location" />
                            <label htmlFor="location" className='lable__box'>Where are you Located</label>
                        </div>
                        <div className='col-12 d-flex flex-column justify-content-lg-end justify-content-center mx-1 mb-3 position-relative'>
                            <Field type="text" className="form-control input__field" placeholder=" " id="thoughts" name="thoughts" />
                            <label htmlFor="thoughts" className='lable__box'>What's on your mind</label>
                        </div>


                        <div className="mb-3 form-check">
                            <Field type="checkbox" className="form-check-input" id="exampleCheck1" name="confirm" />
                            <span>I am okay sharing my personal information with BHAROSA and I have had a look at your <span style={{ 'color': '#1650D3', 'fontWeight': 'bold' }}> "Privacy Policy" </span>to see how you use it</span>
                            <p className='text-danger error_message'><ErrorMessage name='confirm' /></p>
                        </div>
                        <div className="justify-content-center text-center mt-5">
                            <button className='button-style px-5' type="submit" >Submit</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
export default Formfill;