const { Model } = require('vertex360')({ site_id: process.env.TURBO_APP_ID })

const props = {
  image: { type: String, default: ''},
  title: { type: String, default: '', display: true},
  discription: { type: String, default: ''},
  category: { type: String, default: ''},
  price: { type: Number, default: 0},
  schema: { type: String, default: 'item', immutable: true },
  timestamp: { type: Date, default: new Date(), immutable: true }
}

class Item extends Model {
  constructor () {
    super()
    this.schema(props)
  }
}

module.exports = Item
