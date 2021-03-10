import Etiqueta from '../atoms/Etiqueta';

interface Props {
    etiquetas: string[];
}

const ListaEtiquetas = (props: Props) => {
    return (
        <div>
        {props.etiquetas.map( etiqueta => {
            return(
            <Etiqueta nombre={etiqueta} />
            );
        }) }
        </div>
    )
}

export default ListaEtiquetas;