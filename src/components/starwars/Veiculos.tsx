import { IconCheck } from '@tabler/icons-react'

interface PlanetasProps{
    personagens: any[]
    selecionar: (personagem: any) => void
}

export default function Veiculos(props: PlanetasProps){
    return(
       <table className="w-3/5 text-xl rounded-lg overflow-hidden ">
        <thead>
            <tr className="bg-zinc-900">
                <th className="p-2 font-black text-white">Nome</th>
                <th className="p-2 font-black text-white">Modelo</th>
                <th className="p-2 font-black text-white">Capacidade de carga</th>
                <th className="p-2 font-black text-white">Filmes</th>
            </tr>
        </thead>
        <tbody>
            {props.personagens.map((p: any, indice: number) =>(
                <tr key={p.name}
                className={`
                text-center
                ${indice % 2 === 0 ? 'bg-zinc-700 text-white':'bg-zinc-800 text-white'}
                `}>
                    <td className="p-2">{p.name}</td>
                    <td className="p-2">{p.model}</td>
                    <td className="p-2">{p.cargo_capacity}</td>
                    <td className="p-2">
                        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-900"
                        onClick={() => props.selecionar(p)}
                        >
                            <IconCheck size={20}/>
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
       </table>
    )
}