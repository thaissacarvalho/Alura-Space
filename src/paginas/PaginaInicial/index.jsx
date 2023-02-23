import banner from "./banner.png";
import style from "./PaginaInicial.module.scss";

import Cabecalho from "Components/Cabecalho";
import Menu from "Components/Menu";
import Rodape from "Components/Rodape";
import Galeria from "Components/Galeria";
import Populares from "Components/Populares";

export default function PaginaInicial() {
  return (
    <>
      <Cabecalho />
      <main>
        <section className={style.principal}>
          <Menu />
          <div className={style.principal__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="A imagem da terra vista do espaço" />
          </div>
        </section>
        <div className={style.galeria}>
          <Galeria />
          <Populares />
        </div>
      </main>
      <Rodape />
    </>
  );
}
