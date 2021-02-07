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
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

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
                //.antMatchers("/").permitAll()
                .antMatchers("/main-library/**").hasRole(Role.MASTER.name())
                .antMatchers("/filial-library/**").hasRole(Role.SLAVE.name())
                .antMatchers("/consolidation/**").hasAnyRole(Role.MASTER.name(), Role.SLAVE.name())
                .anyRequest()
                .authenticated()
                .and()
                .formLogin()
                .loginProcessingUrl("/auth/login")
                .defaultSuccessUrl("/auth/success")
                .and()
                .logout()
                .logoutRequestMatcher(new AntPathRequestMatcher("/auth/logout", "POST"));
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

        return new InMemoryUserDetailsManager(user, user2);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12);
    }
}