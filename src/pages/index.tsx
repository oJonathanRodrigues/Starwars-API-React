import Apresentacao from "@/components/pagina/apresentação";
import Cabecalho from "@/components/pagina/cabecalho";
import Background from "@/components/starwars/Background";
import Personagens from "@/components/personagens";
import Planetas from "@/components/planetas";
import Veiculos from "@/components/veiculos";
import Naves from "@/components/naves";


export default function HomeScreen(){
    return(
      <div>
        <Background/>
        <Cabecalho/>
        <Apresentacao/>
        <Personagens/>
        <Planetas/>
        <Veiculos/>
        <Naves/>
      </div>
    )
}