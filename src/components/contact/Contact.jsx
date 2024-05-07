import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"

export default function Contact () {

    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
        .sendForm(
            import.meta.env.VITE_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID, 
            form.current, {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
        })
        .then(
            () => {
            console.log('SUCCESS!');
            form.current.reset();
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };

    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Get In Touch</h2>
            
            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Let's talk about everything!</h3>
                    <p className="contact__details">Send me an email</p>
                </div>

                <form action="" className="contact__form" ref={form} onSubmit={sendEmail}>
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input type="text" className="contact__form-input" name="user_name" placeholder="Your name" />                        
                        </div>

                        <div className="contact__form-div">
                            <input type="email" className="contact__form-input" name="user_email" placeholder="Your email" />                        
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <input type="text" className="contact__form-input" name="user_subject" placeholder="Subject" />                        
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <textarea 
                            name="message" 
                            id="" 
                            cols="30" 
                            rows="10" 
                            className="contact__form-input" 
                            placeholder="Message"
                        ></textarea>
                    </div>

                    <button className="btn" type="submit">Send Message</button>

                </form>
            </div>
        </section>
    )
}