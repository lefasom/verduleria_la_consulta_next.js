import React, { useState } from 'react'
import Link from 'next/link'
import styles from '/styles/galeria.module.css'

function Galeria() {
	const galeria = [
	{
		img:'/img/jengibre.webp',
		description:'vacio',
	},
	{
		img:'/img/frutilla.jpg',
		description:'vacio',
	},
	{
		img:'/img/jugo.webp',
		description:'vacio',
	}
	]

	const [valor, setValor] = useState('ver-mas')

	if(valor=="ver-mas"){
		return (
		<div id="Galeria">
			<div className={styles.titulo}>
				<img src="/img/camera (1).png" alt=""/>
			</div>
			<div className={styles.parentImg}>
				<div>
					<img src={galeria[0].img} alt="producto" />
				</div>
				<button onClick={()=>setValor('ver-menos')}>
					ver más
				</button>
			</div>
		</div>
		)
	}else{
	return (
		<div id="Galeria">
			<div className={styles.titulo}>
				<img src="/img/camera (1).png" alt=""/>
			</div>
			<div className={styles.parentImg}>
			{galeria.map((val,index)=>{
				return(
					<div key={index}>
						<img src={val.img} alt="producto" />
						
					</div>
				)
			})}
				<button onClick={()=>setValor('ver-mas')}>
					ver ménos
				</button>
			</div>
		</div>
		)
	}
}

export default Galeria