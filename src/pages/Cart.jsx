import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function Cart() {
  const {
    products,
    lessQuantityCart,
    addItemToCart,
    removeItemFromCart,
    isItemAdded,
  } = useContext(CartContext);
  const totalAmount = products.reduce(
    (total, obj) => total + obj.quantity * obj.price,
    0
  );

  return (
    <div className="bg-white text-black">
      <div className="text-center py-6">
        <h1
          style={{ fontFamily: "cursive" }}
          className="mt-8 text-5xl font-bold text-black"
        >
          Cart Section
        </h1>
      </div>
      {products.map((data) => (
        <section className="py-24 relative bg-white text-black" key={data.id}>
          <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
            <h2 className="font-bold text-4xl leading-10 mb-8 text-center">
              {data.title}
            </h2>
            <div className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4 bg-white shadow-md">
              <div className="col-span-12 lg:col-span-2 img box">
                <img
                  src={data.image}
                  alt="product image"
                  className="max-lg:w-full lg:w-[180px] rounded-lg object-cover"
                />
              </div>
              <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                <div className="flex items-center justify-between w-full mb-4">
                  <h5 className="font-bold text-2xl leading-9">
                    {data.category}
                  </h5>
                  <button
                    onClick={() => removeItemFromCart(data.id)}
                    className="rounded-full flex items-center justify-center"
                  >
                    <FaTrash className="text-black" />
                  </button>
                </div>
                <p className="font-normal text-base leading-7 text-gray-500 mb-6">
                  {data.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <button
                      
                      onClick={()=> {
                        if (data.quantity <= 1) {
                          removeItemFromCart(data.id)
                        } else {
                          lessQuantityCart(data.id)
                        }
                      }}
                      className="rounded-[50px] border border-gray-200 shadow-sm p-2.5 flex items-center justify-center bg-gray-100"
                    >
                      <svg
                        className="stroke-black"
                        width={18}
                        height={19}
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.5 9.5H13.5"
                          stroke=""
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <p className="border border-gray-200 rounded-full w-10 aspect-square text-black font-semibold text-sm py-1.5 px-3 bg-gray-100 text-center">
                      {data.quantity}
                    </p>
                    <button
                      onClick={() => addItemToCart(data)}
                      className="rounded-[50px] border border-gray-200 shadow-sm p-2.5 flex items-center justify-center bg-gray-100"
                    >
                      <svg
                        className="stroke-black"
                        width={18}
                        height={19}
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.75 9.5H14.25M9 14.75V4.25"
                          stroke=""
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <h6 className="font-bold text-2xl leading-9 text-right">
                    {Math.round(data.quantity * data.price)}
                    <span>$</span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      <>
        <div className="flex flex-col md:flex-row items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-w-xl mx-auto">
          <h5 className="font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">
            Subtotal
          </h5>
          <div className="flex items-center justify-between gap-5">
            <button className="rounded-full py-2.5 px-3 bg-gray-100 text-black font-semibold text-xs text-center whitespace-nowrap">
              Promo Code?
            </button>
            <h6 className="font-bold text-3xl leading-10 text-black">
              {Math.round(totalAmount)}$
            </h6>
          </div>
        </div>
        <div className="max-w-6xl mb-4 mx-auto">
          <p className="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">
            Shipping taxes, and discounts calculated at checkout
          </p>
          <Link to={'/'}><button className="rounded-full py-4 px-6 bg-black text-white font-semibold text-lg w-full text-center" >
            Checkout
          </button></Link>
          
        </div>
      </>
    </div>
  );
}

export default Cart;
