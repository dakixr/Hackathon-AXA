export interface ICENTROSANITARIO {
  id?: string;
  direccion?: string | null;
  persona_de_contacto?: string | null;
  email?: string | null;
  codigo_postal?: string | null;
  especialidades?: string | null;
  coordenada_x?: number | null;
  coordenada_y?: number | null;
  nombre_pas_asociado?: string | null;
  nombre_centro?: string | null;
}

export const defaultValue: Readonly<ICENTROSANITARIO> = {};
