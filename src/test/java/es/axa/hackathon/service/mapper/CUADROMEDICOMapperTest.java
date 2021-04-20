package es.axa.hackathon.service.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class CUADROMEDICOMapperTest {

    private CUADROMEDICOMapper cUADROMEDICOMapper;

    @BeforeEach
    public void setUp() {
        cUADROMEDICOMapper = new CUADROMEDICOMapperImpl();
    }
}
