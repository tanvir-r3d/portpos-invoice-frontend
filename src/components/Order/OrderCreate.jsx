import Product from "../Product/Product";
import {useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import {withAsync} from "../../network/withAsync";
import {submitOrder} from "../../network/api/v1/Order";
import {toast, ToastContainer} from "react-toastify";
import * as R from 'ramda';
import {Link} from "react-router-dom";

function OrderCreate() {
    const [cart, setCart] = useState([]);
    const calculateAmount = (items) => {
        const pluck = R.pluck('sub_total');
        return R.sum(pluck(items));
    }
    const addToCart = (item) => {
        let items = [...cart];
        const find = items.find(el => parseInt(el.id) === parseInt(item.id));

        if (find) {
            find.qty++;
            find.sub_total = find.qty * find.price;
        } else {
            item = {...item, qty: 1, sub_total: item.price};
            items.push(item);
        }

        setCart([...items]);

        form.setFieldValue('details', [...items]);
        form.setFieldValue('amount', calculateAmount(items));
    }

    const form = useFormik({
        initialValues: {
            'id': '',
            'name': '',
            'email': '',
            'phone': '',
            'address': '',
            'amount': '',
            'details': [],
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            'name': Yup.string().required('Customer Name Required'),
            'email': Yup.string().required('Customer Email Required'),
            'phone': Yup.string().required('Customer Phone Required'),
            'address': Yup.string().required('Customer Address Required'),
            'details': Yup.array().required('At Least One Product required'),
        }),
        onSubmit: async (values, {resetForm}) => {
            let res;
            const {response, error} = withAsync(submitOrder, values);
            if (error) {
                toast.error(error.message);
            } else {
                toast.success(response.message);
                resetForm('');
                // navigate(`/orders`)
            }
        }
    });

    return (
        <>
            <ToastContainer/>
            <h1 className="h2">Order</h1>
            <div className="row">
                <div className="col-12 col-xl-12 mb-12 mb-lg-0">
                    <div className="card">
                        <h5 className="card-header">Create Order</h5>
                        <div className="card-body">
                            <Link to={'/orders'}>
                                <button className="btn btn-primary" type="button">Order List</button>
                            </Link>
                            <form onSubmit={form.handleSubmit}>
                                <div className="row mt-2">
                                    <div className="col-4 col-xl-4">
                                        <div className="card">
                                            <h5 className="card-header">Customer Details</h5>
                                            <div className="card-body">
                                                <div className="mb-3">
                                                    <label htmlFor="name" className="form-label">Name</label>
                                                    <input type="text"
                                                           className="form-control"
                                                           id="name"
                                                           aria-describedby="name"
                                                           name="name"
                                                           onChange={form.handleChange}
                                                           onBlur={form.handleBlur}
                                                           value={form.values.name}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="email"
                                                           className="form-label">Email</label>
                                                    <input type="email"
                                                           className="form-control"
                                                           id="email"
                                                           name="email"
                                                           onChange={form.handleChange}
                                                           onBlur={form.handleBlur}
                                                           value={form.values.email}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="email"
                                                           className="form-label">Phone</label>
                                                    <input type="text"
                                                           className="form-control"
                                                           id="phone"
                                                           name="phone"
                                                           onChange={form.handleChange}
                                                           onBlur={form.handleBlur}
                                                           value={form.values.phone}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="address"
                                                           className="form-label">Address</label>
                                                    <textarea className="form-control"
                                                              id="address"
                                                              rows="3"
                                                              name="address"
                                                              onChange={form.handleChange}
                                                              onBlur={form.handleBlur}
                                                              value={form.values.address}
                                                    ></textarea>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="amount"
                                                           className="form-label">Amount</label>
                                                    <input type="text" className="form-control"
                                                           id="amount" disabled readOnly
                                                           value={form.values.amount}
                                                    />
                                                </div>
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-8 col-xl-8">
                                        <div className="card">
                                            <h5 className="card-header">Select Product</h5>
                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <thead>
                                                        <tr>
                                                            <th scope="col">SL</th>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Details</th>
                                                            <th scope="col">Price</th>
                                                            <th scope="col">Action</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <Product add={addToCart}/>
                                                        <Product add={addToCart}/>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mt-2">
                                            <h5 className="card-header">Selected Products</h5>
                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <thead>
                                                        <tr>
                                                            <th scope="col">SL</th>
                                                            <th scope="col">Name</th>
                                                            <th scope="col">Details</th>
                                                            <th scope="col">Rate</th>
                                                            <th scope="col">Qty</th>
                                                            <th scope="col">Subtotal</th>
                                                            <th scope="col">Action</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        {cart && cart.map((item, idx) => (
                                                                <tr key={idx}>
                                                                    <td>{idx + 1}</td>
                                                                    <td>{item.name}</td>
                                                                    <td>{item.details}</td>
                                                                    <td>{item.price}</td>
                                                                    <td>{item.qty}</td>
                                                                    <td>{item.sub_total}</td>
                                                                    <td>
                                                                        <button className="btn btn-danger">X</button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        )}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>);
}

export default OrderCreate;