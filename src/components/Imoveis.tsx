import { BiBath, BiBed, BiCar, BiHotel } from 'react-icons/bi'
import { GrCafeteria, GrRestroom } from 'react-icons/gr'
import { AiFillFire } from 'react-icons/ai'
import { GiSofa } from 'react-icons/gi'
import { MdLocalLaundryService } from 'react-icons/md'

import { motion } from "framer-motion"

interface IImoveis {
  imovel: IImovel;
}
interface IImovel {
  codigo: number,
  nome: string,
  urlImage: string,
  tamanho: string,
  bairro: string,
  descricao: string,

  quarto: number,
  suite: number,
  sala: number,
  cozinha: number,
  banheiro: number,
  garagem: number,
  edicula: number,
  lavanderia: number,
}
export function Imovel({ imovel }: IImoveis) {
  return (
    <div className='absolute h-screen'>
      <div className="flex flex-col gap-4 absolute bg-black/70 p-4 left-6 bottom-6 rounded-lg">
        <h1 className='text-4xl font-bold text-white'>{imovel.codigo} - {imovel.nome}</h1>
        <span className='text-2xl font-semibold text-white'>{imovel.tamanho}</span>

        <ul className="w-96 grid grid-cols-5 gap-4">

          {imovel.quarto > 0 ?
            <li className='flex'>
              <span className='text-2xl mr-1 text-white'>{imovel.quarto}</span><BiBed color='#fff' size={32} />
            </li>
            : ""
          }

          {imovel.suite > 0 ?
            <li className='flex'>
              <span className='text-2xl mr-1 text-white'>{imovel.suite}</span><BiBath color='#fff' size={32} />
            </li>
            : ""
          }

          {imovel.sala > 0 ?
            <li className='flex'>
              <span className='text-2xl mr-1 text-white'>{imovel.sala}</span><GiSofa color='#fff' size={32} />
            </li>
            : ""
          }

          {imovel.cozinha > 0 ?
            <li className='flex'>
              <span className='text-2xl mr-1 text-white'>{imovel.cozinha}</span><GrCafeteria color='#fff' size={32} />
            </li>
            : ""
          }

          {imovel.banheiro > 0 ?
            <li className='flex'>
              <span className='text-2xl mr-1 text-white'>{imovel.banheiro}</span><GrRestroom color='#fff' fill='#ffffff' size={32} />
            </li>
            : ""
          }

          {imovel.garagem > 0 ?
            <li className='flex'>
              <span className='text-2xl mr-1 text-white'>{imovel.garagem}</span><BiCar color='#fff' size={32} />
            </li>
            : ""
          }

          {imovel.edicula > 0 ?
            <li className='flex'>
              <span className='text-2xl mr-1 text-white'>{imovel.edicula}</span><AiFillFire color='#fff' size={32} />
            </li>
            : ""
          }

          {imovel.lavanderia > 0 ?
            <li className='flex'>
              <span className='text-2xl mr-1 text-white'>{imovel.lavanderia}</span><MdLocalLaundryService color='#fff' size={32} />
            </li>
            : ""
          }
        </ul>
      </div>
      <div className='flex w-screen'>
        <img className='w-screen' src={imovel.urlImage} alt="" />
      </div>
    </div>
  )
}