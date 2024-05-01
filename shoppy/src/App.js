import "./css/style.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home"



function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const removeCartItem = (cid, qty)=> {
    const removeIndex = cartItems.findIndex((item)=>item.cid === cid)
    const updateCartList = cartItems.filter((item, i)=>i !== removeIndex)

    setCartItems(updateCartList)
    setCartCount(cartCount - qty)
  }


const addCartCount = (item) => {
console.log("item-->", item)

const updateItemIndex = cartItems.findIndex(
  (cartItem) => cartItem.id === item.id && cartItem.size === item.size)
console.log("index--", updateItemIndex)

if (updateItemIndex !== -1) {

  const updateItems = [...cartItems]
  updateItems[updateItemIndex].qty++
  setCartItems(updateItems)

}else{
  setCartItems([...cartItems, item])
}
setCartCount(cartCount + 1)
}
console.log('App :: cartItems-->', cartItems)


/* ,가 />뒤에도있고 } 뒤에도있다? */
const router = createBrowserRouter([
  {
   path: "/",
   element: <Root cartCount={cartCount}/>
   children:[
{path:"/", element:<Home/>},
{path: "/products", element: <ALLproducts/>},
{
  path: "/products/:id",
 element:<DetailProduct addCartCount={addCartCount} />,
},
{path: "/products/new", element: <NewProduct/>},
{
  path: "carts",
   element:(
   <MyCart cartItems={cartItems} removeCartItem={removeCartItem}/>
   ),
  },
{path: "/login", element:<Login/>},
{path: "/signup", element: <Signup/>},
   ],
  },
]);

   return <RouterProvider router={router}/>
}

export default App;
