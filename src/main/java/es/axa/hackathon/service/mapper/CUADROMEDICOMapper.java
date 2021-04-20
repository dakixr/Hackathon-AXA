package es.axa.hackathon.service.mapper;

import es.axa.hackathon.domain.*;
import es.axa.hackathon.service.dto.CUADROMEDICODTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link CUADROMEDICO} and its DTO {@link CUADROMEDICODTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface CUADROMEDICOMapper extends EntityMapper<CUADROMEDICODTO, CUADROMEDICO> {}
