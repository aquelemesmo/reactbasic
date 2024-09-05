import {FaDiscord} from "react-icons/fa";
import "../css/footer.css"

function Footer() {
    return (
        <footer>
            <h1>Nosso footer</h1>
            <ul style={{listStyle: "none"}}>
                <li><FaDiscord></FaDiscord></li>
            </ul>
        </footer>
    )
}

export default Footer;