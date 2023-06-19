import { useCallback, useEffect, useState } from "react"
import useProcessando from "./estadoProcessamento"

export default function useStarwars(){
    const {processando, iniciarProcessamento, finalizarProcessamento} = useProcessando()
    const [planetas, setPlanetas] = useState<any[]>([])
    const [planetaSelecionado, setPlanetaSelecionado] = useState<any>([])
    const [filmes, setFilmes] = useState<any>([])

    const obterFilmes = useCallback(async function (planetaSelecionado: any){
        if(!planetaSelecionado?.films?.length) return
        try{
            iniciarProcessamento()
            const reqs = planetaSelecionado.films.map(async(film: string) => {
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
        obterFilmes(planetaSelecionado)
    },[planetaSelecionado, obterFilmes])

    const obterPlanetas = useCallback(async function (){
        try{
            iniciarProcessamento()
            const resp = await fetch('https://swapi.dev/api/planets/')
            const dados = await resp.json()
            setPlanetas(dados.results)
        } finally{
            finalizarProcessamento()
        }
    },[iniciarProcessamento, finalizarProcessamento])

    function selecionarPlaneta(planetaSelecionado: any){
        setPlanetaSelecionado(planetaSelecionado)
       }
       
       useEffect(() => {
           obterPlanetas()
        }, [obterPlanetas])
        
        function voltar(){
            setPlanetaSelecionado(null)
            setFilmes([])
        }
    

    return{
        planetas,
        processando,
        filmes,
        voltar,
        selecionarPlaneta
    }
}