import { ArrowRight, Trash } from "phosphor-react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Header } from "../components/Header";

interface Fibo {
  fibo: number;
  key: number
}

export function Fibonacci() {

  const [num, setNum] = useState(0);
  const [fibonacci, setFibonacci] = useState<Fibo[]>([]);
  const [hasFibo, setHasFibo] = useState<boolean>();
  const [not, setNot] = useState<string>()


  async function fiboCount() {
    if (num != 0) {
      let penultimate = 1;
      let last = {
        fibo: 0,
        key: 0
      };
      const list = [last]

      for (let i = 1; i < num; i++) {
        const fibo = penultimate + last.fibo
        penultimate = last.fibo;
        last = {
          fibo: fibo,
          key: i
        }
        list.push(last)

      }

      list.find(item => item.fibo == num) != undefined ? setHasFibo(true) : (setHasFibo(false), setNot("Este número não está na lista"))
      setFibonacci(list)
    }
  }

  function fiboClear() {
    setFibonacci([])
    setHasFibo(false)
    setNot("")
  }

  const handleKeyboard = (event: string) => {
    if (event === "Enter") {
      fiboCount()
    }
  }

  return (
    <div className="flex flex-col w-full min-h-screen items-center">
      <Header />
      <main className="flex flex-col p-2 rounded  items-center gap-3 mt-32">
        <h1 className="text-2xl font-bold mb-4">Sequência Fibonacci</h1>
        <div className="flex bg-gray-700 p-2 rounded border border-gray-600 items-center gap-3">
          <button
            onClick={fiboCount}
            className="hover:bg-gray-400 hover:text-gray-900 transition-colors rounded-full p-2">
            <ArrowRight size={24} />
          </button>
          <input
            placeholder="Insira um número"
            type="number"
            className="bg-gray-900 rounded p-2 outline-none hover:bg-gray-500 transition-colors"
            onChange={event => (setNum(event.target.valueAsNumber), fiboClear())}
            onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => handleKeyboard(e.key)}
          />
          <button
            onClick={fiboClear}
            className="hover:bg-gray-400 transition-colors hover:text-gray-900 rounded-full p-2">
            <Trash size={24} />
          </button>
        </div>

        <div className="my-2 font-bold text-xl">
          {hasFibo ?
            <span className="text-green-500">
              O número informado está na lista
            </span>
            : <span className="text-red-800">
              {not}
            </span>
          }
        </div>

        {fibonacci.map(sequencia => {
          return (
            <div
              key={sequencia.key}
              className={sequencia.fibo == num ? "w-72 mt-2 bg-green-700 rounded border border-gray-600 text-center p-2 font-bold text-sm" : "w-72 mt-2 bg-gray-700 rounded border border-gray-600 text-center p-2 font-bold text-sm"}
            >
              {sequencia.fibo}
            </div>
          )
        })}
      </main >
    </div>
  )
}


