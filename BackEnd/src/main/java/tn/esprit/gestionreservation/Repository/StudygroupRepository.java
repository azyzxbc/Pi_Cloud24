package tn.esprit.gestionreservation.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.gestionreservation.Entity.Local;
import tn.esprit.gestionreservation.Entity.Studygroup;

public interface StudygroupRepository extends JpaRepository<Studygroup, Long> {
}
