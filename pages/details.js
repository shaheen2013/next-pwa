import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='container-pwa'>
      <div className='text-center m-2 mb-3 d-flex justify-content-between'>
          <img src={'/images/add.png'} className='w-2' />
          <img src={'/images/refresh.png'} className='w-2'/>
          <Link href={"/"}><img src={'/images/close.png'} className='w-2'/></Link>
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
      </div>
      <div className='d-flex flex-column gap-2 mx-3'>
        <div className='p-2 border-0 shadow-md d-flex justify-content-between'>
            <div className='d-flex justify-content-center align-items-center gap-2'>
                <span className='counter'>1</span>
                <span className='lead'>1. Ory Bar</span>
            </div>
            <img src='/images/arrow.png' className='w-3'/>
        </div>
        <div className='p-2 border-0 shadow-md d-flex justify-content-between'>
            <div className='d-flex justify-content-center align-items-center gap-2'>
                <span className='counter'>2</span>
                <span className='lead'>2. Bar Gabanyi</span>
            </div>
            <img src='/images/arrow.png' className='w-3'/>
        </div>
        <div className='p-2 border-0 shadow-md d-flex justify-content-between'>
            <div className='d-flex justify-content-center align-items-center gap-2'>
                <span className='counter'>3</span>
                <span className='lead'>3. Falk's Bar</span>
            </div>
            <img src='/images/arrow.png' className='w-3'/>
        </div>
        <div className='p-2 border-0 shadow-md d-flex justify-content-between'>
            <div className='d-flex justify-content-center align-items-center gap-2'>
                <span className='counter'>4</span>
                <span className='lead'>4. Jaded Monkey B...</span>
            </div>
            <img src='/images/arrow.png' className='w-3'/>
        </div>
        <div className='p-2 border-0 shadow-md d-flex justify-content-between'>
            <div className='d-flex justify-content-center align-items-center gap-2'>
                <span className='counter'>5</span>
                <span className='lead'>5. Flushing Meado...</span>
            </div>
            <img src='/images/arrow.png' className='w-3'/>
        </div>
      </div>
    </div>
  )
}
