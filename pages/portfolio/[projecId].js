import React from 'react'
import { useRouter } from 'next/router'



const PortfolioPageSetup = () => {
  const value = useRouter();
  console.log(value.query );
  return (
    <div>
      <h1>PortfolioPageSetup</h1>
    </div>
  )
}

export default PortfolioPageSetup
