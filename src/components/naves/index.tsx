import Area from "../pagina/comum/Area";
import naves from "../../../public/foto-4.jpg";
import Vantagem from "./Naves";
import ControleNaves from "../../gerenciador/ControleNaves";

export default function Naves() {
    return (
        <Area id="naves" className="bg-black py-16 sm:py-36">
            <div className="flex flex-col items-center gap-y-16 sm:gap-y-36">
                <Vantagem
                    imagem={naves}
                    titulo="Naves"
                    subtitulo="Aqui você consegue obter os dados das 10 principais naves da saga 🚀"
                    inverter
                />
            </div>
            <ControleNaves/>
        </Area>
    )
}