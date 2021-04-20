package es.axa.hackathon.domain;

import java.io.Serializable;
import javax.validation.constraints.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

/**
 * A PAS.
 */
@Document(collection = "pas")
public class PAS implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Pattern(regexp = "[A-Z]-\\d{8}")
    @Field("cif")
    private String cif;

    @Field("nombre")
    private String nombre;

    @Field("codigo_postal")
    private String codigo_postal;

    @Field("email")
    private String email;

    @Field("tipo_proveedor")
    private String tipo_proveedor;

    @Field("direccion")
    private String direccion;

    @Field("persona_de_contacto")
    private String persona_de_contacto;

    @Field("poblacion")
    private String poblacion;

    @Field("provincia")
    private String provincia;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public PAS id(String id) {
        this.id = id;
        return this;
    }

    public String getCif() {
        return this.cif;
    }

    public PAS cif(String cif) {
        this.cif = cif;
        return this;
    }

    public void setCif(String cif) {
        this.cif = cif;
    }

    public String getNombre() {
        return this.nombre;
    }

    public PAS nombre(String nombre) {
        this.nombre = nombre;
        return this;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCodigo_postal() {
        return this.codigo_postal;
    }

    public PAS codigo_postal(String codigo_postal) {
        this.codigo_postal = codigo_postal;
        return this;
    }

    public void setCodigo_postal(String codigo_postal) {
        this.codigo_postal = codigo_postal;
    }

    public String getEmail() {
        return this.email;
    }

    public PAS email(String email) {
        this.email = email;
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTipo_proveedor() {
        return this.tipo_proveedor;
    }

    public PAS tipo_proveedor(String tipo_proveedor) {
        this.tipo_proveedor = tipo_proveedor;
        return this;
    }

    public void setTipo_proveedor(String tipo_proveedor) {
        this.tipo_proveedor = tipo_proveedor;
    }

    public String getDireccion() {
        return this.direccion;
    }

    public PAS direccion(String direccion) {
        this.direccion = direccion;
        return this;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getPersona_de_contacto() {
        return this.persona_de_contacto;
    }

    public PAS persona_de_contacto(String persona_de_contacto) {
        this.persona_de_contacto = persona_de_contacto;
        return this;
    }

    public void setPersona_de_contacto(String persona_de_contacto) {
        this.persona_de_contacto = persona_de_contacto;
    }

    public String getPoblacion() {
        return this.poblacion;
    }

    public PAS poblacion(String poblacion) {
        this.poblacion = poblacion;
        return this;
    }

    public void setPoblacion(String poblacion) {
        this.poblacion = poblacion;
    }

    public String getProvincia() {
        return this.provincia;
    }

    public PAS provincia(String provincia) {
        this.provincia = provincia;
        return this;
    }

    public void setProvincia(String provincia) {
        this.provincia = provincia;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof PAS)) {
            return false;
        }
        return id != null && id.equals(((PAS) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "PAS{" +
            "id=" + getId() +
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
