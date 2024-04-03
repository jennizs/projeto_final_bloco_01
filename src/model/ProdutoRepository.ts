import { Produto } from "../../projeto_final_bloco_01/Produto";

export interface ProdutoRepository {

    ListarPorId (id: number): void;
    listarTodas(): void;
    cadastrar(Produto: Produto ): void;
    atualizar(Produto: Produto): void;
    deletar(id:number): void;
    
   
}