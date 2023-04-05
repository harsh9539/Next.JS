import { useRouter } from 'next/router'
import React from 'react'

const SelectedClientPage = () => {
  const {query,push} = useRouter();
  console.log(query);

  const loadProjectHandler = () =>{
    // first method to push
    // push("/client/max/projectA")
    // second method to push is 
    push({
      pathname:'/client/[id]/[clientId]',
      query:{id:query.id,clientId:'A'}
    })
  }
  return (
    <div>
      <h1>This is SelectedClientPage</h1>
      <button onClick={loadProjectHandler}>Load project A</button>
    </div>
  )
}

export default SelectedClientPage
