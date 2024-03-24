import { Formulario } from '../../Components/Formulario';
import styles from './PaginaCadastro.module.scss';

export const PaginaCadastro = () => {
    return (
        <div className={styles.container}>
            <h2>Cadastrar Produtos</h2>
            <Formulario />
        </div>
    )
}