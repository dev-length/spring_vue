package org.scoula.security.account.domain;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;

@Data
public class AuthVO implements GrantedAuthority {
    private String username;
    private String auth;
    
//    권한 정보만 추출
    @Override
    public String getAuthority() {
        return auth;
    }
}
