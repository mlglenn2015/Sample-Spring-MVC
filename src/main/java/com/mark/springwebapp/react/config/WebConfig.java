package com.mark.springwebapp.react.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * Created by mlglenn on 9/2/2016.
 */
@Configuration
//@EnableSpringDataWebSupport
public class WebConfig extends WebMvcConfigurerAdapter {
    @Autowired
    private MessageSource messageSource;

    /*@Bean
    public LocalValidatorFactoryBean validator() {
        LocalValidatorFactoryBean validator = new LocalValidatorFactoryBean();
        validator.setValidationMessageSource(messageSource);
        return validator;
    }*/
}
