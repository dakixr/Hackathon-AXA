package es.axa.hackathon.domain;

import static org.assertj.core.api.Assertions.assertThat;

import es.axa.hackathon.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class CENTROSANITARIOTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(CENTROSANITARIO.class);
        CENTROSANITARIO cENTROSANITARIO1 = new CENTROSANITARIO();
        cENTROSANITARIO1.setId("id1");
        CENTROSANITARIO cENTROSANITARIO2 = new CENTROSANITARIO();
        cENTROSANITARIO2.setId(cENTROSANITARIO1.getId());
        assertThat(cENTROSANITARIO1).isEqualTo(cENTROSANITARIO2);
        cENTROSANITARIO2.setId("id2");
        assertThat(cENTROSANITARIO1).isNotEqualTo(cENTROSANITARIO2);
        cENTROSANITARIO1.setId(null);
        assertThat(cENTROSANITARIO1).isNotEqualTo(cENTROSANITARIO2);
    }
}
