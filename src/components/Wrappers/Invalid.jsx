export const Invalid = (props) => {
    const {form, field} = props;
    return (
        <>
            <div className="text-danger">
                {form.touched[field] && form.errors[field] && (
                    <div>{form.errors[field]}</div>)
                }
            </div>
        </>
    );
};

