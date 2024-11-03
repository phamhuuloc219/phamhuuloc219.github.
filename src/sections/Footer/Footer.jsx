import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id='footer' className={styles.container}>
        <p>Copyright &copy; 2024 by Pham Huu Loc.
            <br /> All rights reserved.
        </p>
    </section>
  )
}

export default Footer