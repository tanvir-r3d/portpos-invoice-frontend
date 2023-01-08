import "./invoice.css";

const Invoice = ({invoiceDetails}) => {
    return (
        <>
            <div className="invoice-body">
                <header className="clearfix invoice-header">
                    <h1 className="invoice-h1">INVOICE {invoiceDetails.invoice_id}</h1>
                    <div id="company" className="clearfix">
                        <div>ABC Ltd</div>
                        <div>Dhaka,<br/> Bangladesh</div>
                        <div>+880134567643</div>
                        <div><a className="invoice-a" href="mailto:abc@example.com">abc@example.com</a></div>
                    </div>
                    <div id="project">
                        <div><span>NAME</span> {invoiceDetails?.billing?.customer?.name}</div>
                        <div><span>PHONE</span> {invoiceDetails?.billing?.customer?.phone}</div>
                        <div><span>EMAIL</span>
                            <a className="invoice-a"
                               href={"mailto:" + invoiceDetails?.billing?.customer?.email}>
                                {invoiceDetails?.billing?.customer?.email}
                            </a>
                        </div>
                        <div><span>ADDRESS</span>
                            {
                                invoiceDetails?.billing?.customer?.address.street + ", " +
                                invoiceDetails?.billing?.customer?.address.city + ", " +
                                invoiceDetails?.billing?.customer?.address.state + ", " +
                                invoiceDetails?.billing?.customer?.address.zipcode + ", " +
                                invoiceDetails?.billing?.customer?.address.country + ", "
                            }
                        </div>

                        <div><span>DATE</span> {invoiceDetails?.order?.created_at}</div>
                        <div><span>AMOUNT</span> {invoiceDetails?.order?.amount}</div>
                        <div><span>STATUS</span> {invoiceDetails?.order?.status}</div>
                    </div>
                </header>
                <main>
                    <table className="invoice-table">
                        <thead>
                        <tr>
                            <th>PRODUCT</th>
                            <th>DESCRIPTION</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{invoiceDetails?.product?.name}</td>
                            <td>{invoiceDetails?.product?.description}</td>
                        </tr>
                        <tr>
                            <td><b>TOTAL</b></td>
                            <td>
                                <b>
                                    {invoiceDetails?.order?.amount + " " + invoiceDetails?.order?.currency}
                                </b>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </main>
                <footer className="invoice-footer">
                    Copyright
                </footer>
            </div>
        </>
    );
}
export default Invoice;