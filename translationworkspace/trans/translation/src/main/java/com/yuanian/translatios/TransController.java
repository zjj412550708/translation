package com.yuanian.translatios;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin
@RestController
public class TransController {

    @ResponseBody
    @RequestMapping("/test")
    public String test(){
        return  "test success,can use";
    }

    @GetMapping("/trans/{word}")
    public Map<String,Object> trans(@PathVariable("word") String word){
        TransUtil transutil = new  TransUtil();
        Map shuju = new HashMap();
        String even=transutil.InputMSG(word);
        shuju =TransUtil.DealXml(even);
        return shuju;
    }
}
