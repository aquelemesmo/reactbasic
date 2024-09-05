function ClicaNoEvento() {
    console.log("ClicaNoEvento");
}


function Evento() {
    return (
    <>
        <button onClick={ClicaNoEvento}>Evento</button>
    </>
    )
}

export default Evento;