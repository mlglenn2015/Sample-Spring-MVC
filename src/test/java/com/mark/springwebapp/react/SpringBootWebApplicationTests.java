package com.mark.springwebapp.react;

/**
 * Created by mlglenn on 9/2/2016.
 */
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = SpringBootWebApplication.class)
@WebAppConfiguration
public class SpringBootWebApplicationTests {

    @Test
    public void contextLoads() {
    }

}
