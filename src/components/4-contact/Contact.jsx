import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import contactAnimation from "../../animation/contact.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("mzzeeong");
  const whatsappNumber = "+905538375529";

  return (
    <section className="contact-us" id="contact">
      <div className="flex contact-header">
        <h1 className="title">
          <span className="icon-envelope"></span>
          Get in Touch
        </h1>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-icon"
          aria-label="Contact via WhatsApp"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>

      <p className="sub-title">
        Reach out for inquiries or get notified about my latest projects and
        updates. Im here to help bring your ideas to life!
      </p>

      <div className="flex contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
              placeholder="your.email@example.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">Your Message:</label>
            <textarea
              required
              name="message"
              id="message"
              placeholder="Let's create something amazing together..."
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="submit flex"
          >
            {state.submitting ? (
              <span className="loading"></span>
            ) : (
              <>
                Send Message
                <span className="icon-paper-plane"></span>
              </>
            )}
          </button>

          {state.succeeded && (
            <div className="success-message flex">
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
              <span>Message sent successfully! 🚀</span>
            </div>
          )}
        </form>

        <div className="animation contact-illustration">
          <Lottie
            className="contact-animation"
            style={{ height: 355 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
