class Car {
  constructor($img, speed, direction, location) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
  }

  turn(direction) {
    this.direction = direction
    this.$img.classList = direction
    return this.direction
  }

  move() {
    switch (this.direction) {
      case 'north':
        this.location[1] = this.speed
        break
      case 'south':
        this.location[1] = this.speed
        break
      case 'west':
        this.location[0] = this.speed
        break
      case 'east':
        this.location[0] = this.speed
    }
  }
}

var carImage = document.createElement('img')
carImage.setAttribute('src', 'https://openclipart.org/download/234444/stripes.svg')
carImage.setAttribute('width', '100')
carImage.setAttribute('height', '50')
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
