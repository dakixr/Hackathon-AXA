package es.axa.hackathon.domain;

import java.io.Serializable;
import javax.validation.constraints.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

/**
 * A CUADROMEDICO.
 */
@Document(collection = "cuadromedico")
public class CUADROMEDICO implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("id_cliente")
    private Integer id_cliente;

    @Field("suscripcion")
    private String suscripcion;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public CUADROMEDICO id(String id) {
        this.id = id;
        return this;
    }

    public Integer getId_cliente() {
        return this.id_cliente;
    }

    public CUADROMEDICO id_cliente(Integer id_cliente) {
        this.id_cliente = id_cliente;
        return this;
    }

    public void setId_cliente(Integer id_cliente) {
        this.id_cliente = id_cliente;
    }

    public String getSuscripcion() {
        return this.suscripcion;
    }

    public CUADROMEDICO suscripcion(String suscripcion) {
        this.suscripcion = suscripcion;
        return this;
    }

    public void setSuscripcion(String suscripcion) {
        this.suscripcion = suscripcion;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof CUADROMEDICO)) {
            return false;
        }
        return id != null && id.equals(((CUADROMEDICO) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "CUADROMEDICO{" +
            "id=" + getId() +
            ", id_cliente=" + getId_cliente() +
            ", suscripcion='" + getSuscripcion() + "'" +
            "}";
    }
}
