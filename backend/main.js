console.log("hey")

document.getElementById("searchForm").addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const city = formData.get("searchText")
    document.getElementById('cityName').innerText = city
    const result = await fetch(`http://localhost:3001/${city}`)
    const object = await result.json()
    document.getElementById('result').innerText = JSON.stringify(object, null, 2)
})