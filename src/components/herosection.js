import Image from "next/image"
import styles from "./herosection.module.css"
import Link from 'next/link'

export default function HeroSection() {
    return (
        <section>
            <div className={styles.herosectionImageBox}>
                <div className={styles.herosectionTextBox}>
                    <h1 className={styles.h1}>Live Green, <br /> Live Clean</h1>
                    <p className={styles.p}>EcoNest brings nature home with beautifully crafted, sustainable essentials that make eco-friendly living effortless, elegant, and accessible to all.</p>
                    <div className={styles.buttonsBox}>
                        <Link href="/store">
                            <button className={`${styles.ourInventory} ${styles.button}`}><span className={styles.span}>Our Inventory</span></button>
                        </Link>

                        <Link href="/about">
                            <button className={`${styles.learnMore} ${styles.button}`}><span className={styles.span}>Learn More</span></button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
)}