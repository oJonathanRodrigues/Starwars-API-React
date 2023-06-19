import { useCallback, useEffect, useState } from "react"
import useProcessando from "./estadoProcessamento"

export default function useStarwars(){
    const {processando, iniciarProcessamento, finalizarProcessamento} = useProcessando()
    const [veiculos, setVeiculos] = useState<any[]>([])
    const [veiculoSelcionado, setVeiculoSelecionado] = useState<any>([])
    const [filmes, setFilmes] = useState<any>([])

    const obterFilmes = useCallback(async function (veiculoSelcionado: any){
        if(!veiculoSelcionado?.films?.length) return
        try{
            iniciarProcessamento()
            const reqs = veiculoSelcionado.films.map(async(film: string) => {
                const resp = await fetch(film)
                return resp.json()
            })
            const filmes = await Promise.all(reqs)
            setFilmes(filmes)
               } finally{
            finalizarProcessamento()
        }
      
    },[iniciarProcessamento, finalizarProcessamento])

    useEffect(() =>{
        obterFilmes(veiculoSelcionado)
    },[veiculoSelcionado, obterFilmes])

    const obterVeiculos = useCallback(async function (){
        try{
            iniciarProcessamento()
            const resp = await fetch('https://swapi.dev/api/vehicles/')
            const dados = await resp.json()
            setVeiculos(dados.results)
        } finally{
            finalizarProcessamento()
        }
    },[iniciarProcessamento, finalizarProcessamento])

    function selecionarVeiculo(veiculoSelcionado: any){
        setVeiculoSelecionado(veiculoSelcionado)
       }
       
       useEffect(() => {
           obterVeiculos()
        }, [obterVeiculos])
        
        function voltar(){
            setVeiculoSelecionado(null)
            setFilmes([])
        }
    

    return{
        veiculos,
        processando,
        filmes,
        voltar,
        selecionarVeiculo
    }
}