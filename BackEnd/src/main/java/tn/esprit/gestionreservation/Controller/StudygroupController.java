package tn.esprit.gestionreservation.Controller;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import tn.esprit.gestionreservation.Entity.Status;
import tn.esprit.gestionreservation.Entity.Studygroup;
import tn.esprit.gestionreservation.Service.IStudygroupService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RestController
@AllArgsConstructor
@RequestMapping("/Studygroup")
public class StudygroupController {
    IStudygroupService studygroupService;

    @GetMapping("")
    public List<Studygroup> GetAll() {
        List<Studygroup> studygroupList = studygroupService.GetAll();
        return studygroupList;
    }

    @GetMapping("/ByStatus/{status}")
    public List<Studygroup> GetAllByStatus(@PathVariable Status status) {
        List<Studygroup> studygroupList = studygroupService.GetAllByStatus(status);
        return studygroupList;
    }

    @GetMapping("/{studygroup-id}")
    public Studygroup GetOne  (@PathVariable("studygroup-id") Long studgroupid) {
        Studygroup studygroup = studygroupService.GetOne(studgroupid);
        return studygroup;
    }

    @PostMapping("")
    public Studygroup Add(@RequestBody  Studygroup studygroup){
        Studygroup  studyGroup = studygroupService.Add(studygroup);
        return studyGroup;
    }
    @DeleteMapping("/{studygroup-id}")
    public void Delete  (@PathVariable("studygroup-id") Long s){
        studygroupService.Delete(s);
    }
    @PutMapping("/update")
    public Studygroup Update(@RequestBody Studygroup s)
    {
        Studygroup Studygroup = studygroupService.Update(s);
        return s;
    }

    @PutMapping("/affecter")
    public  ResponseEntity<?> Affecter(@RequestParam Long id_study_group, @RequestParam Long id_local)
    {
        studygroupService.Affecter_studygroup(id_study_group, id_local);
        Map<String, String> Response = new HashMap<>();
        Response.put("Result", "Affectation is done");
        return new ResponseEntity<>(Response, HttpStatus.OK);
    }

    @PutMapping("/retrieve")
    public  ResponseEntity<?> Retrieve(@RequestParam Long id_study_group, @RequestParam Long id_local,
                                                  Status status)
    {
        studygroupService.Reterive_studygroup(id_study_group, id_local, status);
        Map<String, String> Response = new HashMap<>();
        Response.put("Result", "Retrieve is done");
        return new ResponseEntity<>(Response, HttpStatus.OK);
    }
    @GetMapping("/getByIdLocal/{id_local}")
    public List<Studygroup> GetAllByIdlocal(@PathVariable Long id_local){
        List<Studygroup> studygroupList = studygroupService.GetAllByIdlocal(id_local);
        return studygroupList;

    }

}
