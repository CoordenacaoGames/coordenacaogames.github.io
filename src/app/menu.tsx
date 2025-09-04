import Link from "next/link";

export function Menu(){
    return(
        <nav>
            <Link href='/' className="item-de-menu">INÍCIO</Link>
            <Link href='/ensino-fundamental' className="item-de-menu">ENSINO FUNDAMENTAL</Link>
            <Link href='/medio' className="item-de-menu">ENSINO MÉDIO</Link>
            <Link href='/ensino-tecnico' className="item-de-menu">ENSINO TÉCNICO</Link>
            <Link href='/inst' className="item-de-menu">INSTITUCIONAL</Link>
        </nav>
    );
}