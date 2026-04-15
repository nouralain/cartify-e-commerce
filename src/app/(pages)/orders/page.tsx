import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function OrdersPage() {
  const dummyOrders = [
    {
      id: "114-8392103-128391",
      date: "August 12, 2026",
      total: "EGP 4,250.00",
      status: "Delivered",
      statusDetail: "Delivered on August 15",
      recipient: "John Doe",
      items: [
        { name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones", image: "/61GiJeQ82vL._SX3000_.jpg", returnWindow: "Return window closed on Sep 15, 2026", company: "Sony" }
      ]
    },
    {
      id: "112-9138212-321102",
      date: "July 24, 2026",
      total: "EGP 1,120.00",
      status: "Shipped",
      statusDetail: "Arriving tomorrow by 9 PM",
      recipient: "John Doe",
      items: [
        { name: "Smart Home Security Camera, 1080p HD with Night Vision", image: "/61Hli1jABKL._SX3000_.jpg", returnWindow: "Eligible for return until Aug 24, 2026", company: "Wyze" }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-250 mx-auto px-4 py-6">
        <div className="flex flex-col mb-4">
          <div className="flex items-center space-x-2 text-sm mb-4">
            <Link href="/" className="text-amazon-blue hover:text-[#c45500] hover:underline">Your Account</Link>
            <span className="text-gray-500">›</span>
            <span className="text-[#c45500]">Your Orders</span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
            <h1 className="text-2xl sm:text-[28px] font-normal text-[#0f1111]">Your Orders</h1>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center w-full sm:w-auto gap-2 sm:gap-0">
              <input 
                type="text" 
                placeholder="Search all orders" 
                className="border border-[#888c8c] rounded-md sm:rounded-r-none px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#e47911] focus:border-[#e47911] sm:w-62.5 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] text-sm"
              />
              <button className="bg-[#343a40] text-white px-4 py-1.5 rounded-md sm:rounded-l-none hover:bg-gray-800 transition-colors font-medium border border-transparent shadow-sm text-sm whitespace-nowrap">
                Search Orders
              </button>
            </div>
          </div>

          <div className="flex border-b border-gray-300 mt-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <button className="py-2 pr-6 border-b-2 border-[#e47911] text-[#0f1111] font-bold text-sm">Orders</button>
            <button className="py-2 px-6 text-amazon-blue hover:text-[#c45500] hover:underline text-sm">Buy Again</button>
            <button className="py-2 px-6 text-amazon-blue hover:text-[#c45500] hover:underline text-sm">Not Yet Shipped</button>
            <button className="py-2 px-6 text-amazon-blue hover:text-[#c45500] hover:underline text-sm">Cancelled Orders</button>
          </div>
        </div>

        <div className="flex items-center text-sm mb-6 pl-1">
          <span className="font-bold mr-2 text-[#0f1111]">{dummyOrders.length} orders</span>
          <span className="text-[#0f1111]">placed in</span>
          <select className="ml-2 border border-[#D5D9D9] rounded-lg py-1 px-3 text-sm bg-[#f0f2f2] hover:bg-[#e3e6e6] cursor-pointer shadow-[0_2px_5px_rgba(213,217,217,0.5)] focus:outline-none focus:ring-2 focus:ring-[#e47911]">
            <option>past 3 months</option>
            <option>2026</option>
            <option>2025</option>
          </select>
        </div>

        <div className="space-y-5">
          {dummyOrders.map((order) => (
            <div key={order.id} className="border border-[#D5D9D9] rounded-lg overflow-hidden flex flex-col bg-white">
              <div className="bg-[#F0F2F2] p-4 border-b border-[#D5D9D9] flex flex-wrap gap-4 justify-between items-start text-sm text-muted-foreground">
                <div className="flex flex-wrap gap-6 sm:gap-14">
                  <div className="flex flex-col">
                    <span className="mb-1 uppercase text-[11px] text-muted-foreground tracking-wider font-semibold">Order placed</span>
                    <span className="text-[#0f1111] font-medium">{order.date}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="mb-1 uppercase text-[11px] text-muted-foreground tracking-wider font-semibold">Total</span>
                    <span className="text-[#0f1111] font-medium">{order.total}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="mb-1 uppercase text-[11px] text-muted-foreground tracking-wider font-semibold">Ship to</span>
                    <span className="text-amazon-blue hover:text-[#c45500] hover:underline cursor-pointer">{order.recipient} <span className="text-[10px]">▼</span></span>
                  </div>
                </div>
                <div className="flex flex-col sm:items-end w-full sm:w-auto mt-2 sm:mt-0">
                  <span className="uppercase text-[11px] md:text-xs mb-1 font-semibold text-[#0f1111] tracking-wider">Order # {order.id}</span>
                  <div className="flex gap-2 text-xs md:text-sm">
                    <span className="text-amazon-blue hover:text-[#c45500] hover:underline cursor-pointer">View order details</span>
                    <span className="text-[#D5D9D9]">|</span>
                    <span className="text-amazon-blue hover:text-[#c45500] hover:underline cursor-pointer">Invoice</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 md:p-5">
                <h2 className="font-bold text-lg md:text-[20px] text-[#0f1111] mb-4">
                  {order.statusDetail}
                </h2>
                
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="grow flex flex-col gap-6">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="w-22.5 h-22.5 relative shrink-0 bg-transparent rounded p-1">
                           <Image 
                             src={item.image} 
                             alt={item.name} 
                             fill
                             className="object-contain mix-blend-multiply" 
                           />
                        </div>
                        <div className="flex flex-col pt-1">
                          <Link href="#" className="font-medium text-amazon-blue hover:text-[#c45500] hover:underline line-clamp-2 md:line-clamp-none mb-1 text-sm">
                            {item.name}
                          </Link>
                          <span className="text-xs text-muted-foreground mb-3">{item.returnWindow}</span>
                          <div className="flex flex-wrap gap-2 mt-auto">
                            <button className="bg-[#ffd814] hover:bg-[#f7ca00] text-[#0f1111] text-xs px-3 py-1.5 rounded-full border border-transparent whitespace-nowrap font-medium flex items-center shadow-[0_2px_5px_rgba(213,217,217,0.5)]">
                              <span className="mr-1.5 text-[14px]">↻</span> Buy it again
                            </button>
                            <button className="bg-white hover:bg-gray-50 text-[#0f1111] text-xs px-3 py-1.5 border border-[#D5D9D9] shadow-[0_2px_5px_rgba(213,217,217,0.5)] whitespace-nowrap rounded-lg ">
                              View your item
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="text-muted-foreground flex flex-col gap-2 shrink-0 mt-2 lg:mt-0 lg:ml-6 lg:pl-6 lg:border-l lg:border-gray-200">
                    <button className="w-full text-center bg-white hover:bg-[#f7fafa] text-[#0f1111] text-sm px-3 py-1.5 border border-[#D5D9D9] rounded-xl transition-colors shadow-[0_2px_5px_rgba(213,217,217,0.5)]">
                      Track package
                    </button>
                    <button className="w-full text-center bg-white hover:bg-[#f7fafa] text-[#0f1111] text-sm px-3 py-1.5 border border-[#D5D9D9] rounded-xl transition-colors shadow-[0_2px_5px_rgba(213,217,217,0.5)]">
                      Return or replace items
                    </button>
                    <button className="w-full text-center bg-white hover:bg-[#f7fafa] text-[#0f1111] text-sm px-3 py-1.5 border border-[#D5D9D9] rounded-xl transition-colors shadow-[0_2px_5px_rgba(213,217,217,0.5)]">
                      Share receipt
                    </button>
                    <button className="w-full text-center bg-white hover:bg-[#f7fafa] text-[#0f1111] text-sm px-3 py-1.5 border border-[#D5D9D9] rounded-xl transition-colors shadow-[0_2px_5px_rgba(213,217,217,0.5)]">
                      Leave seller feedback
                    </button>
                    <button className="w-full text-center bg-white hover:bg-[#f7fafa] text-[#0f1111] text-sm px-3 py-1.5 border border-[#D5D9D9] rounded-xl transition-colors shadow-[0_2px_5px_rgba(213,217,217,0.5)]">
                      Write a product review
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
