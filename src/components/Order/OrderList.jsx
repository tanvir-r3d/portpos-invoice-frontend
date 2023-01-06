import {Link} from "react-router-dom";

function OrderList() {
    return (
        <>
            <h1 className="h2">Orders</h1>
            <div className="row">
                <div className="col-12 col-xl-12 mb-12 mb-lg-0">
                    <div className="card">
                        <h5 className="card-header">All Orders</h5>
                        <div className="card-body">
                            <Link to={'/orders/create'}>
                                <button className="btn btn-primary">New Order</button>
                            </Link>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th scope="col">Order</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Customer</th>
                                        <th scope="col">Total</th>
                                        <th scope="col">Date</th>
                                        <th scope="col"/>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">17371705</th>
                                        <td>Volt Premium Bootstrap 5 Dashboard</td>
                                        <td>johndoe@gmail.com</td>
                                        <td>€61.11</td>
                                        <td>Aug 31 2020</td>
                                        <td>View</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderList;