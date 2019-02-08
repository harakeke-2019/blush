const express = require('express')

const router = express.Router()

const feels = [
  {
    id: 1,
    feeling: 'shy'
  },
  {
    id: 2,
    feeling: 'lonely'
  },
  {
    id: 3,
    feeling: 'frustrated'
  },
  {
    id: 4,
    feeling: 'bored'
  },
  {
    id: 5,
    feeling: 'anxious'
  },
  {
    id: 6,
    feeling: 'grateful'
  },
  {
    id: 7,
    feeling: 'vocally vegan'
  },
  {
    id: 8,
    feeling: 'ambitious'
  },
  {
    id: 9,
    feeling: 'flirty'
  },
  {
    id: 10,
    feeling: 'zen AF'
  },
  {
    id: 11,
    feeling: 'average'
  },
  {
    id: 12,
    feeling: 'intelligent'
  },
  {
    id: 13,
    feeling: 'bogan'
  },
  {
    id: 14,
    feeling: 'positive'
  },
  {
    id: 15,
    feeling: 'funny'
  },
  {
    id: 16,
    feeling: 'groovy baby'
  },
  {
    id: 17,
    feeling: 'casual'
  },
  {
    id: 18,
    feeling: 'carnivorous'
  },
  {
    id: 19,
    feeling: 'faaaabulous, honey!'
  },
  {
    id: 20,
    feeling: 'afraid of commitment'
  }

]

router.get('/', (req, res) => {
  res.json(feels)
})

module.exports = router
