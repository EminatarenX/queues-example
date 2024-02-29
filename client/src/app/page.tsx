"use client"
import { useEffect, useState } from "react";
export default function Home() {
  const [payment, setPayment] = useState('')
  const handlePayment = async (e: HTMLFormElement) => {

    e.preventDefault()
    const payment = {
      amount: 569.33,
      userId: Date.now().toString() + Math.random().toString(),
    }
    console.log(payment)
    return

    //  const response = await fetch('http://localhost:3000/api/payment', {
    //  method: 'POST',
    // headers: {
    //   'Content-Type': 'application/json'
    // },
    // body: JSON.stringify(payment)
    //})
  }

  useEffect(() => {
    console.log(payment)
    setPayment('hola')
  }, [])
  return (
    <main className="min-h-screen bg-gradient-to-r from-neutral-800 to-sky-800 flex justify-center items-center">
      <form onSubmit={handlePayment} className="bg-white p-8 rounded-lg shadow-lg flex flex-col min-w-[400px]">
        <h1 className="text-3xl text-neutral-800 font-bold mb-4">Resume</h1>
        <div className="flex items-center mb-4">
          <h3 className="text-neutral-800 font-semibold text-lg">Name: Emiliano Nataren</h3>
          <h3 className="text-neutral-800 font-semibold text-lg ml-4">Total: $569.33</h3>
        </div>
        <button type="submit" className="bg-sky-800 p-2 text-white rounded font-semibold w-full">
          Pay
        </button>


      </form>


    </main >
  );
}
