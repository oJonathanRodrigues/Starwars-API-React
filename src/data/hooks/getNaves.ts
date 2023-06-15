import { useCallback, useEffect, useState } from "react"
import useProcessando from "./estadoProcessamento"

export default function useStarwars(){
    const {processando, iniciarProcessamento, finalizarProcessamento} = useProcessando()
    const [personagens, setPersonagens] = useState<any[]>([])
    const [personagem, setPersonagem] = useState<any>([])
    const [filmes, setFilmes] = useState<any>([])

    const obterFilmes = useCallback(async function (personagem: any){
        if(!personagem?.films?.length) return
        try{
            iniciarProcessamento()
            const reqs = personagem.films.map(async(film: string) => {
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
        obterFilmes(personagem)
    },[personagem, obterFilmes])

    const obterPersonagens = useCallback(async function (){
        try{
            iniciarProcessamento()
            const resp = await fetch('https://swapi.dev/api/starships/')
            const dados = await resp.json()
            setPersonagens(dados.results)
        } finally{
            finalizarProcessamento()
        }
    },[iniciarProcessamento, finalizarProcessamento])

    function selecionarPersonagem(personagem: any){
        setPersonagem(personagem)
       }
       
       useEffect(() => {
           obterPersonagens()
        }, [obterPersonagens])
        
        function voltar(){
            setPersonagem(null)
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