# Experiments



## HTTP/2 server push

Optional in HTTP/2 HTTP/3 

[Chrome has removed support for this](https://developer.chrome.com/blog/removing-push/), we can consider it dead.

## Running with early-hints HTTP 103

This theoretically provides a speed boost by telling the client it may as well fetch the stylesheet and JS even before the request finishes.

Run rails with `bundle exec rails s --early-hints`

Note that [chrome dev tools seem to have a bug showing this in the network panel](https://chromium.googlesource.com/chromium/src/+/master/docs/early-hints.md).  It also does not support it in HTTP/1.1 but Puma/Rails do.

You can see it with a curl request though:

`curl -k -v  https://localhost:3000`

```
< HTTP/2 103
< alt-svc: h3=":9091"; ma=2592000
< link: </assets/application-483cb592cba54652f356706c995d08ed878adf4c0e8c9a5870dc2107125f1cc6.css>; rel=preload; as=style; nopush
```

### HTTP/2 setup

Puma doesn't support HTTP/2.  In production we'd probably have a load-balancer that handles that anyway.  
Locally we can use a reverse proxy.  Choose h2o or Caddy as shown below.  
Caddy is slightly easier to setup and run.  H2o is in ruby and supports server push and caching for it.


#### caddy reverse proxy for HTTP/2

If you install [caddy](https://caddyserver.com/) it installs a system level certificate so you don't need to create your own.

1. start rails either via `docker-compose up` or `rails s --early-hints`
2. run caddy: `caddy reverse-proxy --from https://localhost:9091 --to :3000`
3. `curl -k -v https://localhost:9090`


#### h2o reverse proxy for HTTP/2

Similar to what was [done here](https://eileencodes.com/posts/http2-early-hints/).
Setup an SSL cert and h2o.  Note you don't need to use the gems specified in that blog post but you do need a cert.

Possible h2o config:

```
hosts:
  "localhost":
    listen:
      port: 9090
      ssl:
        certificate-file: /Users/you/devel/localhost.crt
        key-file: /Users/you/devel/localhost.key
    paths:
      "/":
        proxy.reverse.url: "http://127.0.0.1:3000/"

access-log: /usr/local/var/h2o/access-log
error-log: /usr/local/var/h2o/error-log
```

1. start rails either via `docker-compose up` or `rails s --early-hints`
2. run h2o: `h2o -c /usr/local/etc/h2o/h2o.conf`
3. `curl -k -v https://localhost:9090`

