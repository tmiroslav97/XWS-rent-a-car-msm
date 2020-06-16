INSERT INTO carreq_db.ad(id)
VALUES (1);

INSERT INTO carreq_db.ad(id)
VALUES (2);

INSERT INTO carreq_db.ad(id)
VALUES (3);

INSERT INTO carreq_db.request(id, status, submit_date, end_user, publisher_user, ad_name, start_date, end_date)
VALUES (1, 'PENDING', STR_TO_DATE('16.06.2020 22:49:00','%d.%m.%Y %H:%i:%S'), 5, 3,  'Audi A8', STR_TO_DATE('22.06.2020 10:00:00','%d.%m.%Y %H:%i:%S'), STR_TO_DATE('26.06.2020 10:00:00','%d.%m.%Y %H:%i:%S'));

INSERT INTO carreq_db.request_ads(request_id, ads_id)
VALUES (1, 1);

INSERT INTO carreq_db.request(id, status, submit_date, end_user, publisher_user, ad_name, start_date, end_date)
VALUES (2, 'PENDING', STR_TO_DATE('16.06.2020 22:49:00','%d.%m.%Y %H:%i:%S'), 5, 3, 'Audi A6', STR_TO_DATE('22.06.2020 10:00:00','%d.%m.%Y %H:%i:%S'), STR_TO_DATE('26.06.2020 10:00:00','%d.%m.%Y %H:%i:%S'));

INSERT INTO carreq_db.request_ads(request_id, ads_id)
VALUES (2, 2);