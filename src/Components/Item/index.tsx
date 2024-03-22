import { IFormularioProps } from "../../interface/IFormularioProps";
import styles from './Item.module.scss';


export const Item = ({ nome_produto, descricao_produto, valor_produto, disponivel }: IFormularioProps) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.container__titulo}>{nome_produto}</h1>
            <p className={styles.container__descricao}>{descricao_produto}</p>
            <p className={styles.container__valor}>R$ {valor_produto}</p>
            <p className={styles.container__disponivel}>{disponivel ? "Disponível" : "Indisponível"}</p>
        </div>
    )
}