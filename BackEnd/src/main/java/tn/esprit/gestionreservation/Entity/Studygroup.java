package tn.esprit.gestionreservation.Entity;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Studygroup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long idGroup;
    Date Date_debut;
    String Topic;
    Level level;
    Long location ;
    @Enumerated(EnumType.STRING)
    private Status status = Status.open;
    @ManyToMany(mappedBy = "Studygroups",cascade = CascadeType.ALL)
    private Set<Ressource> Ressources;
    @ManyToOne
    @JoinColumn(name = "local_id_local")
    private Local local;
}