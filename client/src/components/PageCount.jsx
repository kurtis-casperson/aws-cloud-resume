import { useState, useEffect } from 'react'

const PageCount = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    getPageCount()
  }, [])

  // get the number of pages from database
  // post the number of pages to tdb when the page is visited

  const getPageCount = () => {
    try {
      axios.get()
    } catch (e) {}
    setCount(count + 1)
  }

  return (
    <>
      <h4>Page visited {count} times</h4>
    </>
  )
}
export default PageCount
