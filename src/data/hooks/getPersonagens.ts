import { useCallback, useEffect, useState } from "react"
import useProcessando from "./estadoProcessamento"

export default function useStarwars(){
    const {processando, iniciarProcessamento, finalizarProcessamento} = useProcessando()
    const [personagens, setPersonagens] = useState<any[]>([])
    const [personagemSelecionado, setPersonagemSelecionado] = useState<any>([])
    const [filmes, setFilmes] = useState<any>([])

    const obterFilmes = useCallback(async function (personagemSelecionado: any){
        if(!personagemSelecionado?.films?.length) return
        try{
            iniciarProcessamento()
            const reqs = personagemSelecionado.films.map(async(film: string) => {
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
        obterFilmes(personagemSelecionado)
    },[personagemSelecionado, obterFilmes])

    const obterPersonagens = useCallback(async function (){
        try{
            iniciarProcessamento()
            const resp = await fetch('https://swapi.dev/api/people/')
            const dados = await resp.json()
            setPersonagens(dados.results)
        } finally{
            finalizarProcessamento()
        }
    },[iniciarProcessamento, finalizarProcessamento])

    function selecionarPersonagem(personagemSelecionado: any){
        setPersonagemSelecionado(personagemSelecionado)
       }
       
       useEffect(() => {
           obterPersonagens()
        }, [obterPersonagens])
        
        function voltar(){
            setPersonagemSelecionado(null)
            setFilmes([])
        }
    

    return{
        personagens,
        processando,
        filmes,
        voltar,
        selecionarPersonagem
    }
}