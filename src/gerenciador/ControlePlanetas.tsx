import Filmes from "@/components/filmes/TabelaFilmes";
import Planetas from "../components/planetas/TabelaPlanetas";
import useStarwars from "@/data/hooks/getPlanetas";
import ImagemResponsiva from "@/components/pagina/comum/ImagemResponsiva";
import carregando from "../../public/foto-5.gif";

export default function ControlePlanetas(){
    const {processando, planetas, filmes, voltar,selecionarPlaneta} = useStarwars()
  
    return(
        <div className="flex flex-col gap-5 justify-center items-center h-screen relative text-white">

             {processando ? (
             <div>
             <ImagemResponsiva imagem={carregando} className=""/>
             Processando......</div>
            ): filmes.length > 0 ?(
                <Filmes filmes={filmes} voltar={voltar}/>
            ): planetas.length > 0 ?(
               <Planetas planetas={planetas} selecionar={selecionarPlaneta}/>
            ) : (
                <div>Dados não encontrados</div>
            )}
        </div>
    )
}