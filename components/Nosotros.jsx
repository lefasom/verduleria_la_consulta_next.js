import React from 'react'
import styles from '/styles/nosotros.module.css'

function Nosotros() {
	return (
		<div id="nosotros"className={styles.nosotrosContainer}>
			<div className={styles.nosotros}>
				<h4>¿Quienes Somos?</h4>
			</div>
			<div className={styles.nosotros}>
				<p>
					La<span> verduleria La Consulta</span> se fundo hace 15 años.
				</p>
			</div>
			<div className={styles.nosotros}>
				<p>
					 Te trae la mayor variedad de producto posibles al mejor precio.
				</p>
			</div>
			<div className={styles.nosotros}>
				<p>
					Además cuenta con la mejor atencion que puedas tener.
				</p>
			</div>
		</div>

	)
}

export default Nosotros