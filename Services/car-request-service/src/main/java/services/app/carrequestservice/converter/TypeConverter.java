package services.app.carrequestservice.converter;

public class TypeConverter {

    public static Long parseLong(String longStr) {
        return Long.valueOf(longStr);
    }

    public static String printLong(Long longVal) {
        return longVal.toString();
    }

    public static Integer parseInteger(String intStr) {
        return Integer.valueOf(intStr);
    }

    public static String printInteger(Integer intVal) {
        return intVal.toString();
    }

    public static Boolean parseBoolean(String boolStr) {
        return Boolean.valueOf(boolStr);
    }

    public static String printBoolean(Boolean boolVal) {
        return boolVal.toString();
    }
}
