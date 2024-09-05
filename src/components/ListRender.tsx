function List() {

    const arrayExample = [
        "a",
        "b",
        "c",
        "d"
    ]

    return (
        <>
            <h1>Lista de lista</h1>
            <ul>
            {
                arrayExample.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
            </ul>
        </>
    )
}

export default List;