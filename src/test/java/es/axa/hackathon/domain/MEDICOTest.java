package es.axa.hackathon.domain;

import static org.assertj.core.api.Assertions.assertThat;

import es.axa.hackathon.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class MEDICOTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(MEDICO.class);
        MEDICO mEDICO1 = new MEDICO();
        mEDICO1.setId("id1");
        MEDICO mEDICO2 = new MEDICO();
        mEDICO2.setId(mEDICO1.getId());
        assertThat(mEDICO1).isEqualTo(mEDICO2);
        mEDICO2.setId("id2");
        assertThat(mEDICO1).isNotEqualTo(mEDICO2);
        mEDICO1.setId(null);
        assertThat(mEDICO1).isNotEqualTo(mEDICO2);
    }
}
