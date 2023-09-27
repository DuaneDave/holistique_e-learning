import React from 'react'

import styles from './ui.module.css'

function DisplayCard({ className, children}) {
  return (
    <div className={`grid ${styles.card} ${className}`}>
      {children}
    </div>
  )
}

export function Card({ className, children }) {
  return (
    <div className={`flex flex-col ${styles.portraitCard} ${className}`}>
      {children}
    </div>
  )
}

export default DisplayCard