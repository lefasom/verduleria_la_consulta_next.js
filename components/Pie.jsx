import React from 'react'
import styles from '/styles/pie.module.css'

function Pie() {
	return (
		<div className={styles.pieContainer}>
			<div id="contacto">
					<h5>Contactanos:</h5>
				<ul>
					<li>WhatsApp: 262 243 2057</li>
					<li>Facebook: laconsultaMarket@outlook.com</li>
					<li>Instagram: laconsultaMarket@</li>
					<li>Mail: laconsultaMarket@gmail.com</li>
				</ul>
			{/*	<h5>Creadores:</h5>
				<ul>
					<li>
						<a href="https://www.flaticon.es/iconos-gratis/supermercado" title="supermercado iconos">s-website - strive for progress</a>
					</li>
				</ul>*/}
				<h5>Colaboradores:</h5>
				<ul>
					<li>
						<a href="https://www.flaticon.es/iconos-gratis/supermercado" title="supermercado iconos">Iconos creados por iconixar - Flaticon</a>
					</li>
				</ul>
				<p>© 2022 verduleria-la-consulta.com</p>
			</div>	
		</div>
	)
}

export default Pie