INSERT INTO authority (name)
VALUES ('ROLE_ADMIN');
INSERT INTO authority (name)
VALUES ('ROLE_AGENT');
INSERT INTO authority (name)
VALUES ('ROLE_USER');

INSERT INTO user(id, email, first_name, last_name, password)
VALUES (1, 'tomic@tomic.com', 'Tomke', 'Dazdarac', '$2a$10$VSlWn0nzWDB2Jxv7cx.sf.NakwjllWrSjdkWi66g2dMM.OdBGThlS');

INSERT INTO user_authority(user_id, authority_id)
VALUES (1,2);

INSERT INTO user(id, email, first_name, last_name, password)
VALUES (2, 'tomic.miroslav97@gmail.com', 'Miroslav', 'Tomic', '$2a$10$VSlWn0nzWDB2Jxv7cx.sf.NakwjllWrSjdkWi66g2dMM.OdBGThlS');

INSERT INTO user_authority(user_id, authority_id)
VALUES (2,1);