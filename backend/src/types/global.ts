export type TareaResult = {
    id: number;
    nombre: string;
    color: string;
    tarea_id: number;
    etiqueta_id: number;
    tarea: string;
    proyecto: string;

}

export type Tarea = {
    id: number;
    tarea: string;
    proyecto: string;

}

export type TareaDB = {
    tarea: string;
    proyecto: string;

}



export type TareaFinal = {
    id: number;
    tarea: string;
    proyecto: string;
    etiquetas: string[];
}

export type Etiqueta = {
    nombre: string;
}

export type idResult = {
    id: number;
}

export type EtiquetaResult = {
    etiquetaID: number;
}