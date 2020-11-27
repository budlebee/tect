export default function makeIterableInMap (data) {
    let lst = []
    switch (typeof(data)) {
      case "object":
        for(let key in data) {
          data[key]['id'] = key
          lst.push(data[key])
        }
        break

      case "list":
        for(const [index, card] of cards.entries()) {
          card['id'] = index
          lst.push(card)
        }
        break

      default:
    }

    return lst
}