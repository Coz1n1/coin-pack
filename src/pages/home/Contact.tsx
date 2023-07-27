import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef<any>();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [messageContent, setMessageContent] = useState<string>("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6bpqlbm",
        "template_p5zcksj",
        form.current,
        "Cio7LFNsQu1QwGLtF"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmail("");
          setName("");
          setMessageContent("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-content">
        <div className="contact-form-display">
          <span className="contact-header">Contact Us</span>
          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="contact-input"
              placeholder="Name..."
              name="name"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              value={name}
            />
            <input
              type="email"
              className="contact-input"
              placeholder="Email..."
              name="email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              value={email}
            />
            <textarea
              className="contact-textarea"
              name="message"
              placeholder="Message..."
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setMessageContent(e.target.value)
              }
              value={messageContent}
            />
            <button type="submit" className="contact-submit-button">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
