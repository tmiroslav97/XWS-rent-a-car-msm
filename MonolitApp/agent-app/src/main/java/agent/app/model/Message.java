package agent.app.model;

import org.joda.time.DateTime;

public class Message {

    private Long id;

    private DateTime sendDate;

    private String content;

    private Request request;

    private PublisherUser sender;

    private PublisherUser reciever;

}