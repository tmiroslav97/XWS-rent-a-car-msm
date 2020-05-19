package services.app.adservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import services.app.adservice.model.Comment;

public interface CommentRepository  extends JpaRepository<Comment, Long> {
}
