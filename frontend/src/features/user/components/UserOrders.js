import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoggedInUser } from '../../auth/authSlice'
import { fetchLoggedInUserOrdersAsync, selectUserInfo, selectUserOrders } from '../userSlice'


const UserOrders = () => {

    const dispatch = useDispatch()
    const user = useSelector(selectUserInfo)
    const orders = useSelector(selectUserOrders)

    useEffect(()=>{
       dispatch(fetchLoggedInUserOrdersAsync(user.id))
    },[dispatch,user.id])

  return (
    <div>
        {orders.map((order)=><div>
        
    <div className="mx-auto max-w-7xl bg-white mt-12 px-4 sm:px-6 lg:px-8">
    
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <h2 className='text-4xl font-bold tracking-tight text-gray-900 text-left'>Order # {order.id}</h2>
        <h3 className='text-3xl my-5 font-bold tracking-tight text-red-900 text-left'>Order Status {order.status}</h3>
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {order.items.map((product) => (
                              <li key={product.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href={product.href}>{product.title}</a>
                                      </h3>
                                      <p className="ml-4">{product.price}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <div className="text-gray-500">
                                    <label
                                    htmlFor='quantity'
                                    className='inline mr-5 text-sm font-medium leading-6 text-gray-900'>
                                      Qty:{product.quantity}
                                    </label>
                                    
                                    </div>

                                    <div className="flex">
                                      
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                  

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium mx-2 text-gray-900">
                        <p>Subtotal</p>
                        <p>{order.totalAmount}</p>
                      </div>
                      <div className="flex justify-between text-base font-medium mx-2 text-gray-900">
                        <p>Total items in cart</p>
                        <p>{order.totalItems} items</p>
                      </div>
                      <p className="mt-2 text-sm text-gray-500 text-left">Shipping Address:</p>
                     
                      <div
                    className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200"
                  >
                    <div className="flex gap-x-4">

                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          {order.selectedAddress.name}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          {order.selectedAddress.street}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          {order.selectedAddress.pinCode}
                        </p>
                      </div>
                    </div>
                    <div className="hidden sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm leading-6 text-gray-900">
                        Phone: {order.selectedAddress.phone}
                      </p>
                      <p className="text-sm leading-6 text-gray-500">
                        {order.selectedAddress.city}
                      </p>
                    </div>
                  </div>
                    </div>
    </div>
      
                </div>)}
    </div>
  )
}

export default UserOrders