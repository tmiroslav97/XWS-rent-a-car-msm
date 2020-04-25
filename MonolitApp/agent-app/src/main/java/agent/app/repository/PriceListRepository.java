package agent.app.repository;

import agent.app.model.Ad;
import agent.app.model.PriceList;
import org.joda.time.DateTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PriceListRepository extends JpaRepository<Ad,Long> {

    @Query("select pl from PriceList pl where pl.startDate<=(?2) and pl.endDate>=(?2)")
    List<PriceList> findByDate(DateTime date);



}
