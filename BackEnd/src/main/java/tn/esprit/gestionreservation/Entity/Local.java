package tn.esprit.gestionreservation.Entity;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;


import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Local {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long idLocal;
    String Name;
    Character Bloc;
    Boolean Availability;
    Integer Capacity;
    Integer total_group_study = 0;



    @JsonIgnore
    @OneToMany(mappedBy= "local")
    Set<Studygroup> studygroups;

}
