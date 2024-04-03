import { Produto } from "./Produto";
export class Lanches extends Produto {

    private _MistoQuente: string

	constructor(id: number, nome: string, tipo: number, preco: number, MistoQuente: string) {
		super(id, nome, tipo, preco);
		this._MistoQuente = MistoQuente;
	}

	 /**
     * Getter MistoQuente
     * @return {string}
     */
	 public get MistoQuente(): string {
		return this._MistoQuente;
	}

	
    /**
     * Setter MistoQuente
     * @param {string} value
     */
	public set MistoQuente(value: string) {
		this._MistoQuente = value;
	}

	public visualizar(): void {
		super.visualizar();
		console.log(`MistoQuente: ${this._MistoQuente}`);

}

}

