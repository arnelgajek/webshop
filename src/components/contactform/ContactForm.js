import React from "react";

import "./ContactForm.css";

class ContactForm extends React.Component {
  render() {
    return (
      <div className="ui grid">
        <div className="contact-form-placeholder ui form">
          <div className="three field">
            <label className="label-contactform">Email Address</label>
            <input type="email" name="email-address" placeholder="Email Address" />
            <label className="label-contactform">Subject</label>
            <input type="text" name="subject" placeholder="Subject" />
            <label className="label-contactform">Message</label>
            <div className="field">
              <textarea rows="4" placeholder="Write your message here..." />
            </div>
          </div>
          <div className="ui green basic button">Send</div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
