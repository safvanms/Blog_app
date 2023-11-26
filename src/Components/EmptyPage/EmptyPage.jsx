import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function EmptyPage() {
  const { page } = useParams()
  return (
    <div>
      <Header />
      <div style={{ height: '600px' }}>
        <h2 style={{ margin: '100px', textAlign: 'center' }}>{page} page</h2>
      </div>
      <Footer />
    </div>
  )
}
