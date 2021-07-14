const Number = (props) => {
    const { hello, color, backgroundColor } = props;
    return (
        <div >
            <h1 style={{ color: color, backgroundColor: backgroundColor }}>The Word is: {hello}</h1>
        </div>

    )
}

export default Number;