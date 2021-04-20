package es.axa.hackathon.service.dto;

import static org.assertj.core.api.Assertions.assertThat;

import es.axa.hackathon.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class CENTROSANITARIODTOTest {

    @Test
    void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(CENTROSANITARIODTO.class);
        CENTROSANITARIODTO cENTROSANITARIODTO1 = new CENTROSANITARIODTO();
        cENTROSANITARIODTO1.setId("id1");
        CENTROSANITARIODTO cENTROSANITARIODTO2 = new CENTROSANITARIODTO();
        assertThat(cENTROSANITARIODTO1).isNotEqualTo(cENTROSANITARIODTO2);
        cENTROSANITARIODTO2.setId(cENTROSANITARIODTO1.getId());
        assertThat(cENTROSANITARIODTO1).isEqualTo(cENTROSANITARIODTO2);
        cENTROSANITARIODTO2.setId("id2");
        assertThat(cENTROSANITARIODTO1).isNotEqualTo(cENTROSANITARIODTO2);
        cENTROSANITARIODTO1.setId(null);
        assertThat(cENTROSANITARIODTO1).isNotEqualTo(cENTROSANITARIODTO2);
    }
}
