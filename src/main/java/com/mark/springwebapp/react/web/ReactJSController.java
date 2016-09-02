package com.mark.springwebapp.react.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by mlglenn on 9/2/2016.
 */
@Controller
//@RequestMapping("/reactJS")
public class ReactJSController {

    //@RequestMapping(method = RequestMethod.GET)
    @RequestMapping(value = "/hello", method = RequestMethod.GET)
    public String printHello(ModelMap model) {
        model.addAttribute("message", "Hello Spring MVC Framework!");
        return "hello";
    }

    @RequestMapping(value = "/reactJS", method = RequestMethod.GET)
    public String printReactJS(ModelMap model) {
        model.addAttribute("message", "Hello Spring MVC Framework!");
        return "reactJS";
    }
}
