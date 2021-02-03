package replication.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/").permitAll()
                .antMatchers("/main-library/**").hasRole(Role.MASTER.name())
                .antMatchers("/filial-library/**").hasRole(Role.SLAVE.name())
                .antMatchers("/consolidation/**").hasRole(Role.CONSOL.name())
                .anyRequest()
                .authenticated()
                .and()
                .httpBasic();
    }

    @Bean
    @Override
    public UserDetailsService userDetailsService() {
        UserDetails user =
                User.builder()
                        .username("master")
                        .password(passwordEncoder().encode("password"))
                        .roles(Role.MASTER.name())
                        .build();
        UserDetails user2 =
                User.builder()
                        .username("slave")
                        .password(passwordEncoder().encode("password"))
                        .roles(Role.SLAVE.name())
                        .build();
        UserDetails user3 =
                User.builder()
                        .username("consol")
                        .password(passwordEncoder().encode("password"))
                        .roles(Role.CONSOL.name())
                        .build();

        return new InMemoryUserDetailsManager(user, user2, user3);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12);
    }
}