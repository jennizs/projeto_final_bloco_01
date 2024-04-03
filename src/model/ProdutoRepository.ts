import { Produto } from "../../projeto_final_bloco_01/Produto";


export interface ProdutoRepository {

    listarTodosProdutos(): void;
    listarProdutoPorId (id: number): void;
    cadastrarProduto(Produto: Produto ): void;
    atualizarProduto(Produto: Produto): void;
    deletarProduto(id:number): void;
    
   
}