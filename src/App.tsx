import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import { Imovel } from './components/Imoveis'
import dados from './database/imobiliaria.json'
import {motion} from "framer-motion"

function App() {
  return (
    <div className="flex w-scren h-screen bg-red-500">
      <Swiper
        centeredSlides={true}

        slidesPerView={1}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        loop={true}
        modules={[Autoplay]}
        speed={700}
      >
        {dados.map(imovel => {
          return (
            <SwiperSlide key={imovel.codigo} className='flex w-screen'>
              <motion.div className='block'  animate={{
      scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
    }} transition={{
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
      
      repeatDelay: 1
    }}>
                <Imovel imovel={imovel} />

              </motion.div>
            </SwiperSlide>
          )
        })}

      </Swiper>

    </div>
  )
}

export default App
