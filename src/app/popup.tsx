import "./janelas.css"

export function Popup({children}){

    return(
        <div className="popup">
            <div className="janela-cabecalho">
                <h1>Aviso</h1>
                <button><img src="" /></button>
            </div>
            <span>
                {children}
            </span>
        </div>
    );
}