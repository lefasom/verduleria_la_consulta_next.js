import Image from 'next/image'
// import Stripe from './stripe/Stripe.jsx'
import styles from '/styles/producto.module.css'
import React, { useState } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import Slider from './Slider.jsx'



function Producto() {
	const [ gifs, setGifs ] = useState('containerOn')

	setTimeout(function animation(){
			setGifs('containerOff')
		}, 2000)

	const Giffer = () => {
		return(
			<>
			<style jsx>{`

				.containerOff{
					display: none;
				}
				.containerOn{
					position: absolute;
					width: 95%;
					display: flex;
				}
				.on{
					margin: auto;
					display: flex;
					position: relative;
					border-radius: 100%;
					background: #fff;
					top: 150px;
					width: 110px;
					height: 110px;
					opacity: .4;
				}
				.on img{
					height: 80px;
					margin: auto;
					opacity: .9;
				}

				`}</style>
			<div className={gifs}>
				<div className="on">
					<img src="/img/touch.gif" alt="" />
				</div>
			</div>
		</>)
	}
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
	},
	{
		img:"/img/jengibre.webp",
		description:"Jengibre",
		precio:"$600 x kilo"
	}
	]

	return (
	<>		
		
			<Giffer />
			<div className={styles.indicadorNext}>
				<p>{"← Desplazar"}</p>
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