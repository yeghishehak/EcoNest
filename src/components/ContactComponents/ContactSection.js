import styles from "./contactsection.module.css"
import Image from "next/image"

export default function ContactSection() {
    return(
        <section className={styles.section}>
            <div className={styles.contactTextDiv}>
                <h1 className={styles.h1}>Contuct Us</h1>
            </div>
            <div className={styles.allContactSection}>
                <div className={styles.phoneSection}>
                    <div className={styles.imageDiv}>
                        <Image 
                        src="/contactIcons/phone.png"
                        width = {140}
                        height = {90}
                        alt="phone icon"
                        className={styles.phone}
                        />
                    </div>
                    <h1>123-456-7890</h1>
                </div>

                <div className={styles.mailSection}>
                    <div className={styles.imageDiv}>
                        <Image 
                        src="/contactIcons/mail.png"
                        width = {140}
                        height = {90}
                        alt="mail icon"
                        className={styles.mail}
                        />
                    </div>
                    <h1>hello@reallygreatsite.com</h1>
                </div>

                <div className={styles.mapSection}>
                    <div className={styles.imageDiv}>
                        <Image 
                        src="/contactIcons/map.png"
                        width = {140}
                        height = {90}
                        alt="map icon"
                        className={styles.map}
                        />
                    </div>
                    <h1>123 Anywhere St., Any City</h1>
                </div>

                <div className={styles.webSection}>
                    <div className={styles.imageDiv}>
                        <Image 
                        src="/contactIcons/web.png"
                        width = {140}
                        height = {90}
                        alt="web icon"
                        className={styles.web}
                        />
                    </div>
                    <h1>econest.vercel.app</h1>
                </div>
            </div>
        </section>
    )
}