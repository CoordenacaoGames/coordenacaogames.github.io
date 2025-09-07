import Link from "next/link";

export default function Login(){

    let login, senha

    return(
        <>
        <section>
            logotipo
        </section>

        <section>
            <form action="">
                <input type="text" name={login} />
                <input type="text" name={senha} />

                <Link href="./crm">Entrar</Link>
            </form>
        </section>
        </>
    );
}