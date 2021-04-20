package es.axa.hackathon.domain;

import java.io.Serializable;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

/**
 * A MEDICO.
 */
@Document(collection = "medico")
public class MEDICO implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @Field("nombre")
    private String nombre;

    @Field("apellidos")
    private String apellidos;

    @Field("numero_colegiado")
    private String numero_colegiado;

    @Field("telefono_contacto")
    private String telefono_contacto;

    @Field("especialidad")
    private String especialidad;

    @Field("centro_sanitario")
    private String centro_sanitario;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public MEDICO id(String id) {
        this.id = id;
        return this;
    }

    public String getNombre() {
        return this.nombre;
    }

    public MEDICO nombre(String nombre) {
        this.nombre = nombre;
        return this;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return this.apellidos;
    }

    public MEDICO apellidos(String apellidos) {
        this.apellidos = apellidos;
        return this;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getNumero_colegiado() {
        return this.numero_colegiado;
    }

    public MEDICO numero_colegiado(String numero_colegiado) {
        this.numero_colegiado = numero_colegiado;
        return this;
    }

    public void setNumero_colegiado(String numero_colegiado) {
        this.numero_colegiado = numero_colegiado;
    }

    public String getTelefono_contacto() {
        return this.telefono_contacto;
    }

    public MEDICO telefono_contacto(String telefono_contacto) {
        this.telefono_contacto = telefono_contacto;
        return this;
    }

    public void setTelefono_contacto(String telefono_contacto) {
        this.telefono_contacto = telefono_contacto;
    }

    public String getEspecialidad() {
        return this.especialidad;
    }

    public MEDICO especialidad(String especialidad) {
        this.especialidad = especialidad;
        return this;
    }

    public void setEspecialidad(String especialidad) {
        this.especialidad = especialidad;
    }

    public String getCentro_sanitario() {
        return this.centro_sanitario;
    }

    public MEDICO centro_sanitario(String centro_sanitario) {
        this.centro_sanitario = centro_sanitario;
        return this;
    }

    public void setCentro_sanitario(String centro_sanitario) {
        this.centro_sanitario = centro_sanitario;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof MEDICO)) {
            return false;
        }
        return id != null && id.equals(((MEDICO) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "MEDICO{" +
            "id=" + getId() +
            ", nombre='" + getNombre() + "'" +
            ", apellidos='" + getApellidos() + "'" +
            ", numero_colegiado='" + getNumero_colegiado() + "'" +
            ", telefono_contacto='" + getTelefono_contacto() + "'" +
            ", especialidad='" + getEspecialidad() + "'" +
            ", centro_sanitario='" + getCentro_sanitario() + "'" +
            "}";
    }
}
