interface FilmesProps{
    filmes: any[]
    voltar: () => void
}

export default function filmes(props: FilmesProps){
    return(
     <div className="flex flex-col gap-5 items-center w=full w-screen text-white">
       <table className="w-3/5 text-xl rounded-lg overflow-hidden">
        <thead>
            <tr className="bg-zinc-900">
                <th className="p-2 font-black">Título</th>
                <th className="p-2 font-black">Episódio</th>
                <th className="p-2 font-black">Data</th>
             </tr>
        </thead>
        <tbody>
            {props.filmes.map((filme: any, indice: number) =>(
                <tr key={filme.title}
                className={`
                text-center
                ${indice % 2 === 0 ? 'bg-zinc-700':'bg-zinc-800'}
                `}>
                    <td className="p-2">{filme.title}</td>
                    <td className="p-2">{filme.episode_id}</td>
                    <td className="p-2">{new Date(filme.release_date).toLocaleDateString('pt-BR')}</td>
                </tr>
            ))}
        </tbody>
       </table>
       <button className="bg-yellow-400 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-600"
        onClick={props.voltar}
        >Voltar</button>
    </div>
    )
}