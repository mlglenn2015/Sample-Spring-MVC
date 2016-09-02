package com.mark.springwebapp.react.config;

import java.util.HashMap;
import java.util.Map;

/*import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.vendor.AbstractJpaVendorAdapter;
import org.springframework.orm.jpa.vendor.EclipseLinkJpaVendorAdapter;
import org.springframework.transaction.annotation.EnableTransactionManagement;*/

/**
 * Created by mlglenn on 9/2/2016.
 */
//@Configuration
//@EnableJpaRepositories("com.mark.springwebapp.react")
//@EnableTransactionManagement
public class DataConfig { //extends JpaBaseConfiguration {
    /*@Override
    protected AbstractJpaVendorAdapter createJpaVendorAdapter() {
        return new EclipseLinkJpaVendorAdapter();
    }*/

    //@Override
    protected java.util.Map<String, Object> getVendorProperties() {
        Map<String, Object> jpaProperties = new HashMap<>();
        jpaProperties.put("eclipselink.weaving", "false");
        jpaProperties.put("eclipselink.logging.level", "SEVERE");
        jpaProperties.put("eclipselink.persistence-context.flush-mode", "AUTO");
        return jpaProperties;

    }
}
