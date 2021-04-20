package es.axa.hackathon.service.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class PASMapperTest {

    private PASMapper pASMapper;

    @BeforeEach
    public void setUp() {
        pASMapper = new PASMapperImpl();
    }
}
