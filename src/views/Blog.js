import styles from "./Blog.module.css"
import { Link } from "react-router-dom"

export function Blog() {
    return (
        <>
            <div className={styles.frontPageWrapper}>
                <div className={styles.heroOverlay}>
                    <img className={styles.hero}
                        src="/herobanner.jpg"
                        alt=""
                    />
                        <div className={styles.siteDescriptionWrapper}>
                            <Link className={styles.button} to={"/sobre"}>Tecnologia, React e Frameworks - Confira as últimas postagens</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
