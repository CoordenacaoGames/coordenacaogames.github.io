import "./cabecalho.css";

export function Menu_Usuario(){

    const nomeUsuario = "Kaynan";

    return(
        <section>
            <div className="perfil_usuario">
                <img className="foto_usuario" src="" alt="" id="foto-usuário" />
                <h2 id="nome-usuario">{nomeUsuario}</h2>
            </div>

            <div className="funcoes_usuario">
                <button id="editar-usuario"><img className="icone" src="https://img.icons8.com/sf-black-filled/64/edit-user-male.png"/></button>
                <button id="atrib-usuario"><img  className="icone" src="https://img.icons8.com/sf-regular-filled/48/user-menu-male--v1.png"/></button>
                <button id="chamado-usuario"><img className="icone" src="https://img.icons8.com/sf-regular-filled/48/exit.png"/></button>
            </div>
        </section>
    );
}