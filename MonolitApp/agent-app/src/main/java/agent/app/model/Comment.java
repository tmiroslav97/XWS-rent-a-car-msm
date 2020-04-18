package agent.app.model;

import org.joda.time.DateTime;

public class Comment {

    private Long id;
    private String content;
    private DateTime creationDate;
    private Boolean approved;
    private PublisherUser publisherUser;
    private Ad ad;
}