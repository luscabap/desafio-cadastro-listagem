import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

interface IPropsHeader {
    titulo: string
}

export const Header =  ({ titulo }: IPropsHeader) => {

    return (
        <header className={styles.container}>
            <h1 className={styles.container__titulo}>{titulo}</h1>
            <ul className={styles.container__lista}>
            <Link 
                to="/cadastrar"
                className={styles.container__lista__item}
            >
                Cadastrar Produtos
            </Link>

            <Link 
                to="/listar"
                className={styles.container__lista__item}
            >
                Listar Produtos
            </Link>
            </ul>
        </header>
    )
}