package gateway.zuul.filter;

import gateway.zuul.client.AuthClient;
import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import feign.FeignException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;

@Component
public class AuthFilter extends ZuulFilter {

    @Autowired
    private AuthClient authClient;

    @Override
    public String filterType() {
        return "pre";
    }

    @Override
    public int filterOrder() {
        return 1;
    }

    @Override
    public boolean shouldFilter() {
        return true;
    }

    private void setFailedRequest(String body, int code) {
        RequestContext ctx = RequestContext.getCurrentContext();
        ctx.setResponseStatusCode(code);
        if (ctx.getResponseBody() == null) {
            ctx.setResponseBody(body);
            ctx.setSendZuulResponse(false);
        }
    }

    @Override
    public Object run() {

        RequestContext ctx = RequestContext.getCurrentContext();
        HttpServletRequest request = ctx.getRequest();
        System.out.println("Usao u zull");
        if (request.getHeader("Auth") == null) {
            return null;
        }

        System.out.println(request);

        String token = request.getHeader("Auth");
        System.out.println(token);
        try {
            authClient.verify();

            ctx.addZuulRequestHeader("Auth", token);
        } catch (FeignException.NotFound e) {
            setFailedRequest("User doesn't exist!", 403);
        }
        return null;
    }
}
