import styles from './Text.module.css'

function Text(){
    return(
        <div className={styles.textContainer}>
            <p className={styles.textContent}>Este é um componente com um texto!</p>
        </div>
    )
}

export default Text