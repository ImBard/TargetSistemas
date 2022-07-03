import { useEffect, useState } from "react";
import { Header } from "../components/Header";

interface Data {
  state: string;
  value: number;
  percentage: string;
}

export function Percentual() {

  const [average, setAverage] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const [data, setData] = useState<Data[]>([
    {
      state: 'SP',
      value: 67836.66,
      percentage: ''
    },
    {
      state: 'RJ',
      value: 36678.66,
      percentage: ''
    },
    {
      state: 'MG',
      value: 29229.88,
      percentage: ''
    },
    {
      state: 'ES',
      value: 27165.48,
      percentage: ''
    },
    {
      state: 'Outros',
      value: 19849.53,
      percentage: ''
    },

  ])


  useEffect(() => {
    valueAverage()
  }, [])

  const valueAverage = () => {
    // data.map(item => tot += item.value)
    // data.map(item => (item.value * 100) / tot)

    let total = data.reduce((acc, item) => {
      // console.log(acc, item)
      return acc += item.value
    }, 0)

    data.forEach((item) => item.percentage = ((item.value / total) * 100).toFixed(2))

    console.log(total)



    setTotal(total)
    setAverage(total / data.length)
    console.log(data)

  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col flex-wrap justify-center items-center m-auto">

        <div className="overflow-x-auto ">
          {/* <table className="text-center ">
            <thead className="text-blue-400">
              <tr>
                <th className="border p-3 border-gray-600">
                  SP
                </th>
                <th className="border px-3 border-gray-600">
                  RJ
                </th>
                <th className="border px-3 border-gray-600">
                  MG
                </th>
                <th className="border px-3 border-gray-600">
                  ES
                </th>
                <th className="border px-3 border-gray-600">
                  Outros
                </th>
                <th className="border px-3 border-gray-600">
                  Total
                </th>
              </tr>
            </thead>
            <tbody >
              <tr>
                {data.map(data => {
                  return (
                    <td className="border p-3 border-gray-600" key={data.value}>{data.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                  )
                })}
                <td className="border p-3 border-gray-600">{total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
              </tr>
              <tr>
                {data.map(data => {
                  return (
                    <td className="border p-3 border-gray-600" key={data.value}>{data.percentage}%</td>
                  )
                })}
                <td className="border p-3 border-gray-600 text-blue-400">Percentual</td>
              </tr>
            </tbody> 
          </table>*/}
          <table>
            <thead>
              <tr className="bg-gray-600">
                <th className="border px-3 border-gray-500 text-blue-400">Estado</th>
                <th className="border px-3 border-gray-500 text-green-500">Faturamento</th>
                <th className="border px-3 border-gray-500 text-yellow-300">Percentual</th>
              </tr>
            </thead>
            {data.map(item => {
              return (

                <tbody key={Math.random()}>
                  <tr key={Math.random()}>
                    <th key={item.state} className="border px-3 border-gray-600 text-blue-400">{item.state}</th>
                    <td key={item.value} className="border p-3 border-gray-600">{item.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td key={item.percentage} className="border p-3 border-gray-600">{item.percentage}%</td>
                  </tr>
                </tbody>
              )
            })}
            <tfoot>
              <tr className="bg-gray-600">
                <th className="border px-3 border-gray-500 text-blue-400">Total</th>
                <td className="border px-3 border-gray-500 text-green-500">{total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                <td className="border px-3 border-gray-500 text-yellow-300">100%</td>
              </tr>
            </tfoot>
          </table>
        </div>

      </main>
    </div>
  )
}