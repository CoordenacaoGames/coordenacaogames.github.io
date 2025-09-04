import Image from "next/image";
import styles from "./page.module.css";
import { Menu } from "./menu";
import { Cabecalho } from "./cabecalho";
import { Carrossel } from "./carrossel";

export default function Home() {
  return (
    <>
     <main>
        <Menu></Menu>
        <Cabecalho></Cabecalho>
        <Carrossel></Carrossel>
      </main>
    </>
  );
}
