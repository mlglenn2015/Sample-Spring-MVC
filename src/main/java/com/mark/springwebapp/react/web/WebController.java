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

    /* Example: http://localhost:12001/error */
    @RequestMapping(value = "/error", method = RequestMethod.GET)
    public String error() {
        return "error";
    }

    /* Example: http://localhost:12001/staticPage */
    @RequestMapping(value = "/staticPage", method = RequestMethod.GET)
    public String redirectFinal() {

        return "redirect:/pages/final.html";  // http://localhost:12001/pages/final.html
    }

    /* Example: http://localhost:12001/myAppPage */
    @RequestMapping(value = "/myAppPage", method = RequestMethod.GET)
    public String redirectMyApp() {

        return "redirect:/pages/myApp.html";  // http://localhost:12001/pages/myApp.html
    }
}
