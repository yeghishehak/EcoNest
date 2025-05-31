import styles from "./secondsection.module.css"

export default function Section2() {
    return (
        <section>
            <div className={styles.ourAdvantagesBox}>
                <div className={styles.ourAdvantagesTextBox}>
                    <h1 className={styles.ourAdvantagesText}>Our Advantages</h1>
                </div>
                <div className={styles.ourAdvantages}>
                    <div className={styles.advantages}>The Best Quality</div>
                    <div className={styles.advantages}>Less Prices</div>
                    <div className={styles.advantages}>Modern Design</div>
                    <div className={styles.advantages}>Plastic Free</div>
                    <div className={styles.advantages}>Recyclable</div>
                    <div className={styles.advantages}>Packaging Is 0 Waste</div>
                </div>
            </div>
        </section>
    )
}