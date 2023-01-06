function Product({add}) {
    return (
        <>
            <tr>
                <td>1</td>
                <td>Name</td>
                <td>detail</td>
                <td>0.00</td>
                <td>
                    <button className="btn btn-success btn-sm" type="button"
                            onClick={() => add({id: 1, name: "ASDF", price: 150})}
                    >
                        <b>+</b></button>
                </td>
            </tr>
        </>
    );
}

export default Product;