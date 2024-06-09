package tn.esprit.gestionreservation.Service;

import tn.esprit.gestionreservation.Entity.Local;

import java.util.List;
import java.util.Map;

public interface ILocalService {
    public List<Local> GetAll();

    public Local GetOne(Long idLocal);

    public Local Add(Local l);

    public void Delete(Long idLocal);

    public Local Update(Local Local);

    public List<Local> AllAvliableLocal();

    public Map<String,Integer> getstatsalle();

    public  Map<String,Integer> getavaliablesstats();
    public int getTotalNumberOfLocals();

    public List<String> GetAllNames();
    public Map<Character, List<String>> getBlocAndAvailableNamesStartingWithBloc();
    public int getTotalAvailableLocals();
    public int getTotalUnavailableLocals();


}
