import React from 'react'
import styles from '/styles/mail.module.css'

function Mail() {
	return (
		<div className={styles.formContainer}>
			<h2 id="mail">Reseña</h2>
			<form className={styles.form}>
			<input type="mail" placeholder="Mail"/>
			<input type="text" placeholder="Nombre"/>
			<input type="text" placeholder="Mensaje"/>
			<button className="btn btn-success">
				Enviar
			</button>
			</form>
		</div>
	)
}

export default Mail