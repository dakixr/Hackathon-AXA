package es.axa.hackathon.service.mapper;

import es.axa.hackathon.domain.*;
import es.axa.hackathon.service.dto.PASDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link PAS} and its DTO {@link PASDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface PASMapper extends EntityMapper<PASDTO, PAS> {}
