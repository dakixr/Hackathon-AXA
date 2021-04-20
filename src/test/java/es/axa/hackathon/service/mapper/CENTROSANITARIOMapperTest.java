package es.axa.hackathon.service.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class CENTROSANITARIOMapperTest {

    private CENTROSANITARIOMapper cENTROSANITARIOMapper;

    @BeforeEach
    public void setUp() {
        cENTROSANITARIOMapper = new CENTROSANITARIOMapperImpl();
    }
}
