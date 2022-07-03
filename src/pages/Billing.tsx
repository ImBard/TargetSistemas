import { Header } from "../components/Header";
import Dados from '../../dados.json'
import { useState } from "react";

interface billing {
  maxValue: number;
  minValue: number;
}

export function Billing() {
  const [media, setMedia] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [minValue, setMinValue] = useState(0);
  const [daysBilling, setDaysBilling] = useState(0);

  function average() {
    const valueData: number[] = []
    let tot = 0

    Dados.map(dados => {
      if (dados.valor != 0.0) {
        valueData.push(dados.valor)
        tot += dados.valor
      }
    })
    for (let i = 0; i < valueData.length; i++) {
    }
    let daysBilling = 0
    valueData.map(valor => { if (valor < (tot / valueData.length)) { setDaysBilling(daysBilling++) } })
    setMedia(tot / valueData.length)
    setMaxValue(valueData.reduce((a, b) => { return Math.max(a, b) }))
    setMinValue(valueData.reduce((a, b) => { return Math.min(a, b) }))


  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center">
        <div className="flex flex-col bg-gray-700 rounded p-4 border border-gray-600 gap-3">
          <button
            className="p-2 bg-green-700 rounded hover:bg-green-600 transition-colors"
            onClick={average} >
            Verificar faturamento
          </button>

          <table className="">
            <thead>
              <tr className="border border-gray-600">
                <th className="border-x px-3 border-gray-600 text-red-700">Menor valor</th>
                <th className="border-x px-3 border-gray-600 text-green-500">Maior valor</th>
                <th className="border-x px-3 border-gray-600 text-blue-500">Média</th>
                <th className="border-x px-3 border-gray-600 text-blue-500">Faturamento maior que média</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border border-gray-600">
                <th className="border-x px-3 border-gray-600 p-2 text-gray-200">{minValue.toFixed(2)}</th>
                <th className="border-x px-3 border-gray-600 p-2  text-gray-200">{maxValue.toFixed(2)}</th>
                <th className="border-x px-3 border-gray-600 p-2  text-gray-200">{media.toFixed(2)}</th>
                <th className="border-x px-3 border-gray-600 p-2  text-gray-200">{daysBilling} Dias</th>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}