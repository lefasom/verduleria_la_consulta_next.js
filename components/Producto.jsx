import Image from 'next/image'
// import Stripe from './stripe/Stripe.jsx'
import styles from '/styles/producto.module.css'
import React,{ useState } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import Slider from './Slider.jsx'



function Producto() {

	const producto = [
	{
		img:"/img/frutilla.webp",
		description:"Frutilla mendocina",
		precio:"$599 x kilo"
	},
	{
		img:"/img/almendra.jpg",
		description:"Almendras",
		precio:"$350 x 100g"
	},
	{
		img:"/img/kale.webp",
		description:"Kale",
		precio:"$50 x Pack grande"
	},
	{
		img:"/img/jengibre.webp",
		description:"Jengibre",
		precio:"$600 x kilo"
	}
	]

	return (
	<>
			<div className={styles.indicadorNext}>
				<p>{">"}</p>
			</div>	
			<div className={styles.productoContainer}>
			
				<div className={styles.productos}>
				{producto.map((val,index)=>{
					return(
							<div key={index}>
								<img src={val.img}/>
								<h5>{val.description}</h5>
								<p>{val.precio}</p>
							</div>
						)
				})}
				</div>
			</div>
	    </>
	)
}
export default Producto