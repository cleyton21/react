import styles from "./Frase.module.css"

function Frase() {
    return (
        <div className={styles.fraseContainer}>
            <h1 className={styles.fraseContent}>Meu primeiro componente</h1>
        </div>
    );
}

export default Frase