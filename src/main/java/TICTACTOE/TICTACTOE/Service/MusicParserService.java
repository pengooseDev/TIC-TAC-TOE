package TICTACTOE.TICTACTOE.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.json.simple.JSONArray;
import org.json.simple.parser.ParseException;
import org.springframework.http.ResponseEntity;

import java.io.IOException;

public interface MusicParserService {
    public JSONArray getList() throws ParseException, JsonProcessingException;


}
