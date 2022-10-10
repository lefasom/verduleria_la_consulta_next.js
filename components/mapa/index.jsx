import dynamic from 'next/dynamic'

const Mapa = dynamic(()=> import('/../../pages/Mapa'), {
 	ssr: false
})

export default Mapa