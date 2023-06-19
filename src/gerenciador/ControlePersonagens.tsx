import Filmes from "@/components/filmes/TabelaFilmes";
import Personagens from "@/components/personagens/TabelaPersonagens";
import useStarwars from "@/data/hooks/getPersonagens";
import ImagemResponsiva from "@/components/pagina/comum/ImagemResponsiva";
import carregando from "../../public/foto-5.gif"

export default function ControlePersonagens(){
    const {processando, personagens, filmes, voltar,selecionarPersonagem} = useStarwars()
  
    return(
        <div className="flex flex-col gap-10 justify-center items-center h-screen relative text-white">

             {processando ? (
             <div>
                <ImagemResponsiva imagem={carregando} className=""/>
                Processando......</div>
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