package services.app.pricelistanddiscountservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class PriceListAndDiscountServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(PriceListAndDiscountServiceApplication.class, args);
	}

}
