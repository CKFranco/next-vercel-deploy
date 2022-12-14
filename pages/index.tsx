import Link from 'next/link'
import { MainnLayout } from '../components/layouts/MainLayout'

export default function HomePage() {
  return (
    <MainnLayout>
      <h1>Home Page</h1>

      <h1 className='title'>
        {/* Ir a <a href="/about">About</a> */}
        Ir a <Link href="/about">About</Link>

      </h1>
      <h1 className='title'>
        {/* Ir a <a href="/about">About</a> */}
        Ir a <Link href="/contact">Conatct</Link>

      </h1>
      <h1 className='title'>
        {/* Ir a <a href="/about">About</a> */}
        Ir a <Link href="/pricing">Pricing</Link>

      </h1>

      <p className='description'>
        Get started by editing{' '}
        <code className='code'>pages/index.tsx</code>
      </p>
    </MainnLayout>
  )
}
