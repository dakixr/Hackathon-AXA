export interface ICENTROSANITARIO {
  id?: string;
  id_centro?: number | null;
  direccion?: string | null;
  persona_de_contacto?: string | null;
  email?: string | null;
  codigo_postal?: string | null;
  especialidades?: string | null;
  coordenada_x?: number | null;
  coordenada_y?: number | null;
  id_pas_asociado?: number | null;
}

export const defaultValue: Readonly<ICENTROSANITARIO> = {};
