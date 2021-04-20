export interface IPAS {
  id?: string;
  cif?: string | null;
  nombre?: string | null;
  codigo_postal?: string | null;
  email?: string | null;
  tipo_proveedor?: string | null;
  direccion?: string | null;
  persona_de_contacto?: string | null;
  poblacion?: string | null;
  provincia?: string | null;
}

export const defaultValue: Readonly<IPAS> = {};
