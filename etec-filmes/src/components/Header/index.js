import styles from "./Header.module.css";

function Header(){
    return(
        <header className={styles.header}>
            <span>ETECFLIX</span>
            <nav>
                <a href="#">HOME</a>
                <a href="#">ASSISTIR</a>
            </nav>
        </header>
    );
}

export default Header;