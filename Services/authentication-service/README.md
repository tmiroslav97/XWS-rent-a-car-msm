# Authentication service
U okviru authentication servisa se nalaze sledeci entiteti trazeni u specifikaciji (izuzeti su "pomocni" entiteti):
* User
* Agent
* EndUser
* Firm

U paketu service i njegovom potpaketu intf nalaze se definicije metoda onoga sta bi treba ovaj servis da realizuje.

Autentifikacija je Token Based, pomocu jwt tokena, autorizacija je Role Based, a sama security je implementiram pomocu spring security- a.
### AuthenticationService
Realizuje registraciju, prijavljivanje, refresh tokena kao i verifikaciju korisnika.

### UserService
Predstavlja generalizovanog korisnika sistema.

