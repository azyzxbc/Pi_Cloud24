package tn.esprit.gestionreservation.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.gestionreservation.Entity.User;

public interface UserRepository extends JpaRepository<User,Long> {
}
