import { useState } from "react";

function UseStateTest() {

    const [dark, setDark] = useState(false);

    return (
        <>
            <br/>

            <button onClick={(e) => {
                setDark(!dark);
                document.documentElement.style.setProperty("--bg", dark ? "#FFF" : "#000")
                document.documentElement.style.setProperty("--text", dark ? "#000" : "#FFF")
            }}>
                Trocar para o modo para {dark ? "Claro" : "Escuro"}
            </button>

        </>
    )
}

export default UseStateTest;