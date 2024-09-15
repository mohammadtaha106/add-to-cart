import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

function CartContextProvider({children}) {
const [products, setProducts] = useState([])
const [isLoaded , setisLoaded] = useState(false)

useEffect(() => {
  if (isLoaded) {
    localStorage.setItem('CartItems', JSON.stringify(products))
  }

  
}, [products])

useEffect(() => {
  const itemsFromLocalStorage = localStorage.getItem('CartItems')
  console.log(itemsFromLocalStorage);
  if (itemsFromLocalStorage) {
    setProducts([...JSON.parse(itemsFromLocalStorage)])
  }
  setisLoaded(true)  
  
}, [])



function addItemToCart(item){
    const arr = products
    const itemIndex = products.findIndex((data)=> data.id == item.id)

    if (itemIndex==-1) {
        arr.push({...item, quantity : 1})
        
    } else{
        arr[itemIndex].quantity++
    }
    setProducts([...arr])
}



function lessQuantityCart(id) {
    const arr = products;
    const itemIndex = products.findIndex((data) => data.id == id);
    arr[itemIndex].quantity--;
    setProducts([...arr]);
  }

function removeItemFromCart (id){
   const arr = products
    const itemIndex = products.findIndex((data)=> data.id == id)
   
        arr.splice(itemIndex, 1)
        setProducts([...arr])
    
}

function isItemAdded(id) {
    const arr = products
    const itemIndex = products.findIndex((data)=> data.id == id)
    if (itemIndex==-1) {
        return null
    } else {
        return arr[itemIndex]
    }
}
//console.log('lessQuantityCart:', lessQuantityCart);


return(



    <CartContext.Provider value={{ products, addItemToCart, removeItemFromCart, isItemAdded,lessQuantityCart}}>{children}</CartContext.Provider>
)
}
export default CartContextProvider