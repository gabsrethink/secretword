import styles from './Footer.module.css';
import logo from '../images/logo.png'
import Icon from '../images/Icone_chapeuzinho.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerReferences}>
            <img src={Icon} alt="" className={styles.imageFooter}/>
            <p className={styles.reference}>@2022. Rethink Academy - Criado por Gabriel Melo</p>
        </div>
        <div className={styles.logo}>
            <img src={logo} alt="Rethink" />
        </div>
    </footer>
  )
}

export default Footer