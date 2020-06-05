package services.app.adservice.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import services.app.adservice.model.Ad;

@Repository
public interface AdRepository  extends JpaRepository<Ad, Long> {

//    @Query("SELECT ad FROM Ad ad WHERE  ad.deleted=(?1) AND ad.publisherUser.email=(?2)")
//    Page<Ad> findAllByDeletedAndPublisherUserEmail(Boolean deleted, String email, Pageable pageable);

    Page<Ad> findAllByDeleted(Boolean deleted, Pageable pageable);
}
