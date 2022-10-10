import React from 'react'
import Image from 'next/image'


import styles from '/styles/blog.module.css'
function Blog() {
	return (<div className={styles.blog}>
			<h2 id="blog">Blog</h2>
		<div className={styles.blogContainer}>
			{/*<div className={styles.vida}>
				<img src="/img/jugo.webp" alt="" />
				<div className={styles.link}>
					<h3>Jugos supervitamínicos con vegetales y frutas frescas</h3>
					<a href="https://www.cuerpomente.com/recetas-veganas/zumos-smoothies/zumos-vegetales-frutas-frescas_6357">Leer</a>
				</div>
				<h4>Salud</h4>
				<p>
					Estos cócteles de vitaminas y minerales son una sabrosa y
				    fácil manera de consumir fruta y verdura. ¡Aprovecha
				    y cárgate de antioxidantes y energía!
				</p>
			</div>*/}
			<div className={styles.vida}>
				<Image src={"/img/jengibre.webp"}  width={500} height={350}/>	
				<div className={styles.link}>
					<h3>11 Beneficios probados del jengibre para la salud</h3>
					<a href="https://www.healthline.com/health/es/beneficios-del-jengibre">Leer</a>
				</div>
				<h4>Nutricion</h4>
				<p> 
				 	El jengibre se ha utilizado para ayudar a la digestión,
				 	reducir la náusea y ayudar a combatir la gripe y
				 	el resfriado común,
				 	por nombrar algunos de sus propósitos
				</p>
			</div>
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
	)
}

export default Blog