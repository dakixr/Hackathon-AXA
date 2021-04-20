package es.axa.hackathon.service.mapper;

import es.axa.hackathon.domain.*;
import es.axa.hackathon.service.dto.MEDICODTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link MEDICO} and its DTO {@link MEDICODTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface MEDICOMapper extends EntityMapper<MEDICODTO, MEDICO> {}
