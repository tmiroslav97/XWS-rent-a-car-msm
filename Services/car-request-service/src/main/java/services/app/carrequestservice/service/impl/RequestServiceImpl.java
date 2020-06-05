package services.app.carrequestservice.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import services.app.carrequestservice.converter.DateAPI;
import services.app.carrequestservice.dto.carreq.SubmitRequestDTO;
import services.app.carrequestservice.exception.NotFoundException;
import services.app.carrequestservice.model.Ad;
import services.app.carrequestservice.model.Request;
import services.app.carrequestservice.model.enumeration.RequestStatusEnum;
import services.app.carrequestservice.repository.RequestRepository;
import services.app.carrequestservice.service.intf.RequestService;

import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Service
public class RequestServiceImpl implements RequestService {

    @Autowired
    private RequestRepository requestRepository;


    @Override
    public Request findById(Long id) {
        return requestRepository.findById(id).orElseThrow(() -> new NotFoundException("Zahtjev za iznajmljivanje vozila ne postoji"));
    }

    @Override
    public List<Request> findAll() {
        return requestRepository.findAll();
    }

    @Override
    public Integer deleteById(Long id) {
        Request request = this.findById(id);
        this.delete(request);
        return 1;
    }

    @Override
    public Integer submitRequest(List<SubmitRequestDTO> submitRequestDTOS, Long userId) {
        for (SubmitRequestDTO submitRequestDTO : submitRequestDTOS) {
            Request request = null;
            if (submitRequestDTO.getBundle()) {
                Set<Ad> ads = new HashSet<>();
                for (Long adId : submitRequestDTO.getAdIds()) {
                    Ad ad = Ad.builder()
                            .id(adId)
                            .build();
                    ads.add(ad);
                }
                request = Request.builder()
                        .bundle(true)
                        .startDate(DateAPI.dateStringToDateTime(submitRequestDTO.getStartDate()))
                        .endDate(DateAPI.dateStringToDateTime(submitRequestDTO.getEndDate()))
                        .submitDate(DateAPI.DateTimeNow())
                        .status(RequestStatusEnum.PENDING)
                        .ads(ads)
                        .endUser(userId)
                        .build();
                this.save(request);
            } else {
                for (Long adId : submitRequestDTO.getAdIds()) {
                    Set<Ad> ads = new HashSet<>();
                    Ad ad = Ad.builder()
                            .id(adId)
                            .build();
                    ads.add(ad);
                    request = Request.builder()
                            .bundle(false)
                            .startDate(DateAPI.dateStringToDateTime(submitRequestDTO.getStartDate()))
                            .endDate(DateAPI.dateStringToDateTime(submitRequestDTO.getEndDate()))
                            .submitDate(DateAPI.dateTimeNow())
                            .status(RequestStatusEnum.PENDING)
                            .ads(ads)
                            .endUser(userId)
                            .build();
                    this.save(request);
                }
            }
        }
        return 1;
    }

    @Override
    public void delete(Request request) {
        requestRepository.delete(request);
    }

    @Override
    public Request save(Request request) {
        return requestRepository.save(request);
    }
}
