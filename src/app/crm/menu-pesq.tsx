import "./cabecalho.css";

export function Menu_Sistema(){
    return(
        <>
            <div className="funcoes_sistema">
                <button><img className="icone_menor" src="https://img.icons8.com/metro/26/add-user-male.png"/> Registrar lead</button>
                <button><img className="icone_menor" src="https://img.icons8.com/sf-black-filled/64/change-user-male.png"/> Converter lead</button>
            </div>

            <div className="funcoes_servico">
                <button>Suporte</button>
            </div>
        </>
    );
}