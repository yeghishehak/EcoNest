import styles from "./footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.p}>Created by <span className={styles.span}>Yeghishe Hakobyan</span></p>
        </footer>
    )
}