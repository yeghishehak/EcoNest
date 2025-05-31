import styles from "./products.module.css"

export default function Products() {
    return (

    <section>
        <div className={styles.welcomeTextBox}>
            <h1 className={styles.welcomeText}>Welcome To Our Store</h1>
        </div>
        <div className={styles.ourProducts}>
            <div className={`${styles.products} ${styles.box1}`}><h1 className={`${styles.h1Product} ${styles.cloth}`}>Cloth produce bags <br/> $9.99</h1></div>
            <div className={`${styles.products} ${styles.box2}`}><h1 className={styles.h1Product}>Soap Dish <br/> $6.99</h1></div>
            <div className={`${styles.products} ${styles.box3}`}><h1 className={`${styles.h1Product} ${styles.bathroomItem}`}>Plastic-Free Bathroom Item <br/> $4.99</h1></div>
            <div className={`${styles.products} ${styles.box4}`}><h1 className={styles.h1Product}>Food Wrap <br/> $4.49</h1></div>
            <div className={`${styles.products} ${styles.box5}`}><h1 className={styles.h1Product}>Dish Sponge <br/> $1.99</h1></div>
            <div className={`${styles.products} ${styles.box6}`}><h1 className={styles.h1Product}>Soap Container <br/> $9.99</h1></div>
            <div className={`${styles.products} ${styles.box7}`}><h1 className={styles.h1Product}>Cleaning Cloth <br/> $2.49</h1></div>
        </div>
    </section>

    )
}