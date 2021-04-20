package es.axa.hackathon.service.dto;

import static org.assertj.core.api.Assertions.assertThat;

import es.axa.hackathon.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class MEDICODTOTest {

    @Test
    void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(MEDICODTO.class);
        MEDICODTO mEDICODTO1 = new MEDICODTO();
        mEDICODTO1.setId("id1");
        MEDICODTO mEDICODTO2 = new MEDICODTO();
        assertThat(mEDICODTO1).isNotEqualTo(mEDICODTO2);
        mEDICODTO2.setId(mEDICODTO1.getId());
        assertThat(mEDICODTO1).isEqualTo(mEDICODTO2);
        mEDICODTO2.setId("id2");
        assertThat(mEDICODTO1).isNotEqualTo(mEDICODTO2);
        mEDICODTO1.setId(null);
        assertThat(mEDICODTO1).isNotEqualTo(mEDICODTO2);
    }
}
