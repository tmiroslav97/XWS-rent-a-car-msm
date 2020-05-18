package services.app.authenticationservice.service.intf;

import services.app.authenticationservice.dto.AgentRegDTO;
import services.app.authenticationservice.model.Agent;

import java.util.List;

public interface AgentService {
    Agent findById(Long id);
    List<Agent> findAll();
    Integer RegisterAgent(AgentRegDTO agentRegDTO);
    Integer deleteById(Long id);
    void delete(Agent agent);
    Agent save(Agent agent);
}
