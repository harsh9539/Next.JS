import { useRouter } from 'next/router'
import React from 'react'

const BlogPage = () => {
  const {query} = useRouter();
  console.log(query);
  return (
    <div>
      <h1>This is blog page</h1>
    </div>
  )
}

export default BlogPage
