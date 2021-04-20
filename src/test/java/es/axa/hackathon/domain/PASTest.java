package es.axa.hackathon.domain;

import static org.assertj.core.api.Assertions.assertThat;

import es.axa.hackathon.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class PASTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(PAS.class);
        PAS pAS1 = new PAS();
        pAS1.setId("id1");
        PAS pAS2 = new PAS();
        pAS2.setId(pAS1.getId());
        assertThat(pAS1).isEqualTo(pAS2);
        pAS2.setId("id2");
        assertThat(pAS1).isNotEqualTo(pAS2);
        pAS1.setId(null);
        assertThat(pAS1).isNotEqualTo(pAS2);
    }
}
