import Etiqueta from '../atoms/Etiqueta';

interface Props {
    etiquetas: string[];
}

const ListaEtiquetas = (props: Props) => {
    return (
        <div>
        {props.etiquetas.map( (etiqueta,index) => {
            return(
            <Etiqueta nombre={etiqueta} key={index}/>
            );
        }) }
        </div>
    )
}

export default ListaEtiquetas;