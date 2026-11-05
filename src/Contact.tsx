import "./project.css";
import "./Contact.css";
import { useState } from "react";
import { IoLogoFigma, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export default function Contact() {

  const [status, setStatus] = useState('IDLE');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('SUBMITTING');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/mjykajag', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('SUCCESS');
        (e.target as HTMLFormElement).reset();
      } else {
        const data = await response.json();
        if (data.errors && data.errors.length > 0) {
          setErrorMessage(data.errors.map((err: { message: string }) => err.message).join(', '));
        } else {
          setErrorMessage('There was a problem submitting your form.');
        }
        setStatus('ERROR');
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage('Network error. Please check your connection.');
      }
      setStatus('ERROR');
    }
  };



  return (
    <div id="next-steps" style={{ position: "relative", minHeight: "100vh" }}>
     
      <div className="contact-container">
        <form onSubmit={handleSubmit}>
        <div className="contact-section">
          <h2>Contact</h2>
          <label htmlFor="email" className="email-label">
            <div className="email-input">
              <h5>Email:</h5>
              <input
                type="email"
                id="email"
                name="email"
                required
                disabled={status === 'SUBMITTING'}
                placeholder="Enter valid Email address"
              />
              <h5>Name:</h5>
              <input
                type="text"
                id="name"
                name="userName"
                required
                disabled={status === 'SUBMITTING'}
                placeholder="Your name"
              />
            </div>
          </label>
          <div className="text-area-div">
            <label htmlFor="message" className="message-label">
              <h5>Message:</h5>
            </label>
            <textarea
              id="message"
              name="message"
              required
              disabled={status === 'SUBMITTING'}
              placeholder="Enter your message here..."
              rows={4}
              cols={40}
              style={{ resize: "none", fontFamily: "Cormorant Garamond", fontSize: "16px" }}
            ></textarea>
{status === 'SUCCESS' && (
        <p style={{ color: 'green', marginTop: '1rem' ,fontFamily: "Cormorant Garamond",}}>
          Thank you! Your message has been sent successfully.
        </p>
      )}

      {status === 'ERROR' && (
        <p style={{ color: 'red', marginTop: '1rem' ,fontFamily: "Cormorant Garamond",}}>
          {errorMessage}
        </p>
      )}
          </div>

          <div className="submit-btn-div">
            <button className="submit-email-btn">
              Submit your request</button>
          </div>
        </div>
        </form>

        
        <ul>
          <li>
            <a href="https://github.com/sarahamm" target="_blank">
            <svg
                className="button-icon"
                role="presentation"
                aria-hidden="true"
              > 
              <IoLogoGithub /></svg>
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.figma.com/@775e269f_ed94_4" target="_blank">
              <svg
                className="button-icon"
                role="presentation"
                aria-hidden="true"
              >
                <IoLogoFigma />
              </svg>
              Figma
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sarah-ammaireh-a315512ba/"
              target="_blank"
            >
              <svg
                className="button-icon"
                role="presentation"
                aria-hidden="true"
              >
                <IoLogoLinkedin />

              </svg>
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
