import Link from 'next/link'
import type { ReactElement } from 'react'
import { MainnLayout } from '../components/layouts/MainLayout'
import { DarkLayout } from '../components/layouts/DarkLayout';
import type { NextPageWithLayout } from './_app'


const AboutPage: NextPageWithLayout = () => {
  return (
   
    <>
        <h1>About Page</h1>
        <h1 className='title'>
          {/* Ir a <a href="/">Home</a> */}
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className='description'>
          Get started by editing{' '}
          <code className='code'>pages/about.tsx</code>
        </p>
    </>
     
  )
}

AboutPage.getLayout = function getLayout (page: ReactElement){
  return(
    <MainnLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainnLayout>
  )
}

export default AboutPage