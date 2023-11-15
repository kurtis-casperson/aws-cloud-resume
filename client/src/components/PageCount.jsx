import { useState } from 'react'

const PageCount = () => {
  const [count, setCount] = useState(0)

  // get the number of pages from database
  // post the number of pages to tdb when the page is visited

  {
    ;() => setCount((count) => count + 1)
  }

  return (
    <>
      <h4>Page visited {count} times</h4>
    </>
  )
}
export default PageCount
