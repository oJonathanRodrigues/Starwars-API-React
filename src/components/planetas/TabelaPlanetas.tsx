import { IconEyeglass2 } from '@tabler/icons-react'

interface PlanetasProps{
    planetas: any[]
    selecionar: (item: any) => void
}

export default function Planetas(props: PlanetasProps){
    return(
       <table className="w-3/5 text-xl rounded-lg overflow-hidden ">
        <thead>
            <tr className="bg-zinc-900">
                <th className="p-2 font-black text-white">Nome</th>
                <th className="p-2 font-black text-white">Diâmetro (km)</th>
                <th className="p-2 font-black text-white">Filmes</th>
            </tr>
        </thead>
        <tbody>
            {props.planetas.map((p: any, indice: number) =>(
                <tr key={p.name}
                className={`
                text-center
                ${indice % 2 === 0 ? 'bg-zinc-700 text-white':'bg-zinc-800 text-white'}
                `}>
                    <td className="p-2">{p.name}</td>
                    <td className="p-2">{p.diameter}</td>
                    <td className="p-2">
                        <button className="bg-yellow-400 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-600"
                        onClick={() => props.selecionar(p)}
                        >
                            <IconEyeglass2 size={20}/>
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
       </table>
    )
}