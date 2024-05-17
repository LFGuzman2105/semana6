export class Colores {
    private codigoHexadecimal: string;

    constructor(codigo: string) {
        this.codigoHexadecimal = codigo;
    }

    getCodigoHexadecimal(): string {
        return this.codigoHexadecimal;
    }
}