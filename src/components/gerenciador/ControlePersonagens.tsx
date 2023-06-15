import Filmes from "@/components/starwars/Filmes";
import Personagens from "@/components/starwars/Personagens";
import useStarwars from "@/data/hooks/getPersonagens";

export default function ControlePersonagens(){
    const {processando, personagens, filmes, voltar,selecionarPersonagem} = useStarwars()
  
    return(
        <div className="flex flex-col gap-5 justify-center items-center h-screen relative">

             {processando ? (
                <div>Processando......</div>
            ): filmes.length > 0 ?(
                <Filmes filmes={filmes} voltar={voltar}/>
            ): personagens.length > 0 ?(
               <Personagens personagens={personagens} selecionar={selecionarPersonagem}/>
            ) : (
                <div>Dados não encontrados</div>
            )}
        </div>
    )
}