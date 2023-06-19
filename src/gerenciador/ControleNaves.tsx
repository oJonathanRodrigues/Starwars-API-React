import Filmes from "@/components/filmes/TabelaFilmes";
import Naves from "../components/naves/TabelaNaves";
import useStarwars from "@/data/hooks/getNaves";

export default function ControleNaves(){
    const {processando, naves, filmes, voltar,selecionarNave} = useStarwars()
  
    return(
        <div className="flex flex-col gap-5 justify-center items-center h-screen relative">

             {processando ? (
                <div>Processando......</div>
            ): filmes.length > 0 ?(
                <Filmes filmes={filmes} voltar={voltar}/>
            ): naves.length > 0 ?(
               <Naves naves={naves} selecionar={selecionarNave}/>
            ) : (
                <div>Dados não encontrados</div>
            )}
        </div>
    )
}