const pageCount = document.querySelector('count')

// get the current page count from dynamo

async function updateCounter() {
  let response = await fetch(
    'https://65gecqx6qtjqqjdazen3f6jx7y0vxxae.lambda-url.us-west-1.on.aws/'
  )
  let data = await response.json()
  console.log('data', data)
  pageCount.innerHTML = `${data}`
}

updateCounter()
