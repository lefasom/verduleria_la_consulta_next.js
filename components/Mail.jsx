import React, { useState, useRef } from 'react';
import styles from '/styles/mail.module.css'
import emailjs from '@emailjs/browser';

function Mail() {

	const form = useRef()

	const sendEmail = (e) => {
	    e.preventDefault();
	    console.log(e.target.value)
	    emailjs.sendForm('service_bhkjv1u', 'template_vynj38q', form.current, 'q2hqkGBcC1d-sc4Ub')
	      .then((result) => {
	          console.log(result.text);
	      }, (error) => {
	          console.log(error.text);
	      });
  	};
	return (
		<div className={styles.formContainer}>
			
			<div id="email" className={styles.titulo}>
				<img src="/img/email.png" alt=""/>
			</div>
			
			<form className={styles.form} ref={form}>
			<h4>Contactanos</h4>
			<input type="mail" placeholder="Email" name="email" />
			<input type="text" placeholder="Nombre" name="name" />
			<input type="text" placeholder="Mensaje" name="message" />
			<button onClick={sendEmail} className="btn btn-success">
				Enviar
			</button>
			</form>
		</div>
	)
}

export default Mail