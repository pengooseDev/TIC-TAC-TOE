package TICTACTOE.TICTACTOE.Controller;

import TICTACTOE.TICTACTOE.Service.MusicParserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.json.simple.JSONArray;
import org.json.simple.parser.ParseException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/music")
public class MusicParserController {

    private final MusicParserService musicParserService;

    public MusicParserController(MusicParserService musicParserService){
        this.musicParserService = musicParserService;
    }

    @GetMapping
    public JSONArray getName() throws ParseException, JsonProcessingException {
        System.out.println(musicParserService.getList());
        return musicParserService.getList();
    }

}
