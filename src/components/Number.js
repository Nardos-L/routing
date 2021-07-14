const Number = (props) => {
    const { id } = props;

    if (isNaN(id)) {
        return (<h1>"You should use a number"</h1>)
    } else
        return (

            <h1>The Number is: {id}</h1>
        )
}

export default Number;