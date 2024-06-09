package tn.esprit.gestionreservation.Service;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.gestionreservation.Entity.Local;
import tn.esprit.gestionreservation.Entity.Status;
import tn.esprit.gestionreservation.Entity.Studygroup;
import tn.esprit.gestionreservation.Repository.LocalRepository;
import tn.esprit.gestionreservation.Repository.StudygroupRepository;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@AllArgsConstructor
public class StudygroupImpl implements IStudygroupService {
    StudygroupRepository studygroupRepository;
    LocalRepository localRepository;

    @Override
    public Studygroup Add(Studygroup studygroup) {
        return studygroupRepository.save(studygroup);
    }

    @Override
    public List<Studygroup> GetAll() {
        return (List<Studygroup>) studygroupRepository.findAll();
    }

    @Override
    public Studygroup GetOne(long idStudyGroup) {
        return studygroupRepository.findById(idStudyGroup).get();
    }

    @Override
    public void Delete(long idStudyGroup) {
        studygroupRepository.deleteById(idStudyGroup);
    }

    @Override
    public Studygroup Update(Studygroup studygroup) {
        return studygroupRepository.save(studygroup);
    }

    @Override
    public void Affecter_studygroup(Long id_studygroup, Long id_local) {
        Studygroup studygroup = studygroupRepository.findById(id_studygroup).get();
        studygroup.setLocation(id_local);
        studygroup.setStatus(Status.close);
        studygroupRepository.save(studygroup);
        Local local = localRepository.findById(id_local).get();
        local.setTotal_group_study(local.getTotal_group_study() + 1);
        Set<Studygroup> studygroupSet = local.getStudygroups();
        studygroupSet.add(studygroup);
        local.setStudygroups(studygroupSet);
        localRepository.save(local);
    }

    @Override
    public void Reterive_studygroup(Long id_studygroup, Long id_local, Status status) {
        Studygroup studygroup = studygroupRepository.findById(id_studygroup).get();
        studygroup.setLocation(null);
        studygroup.setStatus(status);
        studygroupRepository.save(studygroup);
        Local local = localRepository.findById(id_local).get();
        local.setTotal_group_study(local.getTotal_group_study() - 1);
        localRepository.save(local);
    }

    @Override
    public List<Studygroup> GetAllByStatus(Status status) {
        List<Studygroup> studygroups = new ArrayList<>();
        studygroups = studygroupRepository.findAll();
        List<Studygroup> studygroupsfilter = new ArrayList<>();
        for (Studygroup studygroup : studygroups) {
            System.out.println(studygroup.toString());
            if (studygroup.getStatus().equals(status)) {
                studygroupsfilter.add(studygroup);
            }
        }
        return studygroupsfilter;
    }

    @Override
    public List<Studygroup> GetAllByIdlocal(Long id_local) {
        List<Studygroup> studygroups = studygroupRepository.findAll();
        List<Studygroup> studygroupList = new ArrayList<>();
        for (Studygroup studygroup : studygroups) {
            if (studygroup.getLocal().getIdLocal() == id_local) {
                studygroup.getLocal().setTotal_group_study(studygroup.getLocal().getTotal_group_study() + 1);
                studygroupList.add(studygroup);
            }}
        return studygroupList;
    }

}