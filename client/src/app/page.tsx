"use client";
import { v4 as uuid } from "uuid";
import { FormEvent, useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";
let socket: Socket;
import { toast } from "react-toastify";

export default function Home() {
  const [payment, setPayment] = useState({
    userId: "emi@correo.com",
    amount: 4300.0,
  });

  const handlePayment = async (e: FormEvent) => {
    e.preventDefault();
    const payment = {
      amount: 569.33,
      userId: uuid(),
    };
   

    const response = await fetch("http://localhost:3000/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payment),
    });
    const result = await response.json();
    
    toast.info('Processing payment, status: pending')

  };

  useEffect(() => {
    if (!socket) {
      socket = io("http://localhost:3002");
      socket.on("payment-processed", (payment) => {
        console.log(payment);
        toast.success('Payment confirmed!')
      });
    }
  }, []);
  return (
    <main className="min-h-screen bg-gradient-to-r from-neutral-800 to-sky-800 flex justify-center items-center">
      <form
        onSubmit={handlePayment}
        className="bg-white p-8 rounded-lg shadow-lg flex flex-col min-w-[400px]"
      >
        <h1 className="text-3xl text-neutral-800 font-bold mb-4">Resume</h1>
        <div className="flex items-center mb-4">
          <h3 className="text-neutral-800 font-semibold text-lg">
            Nuser: {payment.userId}
          </h3>
          <h3 className="text-neutral-800 font-semibold text-lg ml-4">
            Total: ${payment.amount}
          </h3>
        </div>
        <button
          type="submit"
          className="bg-sky-800 p-2 text-white rounded font-semibold w-full"
        >
          Pay
        </button>
      </form>
    </main>
  );
}
