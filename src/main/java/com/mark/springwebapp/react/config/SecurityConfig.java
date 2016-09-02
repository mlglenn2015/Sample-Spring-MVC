package com.mark.springwebapp.react.config;

import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * Created by mlglenn on 9/2/2016.
 */
@Configuration
@Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
//@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/webjarslocator/**", "/static/**", "/css/**", "/js/**", "/images/**",
                        "/webjars/**", "/assets/**", "/error")
                .permitAll();
                /*.anyRequest().fullyAuthenticated()
                .and()
                .formLogin().loginPage("/login").failureUrl("/login?error").permitAll()
                .and().logout().permitAll()
                .and().sessionManagement().sessionFixation().migrateSession()
                .and().csrf().disable();*/
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        //auth.inMemoryAuthentication().withUser("user").password("password").roles("USER");
    }
}
