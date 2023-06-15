import Area from "../pagina/comum/Area";
import vantagem1 from "../../../public/foto-2.jpg";
import Vantagem from "./Planetas";
import ControlePersonagens from "../gerenciador/ControlePersonagens";

export default function Planetas() {
    return (
        <Area id="planetas" className="bg-black py-16 sm:py-36">
            <div className="flex flex-col items-center gap-y-16 sm:gap-y-36">
                <Vantagem
                    imagem={vantagem1}
                    titulo="Planetas"
                    subtitulo="Aqui você consegue obter os dados dos 10 principais personagens da saga"
                    inverter
                />
            </div>
            <ControlePersonagens/>
        </Area>
    )
}