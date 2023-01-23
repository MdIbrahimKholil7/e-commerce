import { ProductContext } from '@/components/utils/ContextProvider';
import React, { useContext, useEffect, useState } from 'react';

const Cart = () => {

    const num = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
    ]
    const { setCartItems,
        cartItems } =
        useContext(ProductContext);
    const [itemsCost, setItemsCost] = useState(0)
    const [increase,setIncrease]=useState(true)

    useEffect(() => {
        // cartItems.forEach(cart => {
        //     let count=0
        //     count+=cart.quantity*300
        //     setItemsCost(count)
        // })
        const total = cartItems.reduce((accumulator,current) => accumulator + 300 * current.quantity, 0)
        setItemsCost(total)
    }, [cartItems,increase])


    const handleQuantityIncrease = (prod) => {
        const find = cartItems?.findIndex(item => item.id === prod.id);
        console.log(find)
        if (find > -1) {
            cartItems[find].quantity += 1
        } else {
            setCartItems([...cartItems, { ...prod, quantity: 1 }])
        }
        setIncrease(!increase)
    }
    const handleQuantityDecrease = (id) => {

    }
    console.log(itemsCost)
    console.log(cartItems)
    return (
        <div>
            <div class="container mx-auto mt-10">
                <div class="flex flex-col md:flex-row shadow-md my-10">
                    <div class="w-full lg:w-3/4 bg-white px-10 py-10">
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                {/* <!-- head --> */}
                                <thead>
                                    <tr>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox" />
                                            </label>
                                        </th>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        num?.map((prod, i) => <tr
                                            key={i}
                                        >
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" />
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                        <div>
                                                            <div className="font-bold">Hart Hagerty</div>
                                                            <div className="text-sm opacity-50">United States</div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </td>
                                            <td>
                                                <div className='flex items-center gap-2'>
                                                    <button
                                                        onClick={() => handleQuantityIncrease(prod)}
                                                        className='border-2 border-indigo-200 px-2 pb-1 text-xl rounded-md flex justify-center items-center'>+</button>
                                                    <span>0</span>
                                                    <button
                                                        onClick={() => handleQuantityDecrease()}
                                                        className='border-2 border-indigo-200 px-2 pb-1 text-xl rounded-md flex justify-center items-center'>-</button>
                                                </div>

                                            </td>
                                            <td>300</td>
                                            <td>{prod?.quantity * 300} Tk</td>

                                        </tr>)
                                    }
                                </tbody>


                            </table>
                        </div>
                    </div>

                    <div id="summary" class="w-full lg:w-1/4 px-8 py-10">
                        <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
                        <div class="flex justify-between mt-10 mb-5">
                            <span class="font-semibold text-sm uppercase">Items 3</span>
                            <span class="font-semibold text-sm">{itemsCost} Tk</span>
                        </div>
                        <div className='flex justify-between items-center'>
                            <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping Fee</label>
                            <p>80 Tk</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Tax Fee</label>
                            <p>30 Tk</p>
                        </div>

                        <div class="border-t mt-8">
                            <div class="flex font-semibold justify-between py-6 text-sm uppercase">
                                <span>Total cost</span>
                                <span>{itemsCost + (30+80)} Tk</span>
                            </div>
                            <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;