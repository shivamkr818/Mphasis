package in.bank.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.bank.project.model.Feedback;




public interface FeedbackRepository extends JpaRepository<Feedback, Integer>{

}
