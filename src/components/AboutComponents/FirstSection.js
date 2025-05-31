import styles from "./firstsection.module.css"

export default function Section1() {
    return(
        <section>
            <div className={styles.aboutusDiv}>
                <h1 className={styles.aboutusText}>About Us</h1>
                <p className={styles.aboutusDescription}>EcoNest is a modern startup dedicated to providing sustainable, eco-friendly home products that combine style with environmental responsibility. From bamboo kitchenware to refillable cleaning supplies, we make it easy for everyday people to live greener without compromising on quality or design.</p>
            </div>
        </section>
)}