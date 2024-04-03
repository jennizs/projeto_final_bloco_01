import readlinesync = require("readline-sync");




let opcao: number;



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

    
        if (opcao == 0) {
            console.log("\nStarCoffe agradece sua visita!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
              
                    "\n\nListar Todos os produtos\n\n"
                    keyPress()
                    
                break;
            
                case 2:
              
                    "\n\nListar Produtos por ID\n\n"
                    keyPress()
                   
                break;
           
                case 3:
              
                    "\n\nCadastrar Produto\n\n"
                    keyPress()

                break;
         
                case 4:
              
                    "\n\nAtualizar Produto\n\n"
                    keyPress()

                break;
            case 5:
              
                    "\n\nDeletar um produto\n\n"
                    keyPress()

                break;
          
                default:
              
                    "\nOpção Inválida!\n"

                keyPress()
                break;
        }

}

}
function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

function sobre(): void {
    console.log("*****************************************************");
    console.log("Projeto Desenvolvido por: Jennifer Fernandes ");
    console.log("Generation Brasil - jennyfrn6104@gmail.com");
    console.log("github.com/ jennizs");
    console.log("*****************************************************");
}

main();







