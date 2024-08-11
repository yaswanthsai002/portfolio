/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { Pagination, Navigation, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const skillsCertificates = [
  {
    certificateId: "DTEOGSBJFS",
    certificateImageUrl: "src/assets/react-js.webp",
    certificateUrl:
      "https://certificates.ccbp.in/intensive/react-js?id=DTEOGSBJFS",
  },
  {
    certificateId: "KKYFYKFQUB",
    certificateImageUrl: "src/assets/node-js.webp",
    certificateUrl:
      "https://certificates.ccbp.in/intensive/node-js?id=KKYFYKFQUB",
  },
  {
    certificateId: "QJWLKYMHSA",
    certificateImageUrl: "src/assets/developer-foundations.jpg",
    certificateUrl:
      "https://certificates.ccbp.in/intensive/developer-foundations?id=QJWLKYMHSA",
  },
  {
    certificateId: "SSGQUDVNGQ",
    certificateImageUrl: "src/assets/javascript-essentials.jpg",
    certificateUrl:
      "https://certificates.ccbp.in/intensive/javascript-essentials?id=SSGQUDVNGQ",
  },
  {
    certificateId: "VSYVGNGBNJ",
    certificateImageUrl: "src/assets/flexbox.jpg",
    certificateUrl:
      "https://certificates.ccbp.in/intensive/flexbox?id=VSYVGNGBNJ",
  },
  {
    certificateId: "OPIRTDQTOW",
    certificateImageUrl: "src/assets/dynamic-web-application.jpg",
    certificateUrl:
      "https://certificates.ccbp.in/intensive/dynamic-web-application?id=OPIRTDQTOW",
  },
  {
    certificateId: "MLQRNSEPWL",
    certificateImageUrl: "src/assets/programming-foundations.jpg",
    certificateUrl:
      "https://certificates.ccbp.in/intensive/programming-foundations?id=MLQRNSEPWL",
  },
  {
    certificateId: "MTPTPSXLBB",
    certificateImageUrl: "src/assets/introduction-to-databases.jpg",
    certificateUrl:
      "https://certificates.ccbp.in/intensive/introduction-to-databases?id=MTPTPSXLBB",
  },
  {
    certificateId: "PGJOMXXTFD",
    certificateImageUrl: "src/assets/responsive-website.jpg",
    certificateUrl:
      "https://certificates.ccbp.in/intensive/responsive-website?id=PGJOMXXTFD",
  },
  {
    certificateId: "GWZDOQVTBC",
    certificateImageUrl: "src/assets/static-website.jpg",
    certificateUrl:
      "https://certificates.ccbp.in/intensive/static-website?id=GWZDOQVTBC",
  },
  {
    certificateId: "TFTHWDQTHU7E",
    certificateImageUrl: "src/assets/software-development.jpg",
    certificateUrl:
      "https://www.coursera.org/account/accomplishments/verify/TFTHWDQTHU7E",
  },
  {
    certificateId: "YBAJDB54MXCU",
    certificateImageUrl: "src/assets/c-for-everyone.jpg",
    certificateUrl:
      "https://www.coursera.org/account/accomplishments/verify/YBAJDB54MXCU",
  },
  {
    certificateId: "YV7PR94ZEMZZ",
    certificateImageUrl: "src/assets/python-for-everybody.jpg",
    certificateUrl:
      "https://www.coursera.org/account/accomplishments/verify/YV7PR94ZEMZZ",
  },
  {
    certificateId: "W5ZP5GJF5NYW",
    certificateImageUrl: "src/assets/python-data-structures.jpg",
    certificateUrl:
      "https://www.coursera.org/account/accomplishments/certificate/W5ZP5GJF5NYW",
  },
  {
    certificateId: "WCYF3R3PAMHK",
    certificateImageUrl: "src/assets/python-to-access-web-data.jpg",
    certificateUrl:
      "https://www.coursera.org/account/accomplishments/verify/WCYF3R3PAMHK",
  },
];

const CertificatesCarousel = () => {
  return (
    <div className="w-full skills-certificates-carousel lg:w-[40%]">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          type: "bullets",
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        lazy="true"
        loop={true}
        modules={[Pagination, Navigation, Autoplay, Keyboard]}
      >
        {skillsCertificates.map((certificate) => (
          <SwiperSlide key={certificate.certificateId}>
            <a
              href={certificate.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={certificate.certificateImageUrl}
                alt="certificate"
                loading="lazy"
                className="w-full aspect-[4/3]"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="relative flex justify-center w-full -bottom-8">
        <div className="flex items-end justify-between w-full p-2 lg:w-3/4 swiper-buttons">
          <div className="h-full swiper-button-prev after:content-none">
            <FaArrowLeft className="text-white" />
          </div>
          <div className="h-full swiper-pagination"></div>
          <div className="h-full swiper-button-next after:content-none">
            <FaArrowRight className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesCarousel;
