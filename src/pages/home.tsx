import Apresentacao from "@/components/pagina/apresentação";
import Cabecalho from "@/components/pagina/cabecalho";
import Background from "@/components/starwars/Background";
import Personagens from "@/components/personagens";
import ControlePersonagens from "@/components/gerenciador/ControlePersonagens";


export default function HomeScreen(){
    return(
      <div>
        <Background/>
        <Cabecalho/>
        <Apresentacao/>
        <Personagens/>
      </div>
    )
}