package tn.esprit.gestionreservation.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import tn.esprit.gestionreservation.Entity.Local;

import java.util.List;

public interface LocalRepository extends JpaRepository<Local, Long> {

    @Query("SELECT l.Name FROM Local l")
    List<String> findAllNames();


}
