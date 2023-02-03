package TICTACTOE.TICTACTOE.Service.Impl;

import TICTACTOE.TICTACTOE.Service.MusicParserService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.ParseException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.Objects;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Slf4j
@Service
public class MusicParserServiceImpl implements MusicParserService {
    @Override
    public JSONArray getList() throws JsonProcessingException {
        URI uri = UriComponentsBuilder
                .fromUriString("https://www.youtube.com")
                .path("/results")
                .queryParam("search_query","adele")
                .build()
                .toUri();
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> responseEntity = restTemplate.getForEntity(uri, String.class);
        System.out.println(responseEntity.getStatusCode());

        //파싱
        Pattern p = Pattern.compile("(var ytInitialData)(.*?)};");	// 검색할 문자열 패턴 : 숫자
        Matcher m = p.matcher(Objects.requireNonNull(responseEntity.getBody()));
        String objectData = "";
        while (m.find()) {
            objectData = m.group().substring(20, m.group().length() - 1);
        }
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(objectData).get("contents").get("twoColumnSearchResultsRenderer").get("primaryContents").get("sectionListRenderer")
                .get("contents").get(0).get("itemSectionRenderer").get("contents");
        JSONArray jsonArray = new JSONArray();
        for (int i=0; i< jsonNode.size(); i++){
            if (jsonNode.get(i).has("videoRenderer")){
                JsonNode titleData = jsonNode.get(i).get("videoRenderer").get("title").get("accessibility").get("accessibilityData").get("label");
                p = Pattern.compile("^.*? (?=게시자: )");
                m = p.matcher(titleData.toString());
                String title = "";
                if(m.find()) title = m.group().substring(1);
                JsonNode id = jsonNode.get(i).get("videoRenderer").get("videoId");
                String strId = id.toString().replaceAll("\"", "");
                String strThumbnail = "";
                if (jsonNode.get(i).get("videoRenderer").has("thumbnail")){
                    JsonNode thumbnail = jsonNode.get(i).get("videoRenderer").get("thumbnail").get("thumbnails").get(0).get("url");
                    strThumbnail = thumbnail.toString().replaceAll("\"", "");
                }
                String strDuration = "";
                if (jsonNode.get(i).get("videoRenderer").has("lengthText")){
                    if (jsonNode.get(i).get("videoRenderer").get("lengthText").has("accessibility")){
                        JsonNode duration = jsonNode.get(i).get("videoRenderer").get("lengthText").get("accessibility").get("accessibilityData").get("label");
                        strDuration = duration.toString().replaceAll("\"", "");
                    }
                }
                JsonNode owner = jsonNode.get(i).get("videoRenderer").get("ownerText").get("runs").get(0).get("text");
                String strOwner = owner.toString().replaceAll("\"", "");
                JSONObject jsonObject = new JSONObject();
                jsonObject.put("title",title);
                jsonObject.put("id",strId);
                jsonObject.put("thumbnail",strThumbnail);
                jsonObject.put("duration",strDuration);
                jsonObject.put("owner",strOwner);
                jsonArray.add(jsonObject);
            }

        }
        return jsonArray;
    }

}
