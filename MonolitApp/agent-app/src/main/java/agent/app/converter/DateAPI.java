package agent.app.converter;

import org.joda.time.DateTime;
import org.joda.time.DateTimeZone;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;


public class DateAPI {

    public static DateTime DateTimeNow(){
        return new DateTime(DateTimeZone.UTC);
    }

    public static DateTime DateTimeFromString(String date){
        DateTimeFormatter dtf = DateTimeFormat.forPattern("yyyy-MM-dd HH:mm:ss'Z'");
        return dtf.parseDateTime(date);
    }

    public static DateTime DateTimeFromDateString(String date){
        DateTimeFormatter dtf = DateTimeFormat.forPattern("yyyy-MM-dd");
        return dtf.parseDateTime(date);
    }
}
