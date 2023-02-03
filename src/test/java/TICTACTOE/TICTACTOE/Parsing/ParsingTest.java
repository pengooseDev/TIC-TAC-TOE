package TICTACTOE.TICTACTOE.Parsing;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ParsingTest {
    public static void main(String[] args) throws JsonProcessingException {
        JSONObject jsonobj = new JSONObject();
        jsonobj.put("name","yeonLog");
        jsonobj.put("age",25);
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(String.valueOf(jsonobj));
        System.out.println(jsonNode);
    }
}
