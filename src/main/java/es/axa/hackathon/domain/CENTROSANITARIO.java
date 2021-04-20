package es.axa.hackathon.domain;

import java.io.Serializable;
import javax.validation.constraints.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

/**
 * A CENTROSANITARIO.
 */
@Document(collection = "centrosanitario")
public class CENTROSANITARIO implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("id_centro")
    private Integer id_centro;

    @Field("direccion")
    private String direccion;

    @Field("persona_de_contacto")
    private String persona_de_contacto;

    @Field("email")
    private String email;

    @Field("codigo_postal")
    private String codigo_postal;

    @Field("especialidades")
    private String especialidades;

    @Field("coordenada_x")
    private Double coordenada_x;

    @Field("coordenada_y")
    private Double coordenada_y;

    @Field("id_pas_asociado")
    private Integer id_pas_asociado;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public CENTROSANITARIO id(String id) {
        this.id = id;
        return this;
    }

    public Integer getId_centro() {
        return this.id_centro;
    }

    public CENTROSANITARIO id_centro(Integer id_centro) {
        this.id_centro = id_centro;
        return this;
    }

    public void setId_centro(Integer id_centro) {
        this.id_centro = id_centro;
    }

    public String getDireccion() {
        return this.direccion;
    }

    public CENTROSANITARIO direccion(String direccion) {
        this.direccion = direccion;
        return this;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getPersona_de_contacto() {
        return this.persona_de_contacto;
    }

    public CENTROSANITARIO persona_de_contacto(String persona_de_contacto) {
        this.persona_de_contacto = persona_de_contacto;
        return this;
    }

    public void setPersona_de_contacto(String persona_de_contacto) {
        this.persona_de_contacto = persona_de_contacto;
    }

    public String getEmail() {
        return this.email;
    }

    public CENTROSANITARIO email(String email) {
        this.email = email;
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCodigo_postal() {
        return this.codigo_postal;
    }

    public CENTROSANITARIO codigo_postal(String codigo_postal) {
        this.codigo_postal = codigo_postal;
        return this;
    }

    public void setCodigo_postal(String codigo_postal) {
        this.codigo_postal = codigo_postal;
    }

    public String getEspecialidades() {
        return this.especialidades;
    }

    public CENTROSANITARIO especialidades(String especialidades) {
        this.especialidades = especialidades;
        return this;
    }

    public void setEspecialidades(String especialidades) {
        this.especialidades = especialidades;
    }

    public Double getCoordenada_x() {
        return this.coordenada_x;
    }

    public CENTROSANITARIO coordenada_x(Double coordenada_x) {
        this.coordenada_x = coordenada_x;
        return this;
    }

    public void setCoordenada_x(Double coordenada_x) {
        this.coordenada_x = coordenada_x;
    }

    public Double getCoordenada_y() {
        return this.coordenada_y;
    }

    public CENTROSANITARIO coordenada_y(Double coordenada_y) {
        this.coordenada_y = coordenada_y;
        return this;
    }

    public void setCoordenada_y(Double coordenada_y) {
        this.coordenada_y = coordenada_y;
    }

    public Integer getId_pas_asociado() {
        return this.id_pas_asociado;
    }

    public CENTROSANITARIO id_pas_asociado(Integer id_pas_asociado) {
        this.id_pas_asociado = id_pas_asociado;
        return this;
    }

    public void setId_pas_asociado(Integer id_pas_asociado) {
        this.id_pas_asociado = id_pas_asociado;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof CENTROSANITARIO)) {
            return false;
        }
        return id != null && id.equals(((CENTROSANITARIO) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "CENTROSANITARIO{" +
            "id=" + getId() +
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
