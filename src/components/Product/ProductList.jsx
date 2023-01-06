import {Link} from "react-router-dom";

function ProductList() {
    return (
        <>
            <>
                <h1 className="h2">Product</h1>
                <div className="row">
                    <div className="col-12 col-xl-12 mb-12 mb-lg-0">
                        <div className="card">
                            <h5 className="card-header">All Product</h5>
                            <div className="card-body">
                                <Link to={'products/create'}>
                                    <button className="btn btn-primary">New Product</button>
                                </Link>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                            <th scope="col">SL</th>
                                            <th scope="col">Product</th>
                                            <th scope="col">Details</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Status</th>
                                            <th scope="col"/>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>A</td>
                                            <td>B</td>
                                            <td>C</td>
                                            <td>D</td>
                                            <td>T</td>
                                            <td>E</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
}

export default ProductList;