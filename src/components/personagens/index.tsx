import Area from "../pagina/comum/Area";
import vantagem1 from "../../../public/foto-1.jpg";
import Vantagem from "./Personagens";
import ControlePersonagens from "../gerenciador/ControlePersonagens";

export default function Personagens() {
    return (
        <Area id="personagens" className="bg-black py-16 sm:py-36">
            <div className="flex flex-col items-center gap-y-16 sm:gap-y-36">
                <Vantagem
                    imagem={vantagem1}
                    titulo="Personagens"
                    subtitulo="Aqui você consegue obter os dados dos 10 principais personagens da saga e a informação da altura e peso"
                />
            </div>
            <ControlePersonagens/>
        </Area>
    )
}