const receipts = [
  {
    person: 'Karolin',
    order: {
      main: 'Burrito',
      protein: 'Organic Tofu',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: [
        'Baby Bok Choy', 'Cucumber Kimchi'
      ],
      drink: 'Korchata',
      cost: 22
    },
    paid: false
  },
  {
    person: 'Mark',
    order: {
      main: 'Rice Bowl',
      protein: 'Ginger Soy Chix',
      rice: 'Sticky Rice',
      sauce: 'Korilla',
      toppings: [
        'Yuzu Pickled Sweet Pepper', 'Kale'
      ],
      drink: 'Korchata',
      cost: 19
    },
    paid: false
  },
  {
    person: 'Matt',
    order: {
      main: 'Salad Bowl',
      protein: 'Organic Tofu',
      rice: 'none',
      sauce: "K'lla",
      toppings: [
        'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
      ],
      drink: 'Sparkling Blood Orange Soda',
      cost: 20
    },
    paid: true
  }
]




class Receipt extends React.Component {
    render () {
        return (
            <div>
                <h1>{this.props.receipt.person}</h1>
                <p>Main: {this.props.receipt.order.main}</p>
                <p>Protein: {this.props.receipt.order.protein}</p>
                <p>Rice: {this.props.receipt.order.rice}</p>
                <p>Sauce: {this.props.receipt.order.sauce}</p>
                <p>Drink: {this.props.receipt.order.drink}</p>
                <p>Cost: {this.props.receipt.order.cost}</p>
            </div>
        )
    }
}
class App extends React.Component {
    constructor(prop) {
      super(props) 
      thisstate = { 
        receipts: receipts
      }
    }
    render () {
        return (
            <div>
                <h1>Korilla</h1>
                <div class="main">
                    <div class="box">
                      {this.state.receipts.map(receipt => receipt.paid ? '': <Receipt receipt={receipt} />)}
                    </div>
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <App/>, 
    document.querySelector(".container")
)