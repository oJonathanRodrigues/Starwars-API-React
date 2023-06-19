import Area from "../pagina/comum/Area";
import fotoVeiculos from "../../../public/foto-3.jpg";
import Vantagem from "./Veiculos";
import ControleVeiculos from "../../gerenciador/ControleVeiculos";

export default function Veiculos() {
    return (
        <Area id="veiculos" className="bg-black py-16 sm:py-36">
            <div className="flex flex-col items-center gap-y-16 sm:gap-y-36">
                <Vantagem
                    imagem={fotoVeiculos}
                    titulo="Veículos"
                    subtitulo="Aqui você consegue obter os dados dos 10 principais veículos da saga 🛸"
                />
            </div>
            <ControleVeiculos/>
        </Area>
    )
}