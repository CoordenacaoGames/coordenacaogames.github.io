import Image from "next/image";
import styles from "./page.module.css";
import { Menu } from "./menu-principal";
import { Cabecalho } from "./cabecalho";
import { Carrossel } from "./carrossel";
import { SecaoHomePositivo,SecaoHomeNegativo } from "./secoes";

export default function Home() {
  return (
     <main>
        <Menu></Menu>
        <Cabecalho></Cabecalho>
        <Carrossel></Carrossel>

        <SecaoHomePositivo>
          histórias na escola com fotos
        </SecaoHomePositivo>

        <SecaoHomeNegativo>
          disponibilidade de cursos
        </SecaoHomeNegativo>

        <SecaoHomePositivo>
          testemunhos e premios
        </SecaoHomePositivo>

        <>Rodapé</>

      </main>
  );
}
