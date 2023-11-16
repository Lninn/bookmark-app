'use client'

import React from 'react'

async function query() {
  try {
    const res = await fetch('/api')
    const data = await res.json()
    console.log('debug ', data)
  } catch (error) {
    console.log('error')
  }
}

const Demo = () => {
  React.useEffect(() => {
    query()
  }, [])

  return (
    <div>Demo</div>
  )
}

export default Demo
