package ibf2021.assessment.csf.server;

import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class AppConfig implements WebMvcConfigurer {
    
    @Override
    public void addCorsMappings(CorsRegistry reg) {
        reg.addMapping("/api/**");
    }
}
