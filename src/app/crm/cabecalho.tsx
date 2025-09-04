import { Menu_Sistema } from "./menu-pesq";
import { Menu_Usuario } from "./menu-usuario";
import "./cabecalho.css";

export function Cabecalho(){
    return(
        <div className="cabecalho">
            <Menu_Usuario />
            <hr />
            <Menu_Sistema />
        </div>
    );
}