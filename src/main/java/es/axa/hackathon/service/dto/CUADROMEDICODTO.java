package es.axa.hackathon.service.dto;

import java.io.Serializable;
import java.util.Objects;
import javax.validation.constraints.*;

/**
 * A DTO for the {@link es.axa.hackathon.domain.CUADROMEDICO} entity.
 */
public class CUADROMEDICODTO implements Serializable {

    private String id;

    private Integer id_cuadro_medico;

    private String suscripcion;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Integer getId_cuadro_medico() {
        return id_cuadro_medico;
    }

    public void setId_cuadro_medico(Integer id_cuadro_medico) {
        this.id_cuadro_medico = id_cuadro_medico;
    }

    public String getSuscripcion() {
        return suscripcion;
    }

    public void setSuscripcion(String suscripcion) {
        this.suscripcion = suscripcion;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof CUADROMEDICODTO)) {
            return false;
        }

        CUADROMEDICODTO cUADROMEDICODTO = (CUADROMEDICODTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, cUADROMEDICODTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "CUADROMEDICODTO{" +
            "id='" + getId() + "'" +
            ", id_cuadro_medico=" + getId_cuadro_medico() +
            ", suscripcion='" + getSuscripcion() + "'" +
            "}";
    }
}
