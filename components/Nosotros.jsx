import React from 'react'
import styles from '/styles/nosotros.module.css'

function Nosotros() {
	return (
		<div id="nosotros"className={styles.nosotrosContainer}>
			<div className={styles.nosotros}>
				
				<h4>¿Quienes Somos?</h4>
				<p>
					La verduleria La Consulta nacio hace 15 años.
					
					
					<br/>
					<br/>
					Hoy contamos con una gran experiencia en el mercado,
					<br/> para traerte la mayor variedad de producto posibles al mejor precio.
					
					
					<br/>
					<br/>

					Además contamos con la mejor atencion que puedas tener, ofreciendote no solo un buen producto, 
					<br/>sino tambien sacandote cualquier tipo de dudas dentro de nuestro rubro.
				</p>
			</div>
		</div>

	)
}

export default Nosotros