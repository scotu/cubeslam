module.exports = {
  ai: {
    maxSpeed: 10,
    reaction: 0.8,
    viewRange: 0.6
  },

  puck: {
    speed: 1.3,
    speedup: .1,
    maxspeed: 2
  },

  player: {
    shields: 3
  },

  set: 'empty',

  extras: [
    {id: 'extralife', round:2, probability: 20},
    {id: 'multiball', round:3, probability: 10},
    {id: 'ghostball', round:4, probability: 5},
  ]
}