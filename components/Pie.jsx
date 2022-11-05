import React from 'react'
import styles from '/styles/pie.module.css'

function Pie() {
	return (
		<div className={styles.pieContainer}>
			<div id="contacto" className={styles.flex}>
			  <div>
			  	<h5>Contactanos</h5>
				<ul>
					<li>
						<img src="img/wsp.png" alt=""/>
						<h6>+54 262 243 2057</h6>
					</li>
					<li>
						<img src="img/instagram.png" alt=""/>
						<h6>laconsultaMarket@</h6>
					</li>
					<li>
						<img src="img/correo-electronico.png" alt=""/>
						<h6>laconsultaMarket@gmail.com</h6>
					</li>
				</ul>
			  </div>
			<div>
				<h5>Creador</h5>
				<ul>
					<li className={styles.li}>
						<a href="https://www.flaticon.es/iconos-gratis/supermercado" title="supermercado iconos">
							s-Website
						</a>
						<p>strove in the progress</p>
					</li>
				</ul>
			</div>
			<div>
				<h5>Colaboradores</h5>
				<ul>
					<li>
						<a href="https://www.flaticon.es/iconos-gratis/supermercado" title="supermercado iconos">Flaticon</a>
					</li>
				</ul>
			</div>
			
			</div>	
				<p>© 2022 verduleria-la-consulta.com</p>
		</div>
	)
}

export default Pie