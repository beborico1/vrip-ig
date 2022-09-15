import Head from 'next/head'
import Header from '../components/Header'
import Modal from '../components/Modal'
import Feed from '../components/Feed'

export default function Home() {
  return (
    
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Vrip</title>
        <meta name="description" content="Released by Vrip Co. in 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */} 
      <Header/> 
      <Modal/>
      {/* Feed */}
      <Feed/>
      {/* Modal */}
      
      </div>
  )
}
