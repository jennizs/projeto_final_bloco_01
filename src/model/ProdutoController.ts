import { Produto } from "../../projeto_final_bloco_01/Produto";
import { ProdutoRepository } from "./ProdutoRepository";

export class ProdutoController implements ProdutoRepository {
    static listarTodosProdutos: any;
    static listarProdutoPorId: any;
    listarProdutoPorId(id: number): void {
        throw new Error("Method not implemented.");
    }
    
    private Produtos: Array<Produto> = new Array<Produto>();
    private id: number = 0;

    listarPorId(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto !== null)
            buscaProduto.visualizar();
        else
            console.log("\nProduto não encontrado!");
    }

    atualizarProduto(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id);

        if (buscaProduto !== null) {
            this.Produtos[this.Produtos.indexOf(buscaProduto)] = produto;
            console.log(`O produto com ID ${produto.id} foi atualizado com sucesso!`);
        } else {
            console.log("\nProduto não encontrado!");
        }
    }

    listarTodosProdutos(): void {
        for (let produto of this.Produtos)
            produto.visualizar();
    }

    cadastrarProduto(produto: Produto): void {
        produto.id = this.gerarId();
        this.Produtos.push(produto);
        console.log("O produto foi adicionado!");
    }

    deletarProduto(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto !== null) {
            this.Produtos.splice(this.Produtos.indexOf(buscaProduto), 1);
            console.log(`O produto com ID ${id} foi excluído com sucesso!`);
        } else {
            console.log("\nProduto não encontrado!");
        }
    }

    // Métodos auxiliares
    public gerarId(): number {
        return ++this.id;
    }

    public buscarNoArray(id: number): Produto | null {
        for (let produto of this.Produtos) {
            if (produto.id === id) {
                return produto;
            }
        }
        return null;
    }
}

