package services.app.adservice.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.header.writers.StaticHeadersWriter;
import services.app.adservice.security.AuthenticationTokenFilter;

@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public AuthenticationTokenFilter authenticationTokenFilterBean() throws Exception {
        AuthenticationTokenFilter authenticationTokenFilter = new AuthenticationTokenFilter();
        authenticationTokenFilter.setAuthenticationManager(authenticationManagerBean());
        return authenticationTokenFilter;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.headers().frameOptions().disable();
        http.headers().addHeaderWriter(new StaticHeadersWriter("X-Content-Security-Policy","script-src 'self'"));
        http
                .csrf()
                .disable()
                .exceptionHandling()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                .antMatchers(HttpMethod.OPTIONS).permitAll()
                .antMatchers("/ad/**")
                .permitAll()
                .anyRequest().authenticated();

        http.addFilterAfter(authenticationTokenFilterBean(), UsernamePasswordAuthenticationFilter.class);
    }

//    @Override
//    public void configure(WebSecurity web) {
//        web.ignoring().antMatchers(HttpMethod.POST, Constants.REST_PATH + "/auth/login");
//        web.ignoring().antMatchers(HttpMethod.POST, Constants.REST_PATH + "/auth/sign-up");
//        web.ignoring().antMatchers(HttpMethod.GET, Constants.REST_PATH + "/ad/**");
//        web.ignoring().antMatchers(HttpMethod.GET, Constants.REST_PATH + "/ad/search");
//        web.ignoring().antMatchers(HttpMethod.GET, Constants.REST_PATH + "/car-man");
//        web.ignoring().antMatchers(HttpMethod.GET, Constants.REST_PATH + "/car-type");
//        web.ignoring().antMatchers(HttpMethod.GET, Constants.REST_PATH + "/gb-type");
//        web.ignoring().antMatchers(HttpMethod.GET, Constants.REST_PATH + "/fuel-type");
//        web.ignoring().antMatchers(HttpMethod.GET, Constants.REST_PATH + "/car-model");
//        web.ignoring().antMatchers(HttpMethod.GET, "/", "/webjars/**", "/images/**", "/imgs/**", "/img/**", "/*.html", "/favicon.ico", "/**/*.html",
//                "/**/*.css", "/**/*.js", "/**/assets/**");
//    }
}