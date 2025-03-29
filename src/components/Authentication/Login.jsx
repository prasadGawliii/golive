import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate,Link } from "react-router-dom";
import './Login.css'

const Login = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Min 6 characters").required("Required"),
  });

  const handleSubmit = (values) => {
e.preventDefault();
    // if(values.email=="admin@gmail.com" && values.password == "admin@123") {
    //   navigate("/home"); 
    // }
    
    // else (
    //   alert("Incorrect credentials")
    // )

    // console.log(values);
  };

  return (
    <div className="login-container">



      <h2>Login</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        
      >
        <Form>
          <div>
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" />
          </div>
         <Link to="/"> <button type="submit">Login</button> </Link> 
          <div>
          No account yet?  <Link to="/register">Register</Link>
          </div>
        </Form>
      </Formik>
     
    </div>
  );
};

export default Login;
