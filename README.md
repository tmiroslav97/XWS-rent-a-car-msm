# Rent-A-Car - XWS projekat
Fakultetski projekat iz XML i WS.

Ovde je dat pregled svih mikroservisa koji su definisani i link ka njihovom detaljnom opisu.

Autori:
* [Svetlana Antesevic](https://github.com/SvetlanaAnt)
* [Magdalena Lakic](https://github.com/magdalenalakic)
* [Miroslav Tomic](https://github.com/tmiroslav97)

#### MonolitApp
Monolitna agentska aplikacija sa backendom i frontendom.

[Detaljno](MonolitApp/README.md)
(Port: 8083)

### Spisak mikroservisa

#### Eureka service discovery
Za konfiguraciju service discovery je koriscena eureka.

[Detaljno](eureka/README.md)
(Port: 8761)

#### Zuul gateway service
Za gateway service je koriscen zuul.

[Detaljno](zuul/README.md)
(Port: 8082)

#### Authentication service

[Detaljno](Services/authentication-service/README.md)
(Port: 8084)

#### Message service

[Detaljno](Services/message-service/README.md)
(Port: 8091)

#### Email service

[Detaljno](Services/email-service/README.md)

#### Ad search service
[Detaljno](Services/ad-search-service/README.md)
(Port: 8085)

#### Codebook service
[Detaljno](Services/codebook-service/README.md)
(Port: 8087)