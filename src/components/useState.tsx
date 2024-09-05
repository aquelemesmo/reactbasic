import { useState } from "react";

function UseStateTest() {

    const [dark, setDark] = useState(false);

    return (
        <>
            <br/>

            <button onClick={(e) => {
                setDark(!dark);
                document.documentElement.style.setProperty("--bg", dark ? "#FFF" : "#000")
            }}>
                Trocar para o modo para {dark ? "Claro" : "Escuro"}
            </button>

        </>
    )
}

export default UseStateTest;