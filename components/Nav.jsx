import  Link  from 'next/link'
import styles from '/styles/nav.module.css'


function Nav() {
	const nombre = "LA CONSULTA"
	return (
		
		<div className={styles.navContainer}>
			<div className={styles.nav}>
				<Link href="https://www.google.com.ar/maps/place/Verduler%C3%ADa+La+Consulta/
				@-33.7341751,-69.1351943,15z/data=!4m9!1m2!2m1!1sverduleria+la+consulta!3m5!1
				s0x967c3d68892d7e5f:0xada57119f87c16c4!8m2!3d-33.7348863!4d-69.1242061!15sChZ
				2ZXJkdWxlcmlhIGxhIGNvbnN1bHRhWhgiFnZlcmR1bGVyaWEgbGEgY29uc3VsdGGSARlmcnVpdF9h
				bmRfdmVnZXRhYmxlX3N0b3Jl4AEA">
					Ubicacion
				</Link>
				<Link href="#nosotros">
					Nosotros
				</Link>
			</div>
		    <div className={styles.div}>  
				<img src="img/La Consulta.png" alt="" />
			</div>
		</div>
	)
}

export default Nav