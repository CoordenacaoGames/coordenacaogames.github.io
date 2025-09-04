import Link from "next/link";

export function Cabecalho(){
    return(
        <header>
            <div className="acessos-restritos">
                <Link href="" className="botao-ghost">Líder Em Mim</Link>
                <Link href="" className="botao-ghost">Business</Link>
                <Link href="portao" className="botao-padrao">Área-Logada</Link>
            </div>
            <div>
                Logotipo aqui
            </div>
        </header>
    );
}