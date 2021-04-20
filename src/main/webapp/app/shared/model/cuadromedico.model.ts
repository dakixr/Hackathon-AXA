export interface ICUADROMEDICO {
  id?: string;
  id_cliente?: number | null;
  suscripcion?: string | null;
}

export const defaultValue: Readonly<ICUADROMEDICO> = {};
