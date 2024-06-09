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
public class Session {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long idSession;

    public Date Date_debut;
    public Integer duree;
    public  Integer nbr_personne;
    public  String topic;
    @Enumerated(EnumType.STRING)
    public  Modalite modalite;
    @ManyToMany(mappedBy = "sessions")
    private Set<User> users;
    @ManyToOne
    @JoinColumn(name="instructor_id", nullable=false)
    private User instructor;
    @ManyToOne
    private Local local;



}