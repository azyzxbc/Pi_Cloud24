package tn.esprit.gestionreservation.Service;

import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;
import tn.esprit.gestionreservation.Entity.Local;
import tn.esprit.gestionreservation.Repository.LocalRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

@Service
public class StatsService {
    private ILocalService iLocalService;
    LocalRepository LocalRepository;
    public Map<Long,Integer> getstatsalle() {
        Map<Long, Integer> stats = new HashMap<>();
        List<Local> locals = LocalRepository.findAll();
        for (Local local : locals) {
            stats.put(local.getIdLocal(), local.getTotal_group_study());
        }
        return stats;
    }
}
