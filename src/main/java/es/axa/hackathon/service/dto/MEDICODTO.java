package es.axa.hackathon.service.dto;

import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the {@link es.axa.hackathon.domain.MEDICO} entity.
 */
public class MEDICODTO implements Serializable {

    private String id;

    private String nombre;

    private String apellidos;

    private String numero_colegiado;

    private String telefono_contacto;

    private String especialidad;

    private String centro_sanitario;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getNumero_colegiado() {
        return numero_colegiado;
    }

    public void setNumero_colegiado(String numero_colegiado) {
        this.numero_colegiado = numero_colegiado;
    }

    public String getTelefono_contacto() {
        return telefono_contacto;
    }

    public void setTelefono_contacto(String telefono_contacto) {
        this.telefono_contacto = telefono_contacto;
    }

    public String getEspecialidad() {
        return especialidad;
    }

    public void setEspecialidad(String especialidad) {
        this.especialidad = especialidad;
    }

    public String getCentro_sanitario() {
        return centro_sanitario;
    }

    public void setCentro_sanitario(String centro_sanitario) {
        this.centro_sanitario = centro_sanitario;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof MEDICODTO)) {
            return false;
        }

        MEDICODTO mEDICODTO = (MEDICODTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, mEDICODTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "MEDICODTO{" +
            "id='" + getId() + "'" +
            ", nombre='" + getNombre() + "'" +
            ", apellidos='" + getApellidos() + "'" +
            ", numero_colegiado='" + getNumero_colegiado() + "'" +
            ", telefono_contacto='" + getTelefono_contacto() + "'" +
            ", especialidad='" + getEspecialidad() + "'" +
            ", centro_sanitario='" + getCentro_sanitario() + "'" +
            "}";
    }
}
