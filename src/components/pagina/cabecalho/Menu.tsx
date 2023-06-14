import MenuItem from './MenuItem'

export default function Menu() {

    return (
        <div className="flex gap-2 text-2xl">
            <MenuItem url="#apresentacao" className="hidden sm:flex">
                Apresentação
            </MenuItem>
            <MenuItem url="#personagens" className="hidden sm:flex">
                Personagens
            </MenuItem>
            <MenuItem url="#planetas" className="hidden sm:flex">
                Planetas
            </MenuItem>
            <MenuItem url="#veiculos" className="hidden sm:flex">
                Veículos
            </MenuItem>
            <MenuItem url="#naves" className="hidden sm:flex">
                Naves
            </MenuItem>
            
        </div>
    )
}
