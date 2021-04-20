package es.axa.hackathon.service.dto;

import static org.assertj.core.api.Assertions.assertThat;

import es.axa.hackathon.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class CUADROMEDICODTOTest {

    @Test
    void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(CUADROMEDICODTO.class);
        CUADROMEDICODTO cUADROMEDICODTO1 = new CUADROMEDICODTO();
        cUADROMEDICODTO1.setId("id1");
        CUADROMEDICODTO cUADROMEDICODTO2 = new CUADROMEDICODTO();
        assertThat(cUADROMEDICODTO1).isNotEqualTo(cUADROMEDICODTO2);
        cUADROMEDICODTO2.setId(cUADROMEDICODTO1.getId());
        assertThat(cUADROMEDICODTO1).isEqualTo(cUADROMEDICODTO2);
        cUADROMEDICODTO2.setId("id2");
        assertThat(cUADROMEDICODTO1).isNotEqualTo(cUADROMEDICODTO2);
        cUADROMEDICODTO1.setId(null);
        assertThat(cUADROMEDICODTO1).isNotEqualTo(cUADROMEDICODTO2);
    }
}
