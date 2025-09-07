import Link from "next/link";
import Image from "next/image";

export function Cabecalho(){
    return(
        <header>
            <div className="acessos-restritos">
                <Link href="" className="botao-ghost">Business</Link>
                <Link href="portao" className="botao-padrao">Área-Logada</Link>
            </div>

            <div>
                <img src="public/Logo-Bento-Quirino-Azul.png" alt="" />
            </div>

        </header>
    );
}