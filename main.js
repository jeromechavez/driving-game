class Car {
  constructor($img, speed, direction, location) {
    this.$img = $img
    this.speed = speed
    this.direction = direction
    this.location = location
  }
}

var carImage = document.createElement('img')
carImage.setAttribute('src', 'https://openclipart.org/download/234444/stripes.svg')
carImage.setAttribute('width', '100')
carImage.setAttribute('height', '50')
document.body.appendChild(carImage)

var car1 = new Car(carImage, 5, 'east', [0, 0])
