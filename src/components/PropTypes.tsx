function props({par1 = 0, par2 = false}) {
    return (
        <>
            <h1>Os parâmetros são</h1>
            <p>{par1} Como um número</p>
            <p>{par2} Como um boolean</p>

        </>
    )
}

export default props;