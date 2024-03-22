import styles from './PaginaListagem.module.scss';
import { IFormularioProps } from '../../interface/IFormularioProps';
import { useEffect, useState } from 'react';
import { Item } from '../../Components/Item';


export const PaginaListagem: React.FC = () => {
    const [produtosCadastrados, setProdutosCadastrados] = useState<IFormularioProps[]>([]);

    useEffect(() => {
        const produtosArmazenados = JSON.parse(localStorage.getItem("produtos") || "[]");
        setProdutosCadastrados(produtosArmazenados);
    }, [])

    return (
        <div className={styles.container}>
            <h2 className={styles.container__titulo}>Listagem</h2>
            <ul className={styles.container__lista}>
                {produtosCadastrados.map((produto, index) => (
                    <Item 
                        key={index} 
                        nome_produto={produto.nome_produto}
                        descricao_produto={produto.descricao_produto}
                        valor_produto={produto.valor_produto}
                        disponivel={produto.disponivel}
                    />
                ))}
            </ul>
        </div>
    )
}