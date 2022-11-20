import Title from "../../components/Title";
import "./contact.css";

const Contact = () => {
  return (
    <div className="container">
      <Title text="Contact" />
      <div id="contact-page-content" className="row">
        <div className="col-xl-5">
          <p>Department of Applied Sciences &amp; Humanities</p>
          <p>
            Madras Institute of Technology, Anna University, Chromepet,
            Chennai-600044
          </p>
          <p>
            <i className="bi bi-telephone-fill"></i> 044-22516136
          </p>
        </div>
        <div className="py-3 col-xl-7">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7555.313370572543!2d80.143466210926!3d12.949412676797468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fac595c29ff%3A0xb76082ae18b51418!2sMadras%20Institute%20of%20Technology%2C%20Anna%20University!5e0!3m2!1sen!2sin!4v1653134025025!5m2!1sen!2sin"
            id="google-map"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
