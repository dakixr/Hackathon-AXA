package es.axa.hackathon.service.mapper;

import es.axa.hackathon.domain.*;
import es.axa.hackathon.service.dto.CENTROSANITARIODTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link CENTROSANITARIO} and its DTO {@link CENTROSANITARIODTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface CENTROSANITARIOMapper extends EntityMapper<CENTROSANITARIODTO, CENTROSANITARIO> {}
