# Rent a Car - XWS projekat
Fakultetski projekat iz XML i WS.

Ovdje dat pregled svih mikroservisa koji su definisani i link ka njihovom detaljnom opisu.

Autori:
* Svetlana Antesevic @SvetlanaAnt
* Magdalena Lakic @magdalenalakic
* Miroslav Tomic @tmiroslav97

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

#### Authentication service

[Detaljno](Services/authentication-service/README.md)

(Port: 8082)

#### Message service

[Detaljno](Services/message-service/README.md)

(Port: 8091)

#### Email service

[Detaljno](Services/email-service/README.md)