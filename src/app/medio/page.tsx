import { Cabecalho } from "../cabecalho";
import { BannerFormacao } from "../componentes/banner";
import { BotoesUteis } from "../componentes/botoes-uteis";
import { Menu } from "../menu";

export default function PaginaEnsinoMedio(){

    function CarregarPagina(){
        document.getElementById("curso")?.append("aaa")
    }


    const titulo = "Ensino Médio + Técnico";
    const mensagem = "O ensino concomitante do Bento Quirino forma para o mundo e o mercado de trabalho.";

    return(
        <main>
            <Cabecalho></Cabecalho>
            <Menu></Menu>
            
            <BannerFormacao>
                <h2>{titulo}</h2>
                <img src="" alt="" />
                <span>{mensagem}</span>
            </BannerFormacao>

            <BotoesUteis>
                <button>Administração</button>
                <button>Biotecnologia</button>
                <button>Edificações</button>
                <button>Enfermagem</button>
                <button>Farmácia</button>
                <button>Informática</button>
                <button>Games</button>
                <button>Mecatrônica</button>
                <button>Nutrição</button>
                <button>Publicidade</button>
                <button>Química</button>
                <button>Veterinária</button>
            </BotoesUteis>

            
        </main>
    );
}