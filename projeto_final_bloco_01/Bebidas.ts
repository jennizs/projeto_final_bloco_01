import { Produto } from "./Produto";
export class Bebidas extends Produto {

    private _Cafe: string

	constructor(id: number, nome: string, tipo: number, preco: number, Cafe: string) {
		super(id, nome, tipo, preco);
		this._Cafe = Cafe;
	}

	 /**
     * Getter Cafe
     * @return {string}
     */
	 public get Cafe(): string {
		return this._Cafe;
	}

	
    /**
     * Setter Cafe
     * @param {string} value
     */
	public set Cafe(value: string) {
		this._Cafe = value;
	}

	public visualizar(): void {
		super.visualizar();
		console.log(`Cafe: ${this._Cafe}`);

}

}


