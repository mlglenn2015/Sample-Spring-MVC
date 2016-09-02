package com.mark.springwebapp.react.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by mlglenn on 9/2/2016.
 */
@Controller
public class WebController {

    /* Example: http://localhost:12001/index */
    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String index() {
        return "index";
    }

    /* Example: http://localhost:12001/staticPage */
    @RequestMapping(value = "/staticPage", method = RequestMethod.GET)
    public String redirect() {

        return "redirect:/pages/final.htm";  // http://localhost:12001/pages/final.htm
    }
}
