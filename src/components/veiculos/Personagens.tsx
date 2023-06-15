import React from "react"
import ImagemResponsiva from "../pagina/comum/ImagemResponsiva"

export interface VeiculosProps {
    imagem: any
    titulo: string
    subtitulo: string
    inverter?: boolean
}

export default function Veiculos(props: VeiculosProps) {
    return (
        <div className={`
            flex flex-col justify-around items-center w-full gap-6
            ${props.inverter ? 'sm:flex-row-reverse' : 'sm:flex-row'}
        `}>
            <ImagemResponsiva
                imagem={props.imagem}
                className={props.inverter ? 'sm:rotate-6' : 'sm:-rotate-6'}
            />
            <div className={`
                flex flex-col gap-y-6 sm:w-[350px]
                text-center sm:text-left
            `}>
                <div className={`
                    flex flex-col text-white
                    font-black text-2xl sm:text-4xl bg-yellow-400
                `}>{props.titulo}</div>
                <span className="font-light text-base sm:text-lg text-white-900  ">
                    {props.subtitulo}
                </span>                
            </div>
        </div>
    )
}
