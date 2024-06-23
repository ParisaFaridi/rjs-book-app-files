import styles from "./Layout.module.css";

function Layout({children}) {
  return (
    <div>
        <header className={styles.header}>
        
            <h1>BookApp</h1>
            <p>
              <a>BotoStart </a>| reactJs
            </p> 
        </header>
        {children}
        <footer className={styles.footer}>Developed with ❤</footer>
    </div>
  )
}

export default Layout