import React from 'react'
import type { ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode;
 }

export const DarkLayout = ({children}: LayoutProps) => {
  return (
    <div style={{
        backgroundColor: 'rgba(120,120,120,0.5)',
        borderRadius: '5px',
        padding: '10px',
    }}>
        <h3> Dark-Layout</h3>
        <div>
            {children}
        </div>
    </div>
   )
}
