//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.3.2 
// See <a href="https://javaee.github.io/jaxb-v2/">https://javaee.github.io/jaxb-v2/</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2020.06.20 at 08:05:58 PM CEST 
//


package org.w3._2001.xmlschema;

import javax.xml.bind.annotation.adapters.XmlAdapter;

public class Adapter3
    extends XmlAdapter<String, Double>
{


    public Double unmarshal(String value) {
        return (agent.app.converter.TypeConverter.parseDouble(value));
    }

    public String marshal(Double value) {
        return (agent.app.converter.TypeConverter.printDouble(value));
    }

}
