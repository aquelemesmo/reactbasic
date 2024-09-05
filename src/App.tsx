import './App.css';
import Algo from "./components/Algo";
import Param from "./components/AlgoComParametro";
import PropTypes from "./components/PropTypes";
import Evento from "./components/TesteEvento";
import UseStateTest from "./components/useState";
import List from "./components/ListRender";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import RouteTest from "./roteador/Roteador";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <BrowserRouter>
                <div className="App">
                    <h1>Titulo do site</h1>
                    <Algo></Algo>
                    <Param nome={"aaaaaaaaaaa"}>???</Param>
                    <PropTypes par1={0} par2={true}></PropTypes>
                    <PropTypes par1={1} par2={false}></PropTypes>
                    <Evento></Evento>
                    <UseStateTest></UseStateTest>
                    <List></List>
                    <p>Vá para <Link to={"/roteador"}>Outra página</Link></p>
                </div>
                <Routes>
                    <Route path={"/roteador"} element={<RouteTest/>}/>
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </>
    )
        ;
}

export default App;
