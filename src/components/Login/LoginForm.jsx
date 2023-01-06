import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from "yup";
import {withAsync} from "../../network/withAsync";
import {submitLogin} from "../../network/api/v1/Auth";
import {toast, ToastContainer} from "react-toastify";
import {useEffect} from "react";
import {login} from "../../slices/authSlice";

function LoginForm() {

    const dispatch = useDispatch();
    let navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const loginForm = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email().required('Email Is Required'),
            password: Yup.string().required('Password Is Required'),
        }),
        onSubmit: (values, {resetForm}) => {
            const {response, error} = withAsync(submitLogin, values);
            if (response.status === 201) {
                dispatch(login(response.data));
            }
            toast.success("Login Successfully");
            resetForm({values: ''});
            if (error) {
                console.log(error);
            }
        }
    });

    const handleLogIn = () => {
        loginForm.handleSubmit();
        navigate('/', {replace: true})
    }

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/', {replace: true});
        }
    }, [isLoggedIn, navigate]);


    return (
        <>
            <ToastContainer/>
            <div className="container-md">
                <div className="row vh-100 d-flex justify-content-center">
                    <div className="col-12 align-self-center">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-4 mx-auto">
                                    <div className="card">
                                        <div className="card-body p-0 auth-header-box">
                                            <div className="text-center p-3">
                                                <h4 className="mt-3 mb-1 fw-semibold text-white font-18">Let's Get
                                                    Started Document Vault</h4>
                                                <p className="text-muted  mb-0">Sign in to continue.</p>
                                            </div>
                                        </div>
                                        <div className="card-body pt-0">
                                            <form className="my-4"
                                                  action="https://mannatthemes.com/metrica/default/index.html">
                                                <div className="form-group mb-2">
                                                    <label className="form-label" htmlFor="email">Email</label>
                                                    <input type="email" className="form-control" id="email"
                                                           onChange={loginForm.handleChange}
                                                           onBlur={loginForm.handleBlur}
                                                           value={loginForm.values.email}
                                                           name="email" placeholder="Enter Your Email"/>
                                                    <div className="text-danger">
                                                        {
                                                            loginForm.touched.email &&
                                                            loginForm.errors.email &&
                                                            (<div>{loginForm.errors.email}</div>)
                                                        }
                                                    </div>
                                                </div>
                                                {/*end form-group*/}
                                                <div className="form-group">
                                                    <label className="form-label"
                                                           htmlFor="password">Password</label>
                                                    <input type="password" className="form-control" name="password"
                                                           onChange={loginForm.handleChange}
                                                           onBlur={loginForm.handleBlur}
                                                           value={loginForm.values.password}
                                                           id="password" placeholder="Enter password"/>
                                                    <div className="text-danger">
                                                        {
                                                            loginForm.touched.password &&
                                                            loginForm.errors.password &&
                                                            (<div>{loginForm.errors.password}</div>)
                                                        }
                                                    </div>
                                                </div>
                                                {/*end form-group*/}
                                                <div className="form-group mb-0 row">
                                                    <div className="col-12">
                                                        <div className="d-grid mt-3">
                                                            <button onClick={handleLogIn}
                                                                    className="btn btn-primary"
                                                                    type="button">Log In <i
                                                                className="fas fa-sign-in-alt ms-1"/></button>
                                                        </div>
                                                    </div>
                                                    {/*end col*/}
                                                </div>
                                                {/*end form-group*/}
                                            </form>
                                            {/*end form*/}
                                        </div>
                                        {/*end card-body*/}
                                    </div>
                                    {/*end card*/}
                                </div>
                                {/*end col*/}
                            </div>
                            {/*end row*/}
                        </div>
                        {/*end card-body*/}
                    </div>
                    {/*end col*/}
                </div>
                {/*end row*/}
            </div>
        </>
    );
}

export default LoginForm;