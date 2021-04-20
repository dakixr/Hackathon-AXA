export interface IMEDICO {
  id?: string;
  id_medico?: number | null;
  nombre?: string | null;
  apellidos?: string | null;
  numero_colegiado?: string | null;
  telefono_contacto?: string | null;
  especialidad?: string | null;
  centro_sanitario?: string | null;
}

export const defaultValue: Readonly<IMEDICO> = {};
