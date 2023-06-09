import Filmes from "@/components/filmes/TabelaFilmes";
import Veiculos from "../components/veiculos/TabelaVeiculos";
import useStarwars from "@/data/hooks/getVeiculos";
import ImagemResponsiva from "@/components/pagina/comum/ImagemResponsiva";
import carregando from "../../public/foto-5.gif";

export default function ControleVeiculos(){
    const {processando, veiculos, filmes, voltar,selecionarVeiculo} = useStarwars()
  
    return(
        <div className="flex flex-col gap-5 justify-center items-center h-screen relative text-white">

             {processando ? (
              <div>
              <ImagemResponsiva imagem={carregando} className=""/>
              Processando......</div>
            ): filmes.length > 0 ?(
                <Filmes filmes={filmes} voltar={voltar}/>
            ): veiculos.length > 0 ?(
               <Veiculos veiculos={veiculos} selecionar={selecionarVeiculo}/>
            ) : (
                <div>Dados não encontrados</div>
            )}
        </div>
    )
}