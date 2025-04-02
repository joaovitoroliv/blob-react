import { Link } from "react-router-dom";
import styles from "./Header.module.css"
import { FaGithub } from "react-icons/fa";

export function Header() {
    return (
        <>
    <nav className={styles.navbar}>
  <div className={styles.navbarLeft}>
    <a href="/" className={styles.logo}>
      React Blog
    </a>
  </div>
  <div className={styles.navbarCenter}>
    <ul className={styles.navLinks}>
      <li>
        <Link to={"/"}>Blog</Link>
      </li>
      <li>
        <Link to={"/sobre"}>Sobre</Link>
      </li>
      <li>
      < Link to={"/descricao"}>Descrição</Link>
      </li>
    </ul>
  </div>
  <div className={styles.navbarRight}>
    <a className={styles.githubLogo} href="https://github.com/joaovitoroliv" target="_blank" rel="noopener noreferrer">
        <FaGithub size={36} />
      </a>
  </div>
</nav>
    </>
    )
}