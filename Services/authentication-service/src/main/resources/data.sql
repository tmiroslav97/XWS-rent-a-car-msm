INSERT INTO authority (name)
VALUES ('ROLE_ADMIN');
INSERT INTO authority (name)
VALUES ('ROLE_AGENT');
INSERT INTO authority (name)
VALUES ('ROLE_USER');

INSERT INTO user(id, email, first_name, last_name, password, deleted)
VALUES (1, 'tomic@tomic.com', 'Tomke', 'Dazdarac', '$2a$10$VSlWn0nzWDB2Jxv7cx.sf.NakwjllWrSjdkWi66g2dMM.OdBGThlS', false);

INSERT INTO user(id, email, first_name, last_name, password, deleted)
VALUES (2, 'tomic.miroslav97@gmail.com', 'Miroslav', 'Tomic', '$2a$10$VSlWn0nzWDB2Jxv7cx.sf.NakwjllWrSjdkWi66g2dMM.OdBGThlS', false);

INSERT INTO user_authority(user_id, authority_id)
VALUES (1,2);

INSERT INTO user_authority(user_id, authority_id)
VALUES (2,1);


INSERT INTO agent(id)
VALUES (1);

--end users
INSERT INTO user(id, email, first_name, last_name, password)
VALUES (3, 'end@end.com', 'Krajnji', 'Korisnik', '$2a$10$VSlWn0nzWDB2Jxv7cx.sf.NakwjllWrSjdkWi66g2dMM.OdBGThlS');

INSERT INTO user_authority(user_id, authority_id)
VALUES (3,3);

INSERT INTO publisher_user(id, deleted)
VALUES (3, false);

INSERT INTO end_user(id, ad_limit_num, canceled_cnt, enabled, obliged)
VALUES (3, 3, 0, true, false);