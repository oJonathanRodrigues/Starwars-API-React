import Area from "../pagina/comum/Area";
import fotoPersonagem from "../../../public/foto-1.jpg";
import Vantagem from "./Personagens";
import ControlePersonagens from "../../gerenciador/ControlePersonagens";

export default function Personagens() {
    return (
        <Area id="personagens" className="bg-black py-16 sm:py-36">
            <div className="flex flex-col items-center gap-y-16 sm:gap-y-36">
                <Vantagem
                    imagem={fotoPersonagem}
                    titulo="Personagens"
                    subtitulo="A tabela a seguir mostra as informações dos personagens de Star Wars, obtidas a partir de uma API. 
                    Você pode ver alguns dados relevantes, como nome, altura e peso. Se quiser saber em quais filmes cada personagem apareceu, basta clicar no ícone ao lado do peso dele. 👾"
                />
            </div>
            <ControlePersonagens/>
        </Area>
    )
}