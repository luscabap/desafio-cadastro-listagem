import styles from './PaginaListagem.module.scss';
import { IFormularioProps } from '../../interface/IFormularioProps';
import { useEffect, useState } from 'react';


export const PaginaListagem: React.FC = () => {
    const [produtosCadastrados, setProdutosCadastrados] = useState<IFormularioProps[]>([]);

    useEffect(() => {
        const produtosArmazenados = JSON.parse(localStorage.getItem("produtos") || "[]");
        setProdutosCadastrados(produtosArmazenados);
    }, [])

    return (
        <div className={styles.container}>
            <h2>Listagem</h2>
            <ul>
                {produtosCadastrados.map((produto, index) => (
                    <li key={index}>
                        <strong>{produto.nome_produto}</strong> - {produto.descricao_produto} - R$ {produto.valor_produto} - {produto.disponivel ? "Disponível" : "Indisponível"}
                    </li>
                ))}
            </ul>
        </div>
    )
}