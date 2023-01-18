import { Injectable } from '@angular/core';
import {Food} from '../../shared/models/Food'
@Injectable({
  providedIn: 'root'
})
export class FoodsService {

  constructor() { }
  getAll(): Food[]{
    return [
      {
      id: 1,
      name: 'Vegan Bowl',
      price: 25,
      tags: ['Healthy', 'Lunch', 'Vegan', 'Vegetarian'],
      favorite: false,
        quantity: 10,
      stars: 4.5,
      imageUrl: 'src/assets/images/Food/bowl/bowl.jpg',
      origins: ['hawaii'],

    },
      {
        id: 2,
        name: 'Breakfast Bowl',
        price: 6,
        quantity: 15,
        favorite: true,
        origins: ['european'],
        stars: 4.7,
        imageUrl: 'src/assets/images/Food/breakfast_bowl/brakfast-bowl.jpg',
        tags: ['SlowFood', 'Breakfast', 'Vegan', 'Vegetarian', 'Healthy'],
      },
      {
        id: 3,
        name: 'Chocolate Cake',
        price: 5,
        quantity: 15,
        favorite: false,
        origins: ['france', 'european', 'belgian'],
        stars: 3.5,
        imageUrl: 'src/assets/images/Food/cake/cake.jpg',
        tags: ['Dessert', 'Cake'],
      },
      {
        id: 4,
        name: 'Vegan Curry & Rice',
        price: 9,
        quantity: 15,
        favorite: true,
        origins: ['indian', 'asian'],
        stars: 3.3,
        imageUrl: 'src/assets/images/Food/curry/curry.jpg',
        tags: ['Healthy', 'Vegan', 'Vegetarian', 'Oriental'],
      },
      {
        id: 5,
        name: 'Sweet Potato Fries',
        price: 6,
        quantity: 15,
        favorite: false,
        origins: ['european', 'us'],
        stars: 3.0,
        imageUrl: 'src/assets/images/Food/fries/fries.jpg',
        tags: ['SlowFood', 'Healthy', 'Vegetarian', 'Vegan', 'Sides'],
      },
      {
        id: 6,
        name: 'Grilled Veggies',
        price: 5,
        quantity: 15,
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'src/assets/images/Food/grilled_veggies/veggies.jpg',
        tags: ['Healthy', 'Vegan', 'Vegetarian','Sides'],
      },

      {

        id: 7,
        name: 'Pastrami Pizza Napoletana',
        price: 5,
        quantity: 9,
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        tags: ['Meat','Dinner', 'Lunch', 'Pizza'],
        imageUrl:'src/assets/images/Food/napoletana/napoletana.jpg'
      },

      {
        id: 8,
        name: 'Tomato Penne Classice',
        price: 8,
        quantity: 15,
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        tags: ['Meat','Dinner', 'Lunch', 'Pasta'],
        imageUrl:'src/assets/images/Food/penne/penne.jpg'
      },

      {
        id: 9,
        name: 'Vegetable Quiche',
        price: 5,
        quantity: 15,
        favorite: false,
        origins: ['france'],
        stars: 4.0,
        tags: ['Vegetarian','Dinner', 'Lunch', 'Sides'],
        imageUrl:'ssrc/assets/images/Food/quiche/quiche.jpg'
      },

      {
        id: 10,
        name: 'Baked Salmon Plate',
        price: 13,
        quantity: 6,
        favorite: false,
        origins: ['european'],
        stars: 4.0,
        tags: ['Meat','Dinner', 'Lunch', 'Fish'],
        imageUrl:'src/assets/images/Food/salmon/salmon.jpg'
      },


      {
        id: 11,
        name: 'Avocado & Salmon Futomaki',
        price: 15,
        quantity: 3,
        favorite: false,
        origins: ['asian', 'japanese'],
        stars: 4.0,
        tags: ['Meat','Dinner', 'Lunch', 'Fish', 'Oriental', 'Sushi'],
        imageUrl:'src/assets/images/Food/sushi/sushi.jpg'

      },

      {
        id: 12,
        name: 'Avocado Toasts',
        price: 6,
        quantity: 6,
        favorite: true,
        origins: ['european'],
        stars: 4.0,
        tags: ['Lunch', 'Breakfast', 'Vegetarian', 'Vegan'],
        imageUrl:'ssrc/assets/images/Food/IMG_4938.jpg'
      },




    ]
  }
}
