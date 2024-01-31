const pageCount = document.getElementById('count')

async function updateCounter() {
  let response = await fetch(
    'https://65gecqx6qtjqqjdazen3f6jx7y0vxxae.lambda-url.us-west-1.on.aws/'
  )
  let data = await response.json()
  pageCount.innerHTML = `${data}`
}

updateCounter()
