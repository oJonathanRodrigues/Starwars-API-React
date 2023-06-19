import Area from "../comum/Area";
import Slogan from "./Slogan";
import principal from "../../../../public/principal.jpg"
import ImagemResponsiva from "../comum/ImagemResponsiva";

export default function Apresentacao() {
    return (
        <Area id="apresentacao" className="pt-20">
            <div className={`
                flex items-center justify-around
                h-[400px]
            `}>
                <Slogan />
                <ImagemResponsiva
                    imagem={principal}
                    className="rotate-3 hidden md:inline"
                />
            </div>
        </Area>
    )
}