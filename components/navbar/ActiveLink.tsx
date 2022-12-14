import React, { CSSProperties } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

interface ActiveLinkProps {
  text: string;
  href: string;
}

const style: CSSProperties = {
        color: '#0070f3',
        textDecoration: 'underline',
    }




export const ActiveLink = ({text, href}: ActiveLinkProps) => {

    const {asPath} = useRouter()

  return (
    <Link href={href}>
        <span style={ asPath === href ? style : undefined} >{text}</span>
    </Link> 
  )
}
