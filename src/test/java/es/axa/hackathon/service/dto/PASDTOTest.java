package es.axa.hackathon.service.dto;

import static org.assertj.core.api.Assertions.assertThat;

import es.axa.hackathon.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class PASDTOTest {

    @Test
    void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(PASDTO.class);
        PASDTO pASDTO1 = new PASDTO();
        pASDTO1.setId("id1");
        PASDTO pASDTO2 = new PASDTO();
        assertThat(pASDTO1).isNotEqualTo(pASDTO2);
        pASDTO2.setId(pASDTO1.getId());
        assertThat(pASDTO1).isEqualTo(pASDTO2);
        pASDTO2.setId("id2");
        assertThat(pASDTO1).isNotEqualTo(pASDTO2);
        pASDTO1.setId(null);
        assertThat(pASDTO1).isNotEqualTo(pASDTO2);
    }
}
