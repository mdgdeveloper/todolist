export type Tarea = {
    id: number;
    tarea: string;
    proyecto: string;
    etiquetas: string[];
}

export type TareaDB = {
    tarea: string;
    proyecto: string;
    etiquetas: string[];
}