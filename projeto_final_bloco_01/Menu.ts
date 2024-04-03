import readlinesync = require("readline-sync");
import { ProdutoController } from "../src/model/ProdutoController";
import { Lanches } from "./Lanches";
import { Bebidas } from "./Bebidas";

let opcao: number;
let nome: string;
let tipo: number;
let preco: number;
let id: number;
const tipoProduto = ['Bebidas', 'Lanches'];

const produtoController: ProdutoController = new ProdutoController();

produtoController.cadastrarProduto(new Lanches(produtoController.gerarId(), "Misto Quente", 1,23, "Lanches" ));
produtoController.cadastrarProduto(new Bebidas(produtoController.gerarId(), "Cafe", 2, 18.00, "Suco"));

export function main() {
    while (true) {
        console.log("***********************************************");
        console.log("                                               ");
        console.log("       Bem Vinde a StarCoffe                   ");
        console.log("                                               ");
        console.log("************xx****************xx***************");
        console.log("***********************************************");
        console.log("*******tecle o numero que deseja acessar****** ");
        console.log("                                               ");
        console.log("          1-) Listar todas os Produtos         ");
        console.log("          2-) Listar Produto por ID            ");
        console.log("          3-) Cadastrar Produto                ");
        console.log("          4-) Atualizar Produto                ");
        console.log("          5-) Deletar                          ");
        console.log("          0-) Sair                             ");
        console.log("***********************************************");
        console.log("                                               ");

        console.log("Entre com a opcao desejada: ");
        opcao = readlinesync.questionInt(" ");

        if (opcao === 0) {
            console.log("\nStarCoffe agradece sua visita!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nListar Todos os produtos\n\n");
                produtoController.listarTodosProdutos();
                keyPress();
                break;

            case 2:
                console.log("\n\nListar Produtos por ID\n\n");
                
                id = readlinesync.questionInt("Digite o Id do Produto: ");
                produtoController.listarPorId(id);
                keyPress();
                break;

            case 3:
                console.log("\n\nCadastrar Produto\n\n");
                nome = readlinesync.question("Digite o Nome do Produto: ");
                tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;
                preco = readlinesync.questionFloat("Digite o preco: ");
    
                switch (tipo) {
                    case 1:
                        const mistoQuente = readlinesync.question("Digite a bebida que deseja cadastrar: ");
                        produtoController.cadastrarProduto(new Bebidas(produtoController.gerarId(), nome, tipo, preco, mistoQuente));
                        break;

                    case 2:
                        const cafe = readlinesync.question("Digite o Lanche que deseja cadastrar: ");
                        produtoController.cadastrarProduto(new Lanches(produtoController.gerarId(), nome, tipo, preco, cafe));
                        break;
                }

                keyPress();
                break;

            case 4:
                console.log("\n\nAtualizar Produto\n\n");
                id = readlinesync.questionInt("Digite o Id do Produto: ");
                    
                let produto = produtoController.buscarNoArray(id);

                if (produto !== null){

                    nome = readlinesync.question("Digite o Nome do Produto: ");

                    tipo = readlinesync.keyInSelect(tipoProduto, "", {cancel:false}) +1;
    
                    preco = readlinesync.questionFloat("Digite o preco: ");
    
                    switch (tipo) {
                        case 1:
                            const mistoQuente = readlinesync.question("Digite o Nome do Lanche: ");
                            produtoController.atualizarProduto(new Lanches(id,
                                nome, tipo, preco, mistoQuente));
                            break;
                        case 2:
                            const cafe = readlinesync.question("Digite a Bebida desejada: ");
                            produtoController.atualizarProduto(new Bebidas(id,
                                nome, tipo, preco, cafe));
                            break;
                    }

                }else
                    console.log("Produto não Encontrado!")
                keyPress();
                break;

            case 5:
                console.log("\n\nDeletar um produto\n\n");
                id = readlinesync.questionInt("Digite o Id do Produto: ");
                produtoController.deletarProduto(id);
                keyPress();
                break;

            default:
                console.log("\nOpção Inválida!\n");
                keyPress();
                break;
     
     
            }

            function sobre(): void {
                console.log("*****************************************************");
                console.log("Projeto Desenvolvido por: Jennifer Fernandes ");
                console.log("Generation Brasil - jennyfrn6104@gmail.com");
                console.log("github.com/ jennizs");
                console.log("*****************************************************");
            }

            function keyPress(): void {
                console.log("\nPressione enter para continuar...");
                readlinesync.prompt();
    }
}
}

main();
