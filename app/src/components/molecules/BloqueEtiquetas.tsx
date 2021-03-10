import { useState, useEffect } from 'react';
import EntradaForm from '../atoms/EntradaForm';
import ListaEtiquetas from './ListaEtiquetas';
interface Props {
    setTareaEtiquetas: (tarea: string[]) => void;
    renew: boolean;
    setRenew: (renew: boolean) => void;
}

const BloqueEtiquetas = (props: Props) => {
    const [listaEtiquetas, setListaEtiquetas] = useState<string[]>([]);
    const [showEtiquetaBoton, setShowEtiquetaBoton] = useState<boolean>(false);
    const [etiqueta, setEtiqueta] = useState<string>('');

    useEffect(() => {
        if(props.renew) { 
            setShowEtiquetaBoton(false);
            setListaEtiquetas([])
            props.setRenew(false);

        }

    }, [props])
    

    
    const addEtiquetaBoton = () => {
        setShowEtiquetaBoton(true);
    }

    const addNewEtiqueta = () => {
        if(etiqueta) {
            const newListaEtiquetas = [...listaEtiquetas, etiqueta];
            setListaEtiquetas(newListaEtiquetas);
            props.setTareaEtiquetas(newListaEtiquetas);
        }
        setEtiqueta('');
    }



    return (
        <div>
            <a href='#/' onClick={addEtiquetaBoton}>+ Añadir Etiqueta</a>
            { showEtiquetaBoton ? 
            <>
            <ListaEtiquetas etiquetas={listaEtiquetas} />
            <><EntradaForm setTareaInput={setEtiqueta} tareaInput={etiqueta}/></>
            <a href='#/' onClick={addNewEtiqueta}>[+]</a>
            </>
        : <></>}
        </div>
    )
}

export default BloqueEtiquetas
