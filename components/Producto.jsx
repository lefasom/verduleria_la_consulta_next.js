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
		}, 3000)

	const Giffer = () => {
		return(
			<>
			<style jsx>{`

				.containerOff{
					display:none;
				}
				.containerOn{
					position:absolute;
					width: 95%;
					display: flex;
				}
				.on{
					display:flex;
					margin:auto;
					position: relative;
					top:70px;
					background: #fff;
					width: 90%;
					opacity: .5;
					height:300px
				
				}
				.on img{
					
					height: 120px;
					
					margin:auto;
					margin-top:100px;
				
					opacity:.9
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
				<p>{"Productos ➟"}</p>
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