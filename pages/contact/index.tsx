import Link from 'next/link'
import { MainnLayout } from '../../components/layouts/MainLayout'

export default function ContactPage() {
  return (
    <MainnLayout>

      <h1>Contact Page</h1>

        <h1 className='title'>
          {/* Ir a <a href="/about">About</a> */}
          Ir a <Link href="/">Home</Link>

        </h1>

        <p className='description'>
          Get started by editing{' '}
          <code className='code'>pages/contact.tsx</code>
        </p>

    </MainnLayout>
        

     
  )
}