import React from 'react'
import Image from 'next/image'


import styles from '/styles/blog.module.css'
function Blog() {
	return (

		<div className={styles.blog}>
			<div id="Blog" className={styles.titulo}>
				<img src="/img/articulo.png" alt="" />
			</div>
		<div className={styles.blogContainer}>
			<div>
				<div className={styles.vida}>
					<Image src={"/img/kale.webp"} width={500} height={350}/>
					<div className={styles.link}>
						<h3>Superalimento Kale: beneficios, recetas y tips</h3>
						<a href="https://www.recepedia.com/es-ar/trucos-y-tips/la-verdura-que-se-volvio-tendencia-kale/">Leer</a>
					</div>
					<h4>Ciencia</h4>
					<p>
						Es bajo en calorías, y además tiene ácido fólico, 
						vitaminas C, K, E y B6, potasio,
						hierro, fósforo, manganeso. 
						Además, posee más proteínas que hidratos de carbono,
						propiedades depurativas,
						antiinflamatorias y regula el intestino. 
						Es altamente recomendado el consumo de
						kale para fortalecer la masa ósea.
					</p>
				</div>
			</div>
		</div>
		</div>
	)
}

export default Blog