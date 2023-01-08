import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {withAsync} from "../../network/withAsync";
import {fetchOrder, orderIPN, orderStatus} from "../../network/api/v1/Order";
import {toast, ToastContainer} from "react-toastify";
import OrderIPNModal from "./OrderIPNModal";

function OrderList() {
    const [list, setList] = useState([]);
    const [invoiceDetails, setInvoiceDetails] = useState({});
    const fetchList = () => {
        const {response, error} = withAsync(fetchOrder);
        if (error) {
            toast.error(error.message);
        } else {
            const data = response?.data ?? [];
            setList([...data]);
        }
    }

    const updateStatus = async ({target: {value}}, id) => {
        const {response, error} = withAsync(orderStatus, id, value);
        if (error) {
            toast.error(error.message);
        } else {
            toast.success(response.message);
            fetchList();
        }
    };

    const getIPN = async (id) => {
        const {response, error} = withAsync(orderIPN, id);
        if (error) {
            toast.error(error.message);
        } else {
            setInvoiceDetails(response?.data?.data);
        }
    };

    useEffect(() => {
        fetchList();
    }, [])

    return (
        <>
            <ToastContainer/>
            <h1 className="h2">Orders</h1>
            <div className="row">
                <div className="col-12 col-xl-12 mb-12 mb-lg-0">
                    <div className="card">
                        <h5 className="card-header">All Orders</h5>
                        <div className="card-body">
                            <Link to={'/create'}>
                                <button className="btn btn-primary">New Order</button>
                            </Link>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Invoice</th>
                                        <th scope="col">Customer Name</th>
                                        <th scope="col">Customer Email</th>
                                        <th scope="col">Customer Phone</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Date</th>
                                        <th scope="col"/>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        list && list.map((el, i) => (
                                            <tr key={i}>
                                                <th scope="row">{i + 1}</th>
                                                <td>{el.invoice_id}</td>
                                                <td>{el.customer_name}</td>
                                                <td>{el.customer_email}</td>
                                                <td>{el.customer_phone}</td>
                                                <td>{el.amount}</td>
                                                <td>
                                                    <select name="status"
                                                            className="form-control"
                                                            id="status"
                                                            value={el.status}
                                                            onChange={(e) => updateStatus(e, el.id)}
                                                    >
                                                        <option value="0">Pending</option>
                                                        <option value="1">Paid</option>
                                                        <option value="2">Fulfilled</option>
                                                        <option value="3">Refund</option>
                                                    </select>
                                                </td>
                                                <td>{el.created}</td>
                                                <td>
                                                    <button
                                                        type="button"
                                                        className="btn btn-success"
                                                        data-toggle="modal"
                                                        data-target="#exampleModal"
                                                        onClick={() => getIPN(el.id)}
                                                    >IPN
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <OrderIPNModal invoiceDetails={invoiceDetails}/>

        </>
    );
}

export default OrderList;