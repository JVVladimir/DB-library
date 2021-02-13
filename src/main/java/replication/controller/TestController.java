package replication.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import java.io.IOException;

@RestController
@CrossOrigin
@RequestMapping("/auth")
public class TestController {

    @Autowired
    private AuthenticationManager authManager;

    @PostMapping("/login")
    ResponseEntity<String> login(@RequestBody Credentials creds) throws IOException {
        UsernamePasswordAuthenticationToken authReq
                = new UsernamePasswordAuthenticationToken(creds.username, creds.password);
        Authentication auth = authManager.authenticate(authReq);
        SecurityContext sc = SecurityContextHolder.getContext();
        sc.setAuthentication(auth);


        HttpHeaders resHeader = new HttpHeaders();
        resHeader.set("Content-Type", "application/json");
        resHeader.set("Accept", "application/json");

        return ResponseEntity.ok()
                .headers(resHeader)
                .body("{ \"status\": \"ok\" }");
    }

    /**
     * {
     *     "login": "mainLibrarian",
     *     "password": "password"
     * }
     *
     * */

}
