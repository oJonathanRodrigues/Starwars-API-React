import { useCallback, useEffect, useState } from "react"
import useProcessando from "./estadoProcessamento"

export default function useStarwars(){
    const {processando, iniciarProcessamento, finalizarProcessamento} = useProcessando()
    const [naves, setNaves] = useState<any[]>([])
    const [naveSelecionada, setNaveSelecionada] = useState<any>([])
    const [filmes, setFilmes] = useState<any>([])

    const obterFilmes = useCallback(async function (naveSelecionada: any){
        if(!naveSelecionada?.films?.length) return
        try{
            iniciarProcessamento()
            const reqs = naveSelecionada.films.map(async(film: string) => {
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
        obterFilmes(naveSelecionada)
    },[naveSelecionada, obterFilmes])

    const obterNaves = useCallback(async function (){
        try{
            iniciarProcessamento()
            const resp = await fetch('https://swapi.dev/api/starships/')
            const dados = await resp.json()
            setNaves(dados.results)
        } finally{
            finalizarProcessamento()
        }
    },[iniciarProcessamento, finalizarProcessamento])

    function selecionarNave(naveSelecionada: any){
        setNaveSelecionada(naveSelecionada)
       }
       
       useEffect(() => {
           obterNaves()
        }, [obterNaves])
        
        function voltar(){
            setNaveSelecionada(null)
            setFilmes([])
        }
    

    return{
        naves,
        processando,
        filmes,
        voltar,
        selecionarNave
    }
}