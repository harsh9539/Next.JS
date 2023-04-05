import Link from 'next/link'
import React from 'react'

const ClientPage = () => {
  return (
    <div>
      <h1>This is client page</h1>
      <ul>
        {/* First way to navigate  */}
        <li>
          <Link href={"/client/min"}>Min</Link>
        </li>
        {/* second way to navigate or use link  */}
        <li>
          <Link href={{
            pathname:'/client/[id]',
            query:{id:'max'}
          }}>Max</Link>
        </li>
      </ul>
    </div>
  )
}

export default ClientPage
