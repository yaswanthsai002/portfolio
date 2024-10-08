/* eslint-disable react/prop-types */
import linkedinIcon from "/icons/linkedin.svg";
import facebookIcon from "/icons/facebook.svg";
import whatsappIcon from "/icons/whatsapp.svg";
import mailIcon from "/icons/mail.svg";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/kotagiri-yaswanth-sai/",
    target: "_blank",
    ariaLabel: "Visit Yaswanth Sai's LinkedIn profile",
    src: linkedinIcon,
    alt: "Linkedin Icon",
  },
  {
    href: "https://www.facebook.com/yaswanthsaikotagiri007",
    target: "_blank",
    ariaLabel: "Visit Yaswanth Sai's Facebook profile",
    src: facebookIcon,
    alt: "Facebook Icon",
  },
  {
    href: "https://wa.me/+919100460289?text=Hi+Yaswanth",
    target: "_blank",
    ariaLabel: "Send a WhatsApp message to Yaswanth Sai",
    src: whatsappIcon,
    alt: "Whatsapp Icon",
  },
  {
    href: "mailto: yaswanthsaikotagiri1@gmail.com",
    ariaLabel: "Send an email to Yaswanth Sai",
    src: mailIcon,
    alt: "Mail Icon",
  },
];


const SocialIcons = ({isAnimated}) => {
  return (
    <div className="flex items-end gap-5 social-icons-container">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target={link.target || undefined}
          aria-label={link.ariaLabel}
          {...(isAnimated ? {
        'data-aos': 'zoom-in',
        'data-aos-offset': '0',
        'data-aos-delay': `${50 * index}`,
        'data-aos-duration': '500',
        'data-aos-easing': 'ease-in-out',
        'data-aos-mirror': 'true',
        'data-aos-once': 'true',
      } : {})}
        >
          <img src={link.src} alt={link.alt} className="w-6 md:w-8" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
