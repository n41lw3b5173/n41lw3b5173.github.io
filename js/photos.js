const images = []
const left = document.getElementById("left")
const right = document.getElementById("right")

for (let i = 1; i < 87; i++) {
    images.push(`../content/${i}.jpg`)
}

while (images.length != 0) {
    const leftImage = images[Math.floor(Math.random() * images.length)]

    images.splice(images.indexOf(leftImage), 1)

    left.innerHTML += `<img loading="lazy" src="${leftImage}" alt="Nail Image">`

    const rightImage = images[Math.floor(Math.random() * images.length)]

    images.splice(images.indexOf(rightImage), 1)

    right.innerHTML += `<img loading="lazy" src="${rightImage}" alt="Nail Image">`
}