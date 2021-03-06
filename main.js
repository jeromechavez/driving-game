class Car {
  constructor($img, speed, direction, location) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
    this.interval = null
    this.start = false
  }

  turn(direction) {
    this.direction = direction
    this.$img.classList = direction
  }

  move() {
    switch (this.direction) {
      case 'north':
        this.location[1] -= this.speed
        this.$img.style.top = this.location[1] + 'px'
        this.$img.style.left = this.location[0] + 'px'
        break
      case 'south':
        this.location[1] += this.speed
        this.$img.style.top = this.location[1] + 'px'
        this.$img.style.left = this.location[0] + 'px'
        break
      case 'west':
        this.location[0] -= this.speed
        this.$img.style.top = this.location[1] + 'px'
        this.$img.style.left = this.location[0] + 'px'
        break
      case 'east':
        this.location[0] += this.speed
        this.$img.style.top = this.location[1] + 'px'
        this.$img.style.left = this.location[0] + 'px'
        break
    }
  }

  startCar() {
    this.interval = setInterval(() => {this.move()}, 16)
  }

  stopCar() {
    clearInterval(this.interval)
  }
}

var carImage = document.createElement('img')
carImage.classList.add('car')
carImage.setAttribute('src', 'carImage.png')
document.body.appendChild(carImage)

var car1 = new Car(carImage, 5, 'east', [0, 0])

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    car1.turn('north')
  }
  else if (event.key === 'ArrowDown') {
    car1.turn('south')
  }
  else if (event.key === 'ArrowLeft') {
    car1.turn('west')
  }
  else if (event.key === 'ArrowRight') {
    car1.turn('east')
  }
})

document.addEventListener('keydown', (event) => {
  if (event.key === ' ') {
    if (car1.started) {
      car1.stopCar()
      car1.started = false
    }
    else {
      car1.startCar()
      car1.started = true
    }
  }
})
