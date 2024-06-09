package tn.esprit.gestionreservation.Controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.gestionreservation.Entity.Local;
import tn.esprit.gestionreservation.Service.ILocalService;
import tn.esprit.gestionreservation.Service.StatsService;

import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("/Local")
public class LocalRestController {
    ILocalService LocalService;
    StatsService statsService;
    @GetMapping("")
    public List<Local> GetAll() {
        List<Local> listLocal = LocalService.GetAll();
        return listLocal;
    }

    @GetMapping("/{Local-id}")
    public Local GetOne(@PathVariable("Local-id") Long LId) {
        Local Local = LocalService.GetOne(LId);
        return Local;
    }

    @PostMapping("")
    public Local Add(@RequestBody Local l) {
        Local Local = LocalService.Add(l);
        return Local;
    }

    @DeleteMapping("/{Local-id}")
    public void Delete (@PathVariable("Local-id") Long LId) {
        LocalService.Delete(LId);
    }
    @PutMapping("/update")
    public Local Update(@RequestBody Local l) {
        Local Local = LocalService.Update(l);
        return Local;
    }

    @GetMapping("/avliables")
    public List<Local> AllAvliableLocal() {
        List<Local> listLocal = LocalService.AllAvliableLocal();
        return listLocal;
    }

    @GetMapping("/stats")
    public Map<String,Integer> stats() {
        Map<String,Integer> stats = LocalService.getstatsalle();
        return stats;
    }

    @GetMapping("/stats_avliables")
    private Map<String,Integer> stats_avliables() {
        Map<String ,Integer> stats = LocalService.getavaliablesstats();
        return stats;
    }
    @GetMapping("/total")
    public int getTotalNumberOfLocals() {
        return LocalService.getTotalNumberOfLocals();}

    @GetMapping("/allbynames")
    public List<String> findallbynames() {
        return LocalService.GetAllNames();}
    @GetMapping("/bloc-and-available-names")
    public ResponseEntity<Map<Character, List<String>>> getBlocAndAvailableNamesStartingWithBloc() {
        Map<Character, List<String>> blocAndNamesMap = LocalService.getBlocAndAvailableNamesStartingWithBloc();
        return ResponseEntity.ok(blocAndNamesMap);
    }
    @GetMapping("/available/count")
    public int getTotalAvailableLocals() {
        return LocalService.getTotalAvailableLocals();
    }

    @GetMapping("/unavailable/count")
    public int getTotalUnavailableLocals() {
        return LocalService.getTotalUnavailableLocals();
    }


}
