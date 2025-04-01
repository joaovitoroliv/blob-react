import { Link } from "react-router-dom";

export function Header() {
    return (
        <>
    <h1>
        Meu blog
    </h1>
    <ul>
        <li>
            <Link to={"/"}>Home</Link>
        </li>
        <li>
            <Link to={"/sobre"}>Sobre</Link>
        </li>
    </ul>
    </>
    )
}