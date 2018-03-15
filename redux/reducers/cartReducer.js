module.exports = (
  state = {
    purchasedProducts: [],
    cartItems: [],
    cartCount: 0,
      size:'',
    count: 0,
    women: [
      {
        imgurl: "./client/assets/Images/Newistock/recommended/Items/iStock-149005145.jpg",
        name: "Mia Beige Dress w/  White Top",
        price: "$24.00",
        checked: false
      },
      {
        imgurl: "./client/assets/Images/Newistock/recommended/Items/iStock-476962376.jpg",
        name: "Amy Classic Short Dress",
        price: "$33.00",
        checked: false
      },
      {
        imgurl: "./client/assets/Images/Newistock/recommended/Items/iStock-467870548.jpg",
        name: "Sia Dress w/ Pockets",
        price: "$33.00",
        checked: false
      },
      {
        imgurl: "./client/assets/Images/Newistock/recommended/Items/iStock-181101785.jpg",
        name: "Myrtle Short Sleeveless Dress",
        price: "$50.40",
        checked: false
      },
      {
        imgurl: "./client/assets/Images/Newistock/recommended/Items/iStock-179142052.jpg",
        name: "Clara Broad Striped Short Dress ",
        price: "$35.00",
        checked: false
      },
      {
        imgurl: "./client/assets/Images/Newistock/recommended/Items/iStock-172470273.jpg",
        name: "Flora Short Dress",
        price: "$25.00",
        checked: false
      }
    ],
    recommend: [
      {
        imgurl: "./client/assets/Images/Newistock/mWomanCategory/iStock-624248974.jpg",
        name: "Anna Black Dress",
        price: "$15.00",
        checked: false
      },
      {
        imgurl: "./client/assets/Images/Newistock/mWomanCategory/iStock-187038007.jpg",
        name: "Shelly Long Red Dress",
        price: "$25.00",
        checked: false
      },
      {
        imgurl: "./client/assets/Images/Newistock/mWomanCategory/iStock-673617950.jpg",
        name: "Mia Blue Pleated Dress",
        price: "$23.90",
        checked: false
      },
      {
        imgurl: "./client/assets/Images/Newistock/mWomanCategory/iStock-692465082.jpg",
        name: "Sarah Brown Shifly Dress",
        price: "$19.60",
        checked: false
      },
      {
        imgurl: "./client/assets/Images/Newistock/mWomanCategory/iStock-517726549.jpg",
        name: "Ash Black Bell Cap Dress",
        price: "$19.60",
        checked: false
      },
      {
        imgurl: "./client/assets/Images/Newistock/mWomanCategory/iStock-171111543.jpg",
        name: "Emily Plain White Dress",
        price: "$19.60",
        checked: false
      }
    ]
  },
  action
) => {
  switch (action.type) {
    case "addItem":
      var cartArray = [],
        length = 0,
        itemArray;
      cartArray = state.cartItems;
      cartArray.push(action.item);
      length=cartArray.length
      return{
        purchasedProducts:state.purchasedProducts,
        size:state.size,
        cartCount:state.cartCount,
        cartItems:cartArray,
        count:length,
        women:state.women.map((item,key)=>{
          if(item.name == action.item.name){
            item.checked = true;
            return item;
          } else {
            return item;
          }
        }),
        recommend: state.recommend.map((item, key) => {
          if (item.name == action.item.name) {
            item.checked = true;
            return item;
          } else return item;
        })
      };
      break;

    case "addToCart":
      var products = [],
        cartLength = 0;

      products = state.purchasedProducts;
      products.push(action.item);
      cartLength = products.length;

        return{
          cartItems:state.cartItems,
          size:state.size,
          count:state.count,
          women:state.women,
          recommend:state.recommend,
          purchasedProducts:products,
          cartCount:cartLength
        }
      break;
      case 'size':
      console.log('inside reducer',action.item);
        return{
          cartItems:state.cartItems,
          size:action.item,
          count:state.count,
          women:state.women,
          recommend:state.recommend,
          purchasedProducts:products,
          cartCount:cartLength
        }
      break;
  }
  return state;
};
