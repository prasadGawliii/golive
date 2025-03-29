import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import './Register.css'

const Register = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().min(3, "Min 3 characters").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Min 6 characters").required("Required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
    navigate("/login"); 
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <Field type="text" name="name" placeholder="Name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default Register;
