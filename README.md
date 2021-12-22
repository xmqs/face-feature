/etc/systemd/system/docker.service.d
修改docker代理

https://docs.docker.com/config/daemon/systemd/

Environment="HTTP_PROXY=http://192.168.1.222:1080"
Environment="HTTPS_PROXY=http://192.168.1.222:1080"
