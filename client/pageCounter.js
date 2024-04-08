const pageCount = document.getElementById('count')

async function updateCounter() {
  let response = await fetch(
    'https://x3m3uc4qjrm6znypf4reyfqtti0cfqpv.lambda-url.us-west-1.on.aws/'
  )
  let data = await response.json()
  pageCount.innerHTML = `${data}`
}

updateCounter()
