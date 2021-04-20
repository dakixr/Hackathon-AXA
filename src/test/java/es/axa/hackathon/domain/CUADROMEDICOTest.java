package es.axa.hackathon.domain;

import static org.assertj.core.api.Assertions.assertThat;

import es.axa.hackathon.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class CUADROMEDICOTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(CUADROMEDICO.class);
        CUADROMEDICO cUADROMEDICO1 = new CUADROMEDICO();
        cUADROMEDICO1.setId("id1");
        CUADROMEDICO cUADROMEDICO2 = new CUADROMEDICO();
        cUADROMEDICO2.setId(cUADROMEDICO1.getId());
        assertThat(cUADROMEDICO1).isEqualTo(cUADROMEDICO2);
        cUADROMEDICO2.setId("id2");
        assertThat(cUADROMEDICO1).isNotEqualTo(cUADROMEDICO2);
        cUADROMEDICO1.setId(null);
        assertThat(cUADROMEDICO1).isNotEqualTo(cUADROMEDICO2);
    }
}
