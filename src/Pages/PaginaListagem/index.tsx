import { useLocation } from 'react-router-dom';
import styles from './PaginaListagem.module.scss';
import { IFormularioProps } from '../../interface/IFormularioProps';


export const PaginaListagem: React.FC = () => {
    const location = useLocation();

    const produto: IFormularioProps = location.state?.produto;

    return (
        <div className={styles.container}>
            <h2>Listagem</h2>
            {produto && (
                <div>
                    <h3>Informações do Produto</h3>
                    <p>Nome: {produto.nome_produto}</p>
                    <p>Descrição: {produto.descricao_produto}</p>
                    <p>Valor: R$ {produto.valor_produto}</p>
                    <p>Disponível: {produto.disponivel ? 'Sim' : 'Não'}</p>
                </div>
            )}
        </div>
    )
}