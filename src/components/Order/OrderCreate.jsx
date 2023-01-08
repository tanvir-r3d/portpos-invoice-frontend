import {useFormik} from "formik";
import * as Yup from "yup";
import {withAsync} from "../../network/withAsync";
import {submitOrder} from "../../network/api/v1/Order";
import {toast, ToastContainer} from "react-toastify";
import {Link} from "react-router-dom";
import {Invalid} from "../Wrappers/Invalid";

function OrderCreate() {
    const form = useFormik({
        initialValues: {
            'order': {
                'amount': 0.00,
                'currency': 'BDT',
                'redirect_url': '/orders',
            },
            'billing': {
                'customer': {
                    'name': '',
                    'email': '',
                    'phone': '',
                    'address': {
                        'street': '',
                        'city': '',
                        'state': '',
                        'zipcode': '',
                        'country': 'BD',
                    }
                }
            },
            'product': {
                'name': '',
                'description': '',
            }
        },
        enableReinitialize: true,
        validationSchema: Yup.object({
            'billing.customer.name': Yup.string().required('Required'),
            'billing.customer.email': Yup.string().email('Invalid').required('Required'),
            'billing.customer.phone': Yup.string().required('Required'),
            'billing.customer.address.state': Yup.string().required('Required'),
            'billing.customer.address.city': Yup.string().required('Required'),
            'billing.customer.address.zipcode': Yup.string().required('Required'),
            'billing.customer.address.street': Yup.string().required('Required'),
            'billing.customer.address.country': Yup.string().required('Required'),
            'order.amount': Yup.number().required('Required'),
            'order.currency': Yup.string().required('Required'),
            'product.name': Yup.string().required('Required'),
        }),
        onSubmit: async (values, {resetForm}) => {
            console.log('adsf')
            const {response, error} = await withAsync(submitOrder, values);
            if (error) {
                toast.error(error.message);
            } else {
                toast.success(response.message);
                resetForm('');
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
                            <Link to={'/'}>
                                <button className="btn btn-primary" type="button">Order List</button>
                            </Link>
                            <form onSubmit={form.handleSubmit}>
                                <div className="row mt-2">
                                    <div className="col-6 col-xl-6">
                                        <div className="card">
                                            <h5 className="card-header">Billing Details</h5>
                                            <div className="card-body">
                                                <div className="mb-3">
                                                    <label htmlFor="billing.customer.name"
                                                           className="form-label">Name</label>
                                                    <input type="text"
                                                           className="form-control"
                                                           id="billing.customer.name"
                                                           aria-describedby="billing.customer.name"
                                                           name="billing.customer.name"
                                                           onChange={form.handleChange}
                                                           onBlur={form.handleBlur}
                                                           value={form.values.billing.customer.name}
                                                    />
                                                    <Invalid form={form} field="billing.customer.name"/>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label htmlFor="billing.customer.email"
                                                                   className="form-label">Email</label>
                                                            <input type="email"
                                                                   className="form-control"
                                                                   id="billing.customer.email"
                                                                   name="billing.customer.email"
                                                                   onChange={form.handleChange}
                                                                   onBlur={form.handleBlur}
                                                                   value={form.values.billing.customer.email}
                                                            />
                                                            <Invalid form={form} field="billing.customer.email"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label htmlFor="billing.customer.phone"
                                                                   className="form-label">Phone</label>
                                                            <input type="text"
                                                                   className="form-control"
                                                                   id="billing.customer.phone"
                                                                   name="billing.customer.phone"
                                                                   onChange={form.handleChange}
                                                                   onBlur={form.handleBlur}
                                                                   value={form.values.billing.customer.phone}
                                                            />
                                                            <Invalid form={form} field="billing.customer.phone"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label htmlFor="billing.customer.address.street"
                                                                   className="form-label">Address Street</label>
                                                            <input type="text"
                                                                   className="form-control"
                                                                   id="billing.customer.address.street"
                                                                   name="billing.customer.address.street"
                                                                   onChange={form.handleChange}
                                                                   onBlur={form.handleBlur}
                                                                   value={form.values.billing.customer.address.street}
                                                            />
                                                            <Invalid form={form}
                                                                     field="billing.customer.address.street"/>

                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label htmlFor="billing.customer.address.city"
                                                                   className="form-label">Address City</label>
                                                            <input type="text"
                                                                   className="form-control"
                                                                   id="billing.customer.address.city"
                                                                   name="billing.customer.address.city"
                                                                   onChange={form.handleChange}
                                                                   onBlur={form.handleBlur}
                                                                   value={form.values.billing.customer.address.city}
                                                            />
                                                            <Invalid form={form} field="billing.customer.address.city"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label htmlFor="billing.customer.address.state"
                                                                   className="form-label">Address State</label>
                                                            <input type="text"
                                                                   className="form-control"
                                                                   id="billing.customer.address.state"
                                                                   name="billing.customer.address.state"
                                                                   onChange={form.handleChange}
                                                                   onBlur={form.handleBlur}
                                                                   value={form.values.billing.customer.address.state}
                                                            />
                                                            <Invalid form={form}
                                                                     field="billing.customer.address.state"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="mb-3">
                                                            <label htmlFor="billing.customer.address.zipcode"
                                                                   className="form-label">Zipcode</label>
                                                            <input type="text"
                                                                   className="form-control"
                                                                   id="billing.customer.address.zipcode"
                                                                   name="billing.customer.address.zipcode"
                                                                   onChange={form.handleChange}
                                                                   onBlur={form.handleBlur}
                                                                   value={form.values.billing.customer.address.zipcode}
                                                            />
                                                            <Invalid form={form}
                                                                     field="billing.customer.address.zipcode"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="billing.customer.address.country"
                                                           className="form-label">Country</label>

                                                    <select name="billing.customer.address.country"
                                                            className="form-control"
                                                            id="billing.customer.address.country"
                                                            onChange={form.handleChange}
                                                            onBlur={form.handleBlur}
                                                            value={form.values.billing.customer.address.country}
                                                    >
                                                        <option value="BD">Bangladesh</option>
                                                        <option value="AU">Australia</option>
                                                        <option value="CN">China</option>
                                                        <option value="US">United States of America</option>
                                                    </select>
                                                    <Invalid form={form} field="billing.customer.address.country"/>
                                                </div>
                                                <button className="btn btn-success"
                                                        type="submit">
                                                    Proceed
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 col-xl-6">
                                        <div className="card">
                                            <h5 className="card-header">Product Details</h5>
                                            <div className="card-body">
                                                <div className="mb-3">
                                                    <label htmlFor="product.name"
                                                           className="form-label">Name</label>
                                                    <input type="text"
                                                           className="form-control"
                                                           id="product.name"
                                                           aria-describedby="product.name"
                                                           name="product.name"
                                                           onChange={form.handleChange}
                                                           onBlur={form.handleBlur}
                                                           value={form.values.product.name}
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="product.description"
                                                           className="form-label">Description</label>
                                                    <input type="text"
                                                           className="form-control"
                                                           id="product.description"
                                                           aria-describedby="product.description"
                                                           name="product.description"
                                                           onChange={form.handleChange}
                                                           onBlur={form.handleBlur}
                                                           value={form.values.product.description}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card mt-3">
                                            <h5 className="card-header">Order Details</h5>
                                            <div className="card-body">
                                                <div className="mb-3">
                                                    <label htmlFor="order.amount"
                                                           className="form-label">Amount</label>
                                                    <input type="text"
                                                           className="form-control"
                                                           id="order.amount"
                                                           aria-describedby="order.amount"
                                                           name="order.amount"
                                                           onChange={form.handleChange}
                                                           onBlur={form.handleBlur}
                                                           value={form.values.order.amount}
                                                    />
                                                    <Invalid form={form} field="order.amount"/>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="order.currency"
                                                           className="form-label">Currency</label>
                                                    <select name="order.currency"
                                                            className="form-control"
                                                            id="order.currency"
                                                            onChange={form.handleChange}
                                                            onBlur={form.handleBlur}
                                                            value={form.values.order.currency}
                                                    >
                                                        <option value="BDT">BDT</option>
                                                        <option value="USD">USD</option>
                                                    </select>
                                                    <Invalid form={form} field="order.currency"/>
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
        </>
    );
}

export default OrderCreate;