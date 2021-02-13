package replication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/auth")
public class TestController {

    @Autowired
    private AuthenticationManager authManager;

    @PostMapping("/login")
    ResponseEntity<String> login(@RequestBody Credentials creds) {
        UsernamePasswordAuthenticationToken authReq
                = new UsernamePasswordAuthenticationToken(creds.login, creds.password);
        Authentication auth = authManager.authenticate(authReq);
        SecurityContext sc = SecurityContextHolder.getContext();
        sc.setAuthentication(auth);
        return ResponseEntity.ok().build();
    }

//    @PostMapping("/logout")
//    ResponseEntity<String> logout() {
//        SecurityContext sc = SecurityContextHolder.getContext();
//        sc.
//        sc.setAuthentication(auth);
//        return ResponseEntity.ok().build();
//    }

}
