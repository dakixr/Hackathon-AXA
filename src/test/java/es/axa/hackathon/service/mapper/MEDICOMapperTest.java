package es.axa.hackathon.service.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class MEDICOMapperTest {

    private MEDICOMapper mEDICOMapper;

    @BeforeEach
    public void setUp() {
        mEDICOMapper = new MEDICOMapperImpl();
    }
}
