enum FoodType {
  fruit,
  vegetable
}

enum FoodColors {
  green,
  red,
  purple,
  orange,
  pink,
  yellow
}

enum Vitamins {
  A,
  C,
  D,
  E,
  Iron,
  Magnium
}

interface Food {
  color: string,
    vitamin: Array < string > ,
    name: string,
    type: foodType
}

i