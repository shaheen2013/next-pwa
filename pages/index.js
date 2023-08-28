import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='container-pwa'>
      <div className='text-center my-2'>
          <img src={'/images/menu.png'}/>
      </div>
      <div className='d-flex flex-column gap-2'>
        <Link href={"/details"}>
          <div className='card card-item border-0'>
              <img src='/images/2.png' />
              <div className='card-details p-2'>
                  <h3 className='pt-2'>MUNICH</h3>
                  <div className='card-details-separator'>&nbsp;</div>
                  <h3 className='pt-2'>BAR DRINK</h3>
              </div>
          </div>
        </Link>
        <Link href={"/details"}>
          <div className='card card-item border-0'>
              <img src='/images/1.png' />
              <div className='card-details p-2'>
                  <h3 className='pt-2'>MUNICH</h3>
                  <div className='card-details-separator'>&nbsp;</div>
                  <h3 className='pt-2'>BAR DRINK</h3>
              </div>
          </div>
        </Link>
        <Link href={"/details"}>
          <div className='card card-item border-0'>
              <img src='/images/3.png'/>
              <div className='card-details p-2'>
                  <h3 className='pt-2'>MUNICH</h3>
                  <div className='card-details-separator'>&nbsp;</div>
                  <h3 className='pt-2'>BAR DRINK</h3>
              </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
