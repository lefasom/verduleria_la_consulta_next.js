import React, { useState } from 'react'

function SliderMio() {

	const [valor, setValor] = useState('')

	if(valor==''){

	
		return (<>

				<div className="container">
					hola mi nombre es...
				</div>


				<button onClick={()=>setValor("verMenos")}>
					mas
				</button>

			</>)
	}else{

		return (
			<>
				<div className="container">
					hola mi nombre es Leonardo Fabián Sombra, Tengo 29 años y soy estudiante de la universidad tecnologica nacional.
					<img src="img/jugo.webp" alt="jugos de verduras"/>
				</div>

				<button onClick={()=>setValor('')}>
					menos
				</button>
		</>
		)
	}
}

export default SliderMio