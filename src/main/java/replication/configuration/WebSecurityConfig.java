package replication.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Collections;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .cors()
                .and()
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/v2/api-docs", "/configuration/ui", "/swagger-resources", "/configuration/security", "/swagger-ui.html", "/webjars/**", "/swagger-resources/configuration/ui", "/swagger-ui.html")
                .permitAll()
                .antMatchers("/main-library/**").hasAnyRole(Role.MAIN_LIBRARIAN.name(), Role.DIRECTOR.name())
                .antMatchers("/filial-library/**").hasRole(Role.LIBRARIAN.name())
                .antMatchers("/consolidation/**").hasAnyRole(Role.MAIN_LIBRARIAN.name(), Role.LIBRARIAN.name(), Role.TRANSPORTER.name(), Role.DIRECTOR.name())
                //.anyRequest()
                //.authenticated()
                .and()
                .formLogin()
                .loginProcessingUrl("/auth/login")
                .defaultSuccessUrl("/auth/success")
                .and()
                .logout()
                .deleteCookies("JSESSIONID")
                .logoutRequestMatcher(new AntPathRequestMatcher("/auth/logout", "POST"));
    }

    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/v2/api-docs",
                "/configuration/ui",
                "/swagger-resources/**",
                "/configuration/security",
                "/swagger-ui.html",
                "/webjars/**").antMatchers(HttpMethod.OPTIONS, "/**");
    }

    @Bean
    @Override
    public UserDetailsService userDetailsService() {
        UserDetails user =
                User.builder()
                        .username("mainLibrarian")
                        .password(passwordEncoder().encode("password"))
                        .roles(Role.MAIN_LIBRARIAN.name())
                        .build();
        UserDetails user2 =
                User.builder()
                        .username("librarian")
                        .password(passwordEncoder().encode("password"))
                        .roles(Role.LIBRARIAN.name())
                        .build();
        UserDetails user3 =
                User.builder()
                        .username("director")
                        .password(passwordEncoder().encode("password"))
                        .roles(Role.DIRECTOR.name())
                        .build();
        UserDetails user4 =
                User.builder()
                        .username("transporter")
                        .password(passwordEncoder().encode("password"))
                        .roles(Role.TRANSPORTER.name())
                        .build();

        return new InMemoryUserDetailsManager(user, user2, user3, user4);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12);
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Collections.singletonList("*"));
        configuration.setAllowedMethods(Collections.singletonList("*"));
        configuration.setAllowedHeaders(Collections.singletonList("*"));
        configuration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}