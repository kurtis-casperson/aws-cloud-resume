const PageCount = () => {
  const [count, setCount] = useState(0)

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
