import { useState } from "react";
import styles from './Formulario.module.scss';
import { IFormularioProps } from "../../../interface/IFormularioProps";

export const Formulario: React.FC = () => {

    const [nomeProduto, setNomeProduto] = useState<string>("");
    const [descricaoProduto, setDescricaoProduto] = useState<string>("");
    const [valorProduto, setValorProduto] = useState<number>(0);
    const [disponivel, setDisponivel] = useState<boolean>(false);

    const cadastrarProduto = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const novoProduto: IFormularioProps = {
            nome_produto: nomeProduto,
            descricao_produto: descricaoProduto,
            valor_produto: valorProduto,
            disponivel: disponivel,
        };

        const produtosCadastrados = JSON.parse(localStorage.getItem("produtos") || "[]");

        const novaListaProdutos = [...produtosCadastrados, novoProduto];

        localStorage.setItem("produtos", JSON.stringify(novaListaProdutos));

        if (nomeProduto.length >= 3 && descricaoProduto.length >= 8 && valorProduto > 0){
            alert("Produto adicionado com sucesso");
            setNomeProduto("");
            setDescricaoProduto("");
            setValorProduto(0);
            setDisponivel(false);
        } else {
            alert("Falha ao cadastrar o produto. Por favor, revise as informações preenchidas")
        }
    }

    return (
        <form className={styles.container} onSubmit={cadastrarProduto}>
            <div className={styles.container__opcao}>
                <label htmlFor="input_nomeProduto">Qual o nome do produto?</label>
                <input 
                    type="text" 
                    id="input_nomeProduto"
                    value={nomeProduto}
                    onChange={e => setNomeProduto(e.target.value)}
                />
            </div>
            <div className={styles.container__opcao}>
                <label htmlFor="input_descricaoProduto">Qual a descricao do produto?</label>
                <input 
                    type="text" 
                    id="input_descricaoProduto"
                    value={descricaoProduto}
                    onChange={e => setDescricaoProduto(e.target.value)}
                />
            </div>
            <div className={styles.container__opcao}>
                <label htmlFor="input_valorProduto">Qual o valor do produto?</label>
                <input 
                    type="number" 
                    id="input_valorProduto"
                    value={valorProduto}
                    onChange={e => setValorProduto(parseFloat(e.target.value))}
                />
            </div>
            <div className={styles.container__disponivel}>
                <label htmlFor="input_descricaoProduto">O produto já está disponível?</label>
                <div>
                    <label className={styles.container__disponivel__sim}>
                        <input
                            type="checkbox"
                            checked={disponivel}
                            onChange={e => setDisponivel(e.target.checked)}
                        />
                    Disponível
                    </label>
                </div>
            </div>
            <button type="submit">Cadastrar Produto</button>
        </form>
    )
}