import Filmes from "@/components/starwars/Filmes";
import Naves from "../starwars/Naves";
import useStarwars from "@/data/hooks/getNaves";

export default function ControleNaves(){
    const {processando, personagens, filmes, voltar,selecionarPersonagem} = useStarwars()
  
    return(
        <div className="flex flex-col gap-5 justify-center items-center h-screen relative">

             {processando ? (
                <div>Processando......</div>
            ): filmes.length > 0 ?(
                <Filmes filmes={filmes} voltar={voltar}/>
            ): personagens.length > 0 ?(
               <Naves personagens={personagens} selecionar={selecionarPersonagem}/>
            ) : (
                <div>Dados não encontrados</div>
            )}
        </div>
    )
}