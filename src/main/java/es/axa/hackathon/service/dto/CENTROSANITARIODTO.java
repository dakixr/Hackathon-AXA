package es.axa.hackathon.service.dto;

import java.io.Serializable;
import java.util.Objects;
import javax.validation.constraints.*;

/**
 * A DTO for the {@link es.axa.hackathon.domain.CENTROSANITARIO} entity.
 */
public class CENTROSANITARIODTO implements Serializable {

    private String id;

    private Integer id_centro;

    private String direccion;

    private String persona_de_contacto;

    private String email;

    private String codigo_postal;

    private String especialidades;

    private Double coordenada_x;

    private Double coordenada_y;

    private Integer id_pas_asociado;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getId_centro() {
        return id_centro;
    }

    public void setId_centro(Integer id_centro) {
        this.id_centro = id_centro;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCodigo_postal() {
        return codigo_postal;
    }

    public void setCodigo_postal(String codigo_postal) {
        this.codigo_postal = codigo_postal;
    }

    public String getEspecialidades() {
        return especialidades;
    }

    public void setEspecialidades(String especialidades) {
        this.especialidades = especialidades;
    }

    public Double getCoordenada_x() {
        return coordenada_x;
    }

    public void setCoordenada_x(Double coordenada_x) {
        this.coordenada_x = coordenada_x;
    }

    public Double getCoordenada_y() {
        return coordenada_y;
    }

    public void setCoordenada_y(Double coordenada_y) {
        this.coordenada_y = coordenada_y;
    }

    public Integer getId_pas_asociado() {
        return id_pas_asociado;
    }

    public void setId_pas_asociado(Integer id_pas_asociado) {
        this.id_pas_asociado = id_pas_asociado;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof CENTROSANITARIODTO)) {
            return false;
        }

        CENTROSANITARIODTO cENTROSANITARIODTO = (CENTROSANITARIODTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, cENTROSANITARIODTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "CENTROSANITARIODTO{" +
            "id='" + getId() + "'" +
            ", id_centro=" + getId_centro() +
            ", direccion='" + getDireccion() + "'" +
            ", persona_de_contacto='" + getPersona_de_contacto() + "'" +
            ", email='" + getEmail() + "'" +
            ", codigo_postal='" + getCodigo_postal() + "'" +
            ", especialidades='" + getEspecialidades() + "'" +
            ", coordenada_x=" + getCoordenada_x() +
            ", coordenada_y=" + getCoordenada_y() +
            ", id_pas_asociado=" + getId_pas_asociado() +
            "}";
    }
}
