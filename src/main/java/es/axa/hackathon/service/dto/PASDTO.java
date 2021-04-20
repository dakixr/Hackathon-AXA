package es.axa.hackathon.service.dto;

import java.io.Serializable;
import java.util.Objects;
import javax.validation.constraints.*;

/**
 * A DTO for the {@link es.axa.hackathon.domain.PAS} entity.
 */
public class PASDTO implements Serializable {

    private String id;

    @Pattern(regexp = "[A-Z]-\\d{8}")
    private String cif;

    private String nombre;

    private String codigo_postal;

    private String email;

    private String tipo_proveedor;

    private String direccion;

    private String persona_de_contacto;

    private String poblacion;

    private String provincia;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCif() {
        return cif;
    }

    public void setCif(String cif) {
        this.cif = cif;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCodigo_postal() {
        return codigo_postal;
    }

    public void setCodigo_postal(String codigo_postal) {
        this.codigo_postal = codigo_postal;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTipo_proveedor() {
        return tipo_proveedor;
    }

    public void setTipo_proveedor(String tipo_proveedor) {
        this.tipo_proveedor = tipo_proveedor;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getPersona_de_contacto() {
        return persona_de_contacto;
    }

    public void setPersona_de_contacto(String persona_de_contacto) {
        this.persona_de_contacto = persona_de_contacto;
    }

    public String getPoblacion() {
        return poblacion;
    }

    public void setPoblacion(String poblacion) {
        this.poblacion = poblacion;
    }

    public String getProvincia() {
        return provincia;
    }

    public void setProvincia(String provincia) {
        this.provincia = provincia;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof PASDTO)) {
            return false;
        }

        PASDTO pASDTO = (PASDTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, pASDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "PASDTO{" +
            "id='" + getId() + "'" +
            ", cif='" + getCif() + "'" +
            ", nombre='" + getNombre() + "'" +
            ", codigo_postal='" + getCodigo_postal() + "'" +
            ", email='" + getEmail() + "'" +
            ", tipo_proveedor='" + getTipo_proveedor() + "'" +
            ", direccion='" + getDireccion() + "'" +
            ", persona_de_contacto='" + getPersona_de_contacto() + "'" +
            ", poblacion='" + getPoblacion() + "'" +
            ", provincia='" + getProvincia() + "'" +
            "}";
    }
}
