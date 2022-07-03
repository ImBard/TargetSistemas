import { Trash } from "phosphor-react";
import { useState } from "react";
import { Header } from "../components/Header";

export function Reverse() {

  const [string, setString] = useState<string>('');
  // const [newString, setNewString] = useState('');

  // function reverse(s: number | string) {
  //   if (s < 1) {
  //     let newString = '';
  //     return ""

  //   } else {
  //     // setNewString(reverse(string.length - 1))
  //     let newString: string = reverse(string.length - 1)
  //     return newString;
  //   }
  // }
  // console.log(reverse("ab"))

  const reverse: any = (str: any) => {
    return str ? reverse(str.substr(1)) + str[0] : str;
  };

  return (
    <div className="flex flex-col w-full min-h-screen max-w-fill">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center py-10">
        <div className="p-4 bg-gray-700 border border-gray-600 rounded items-center justify-center max-w-xs">
          <label
            className="flex flex-col gap-2 "
            htmlFor=""><strong>Inverta</strong>
            <input
              placeholder="Digite algo"
              className="bg-gray-900 p-2 rounded text-gray-200 hover:bg-gray-600 transition-colors outline-none"
              onChange={event => setString(reverse(event.target.value))}
              type="text"
            />

          </label>
          <div className="flex-wrap break-words items-center justify-center font-bold text-green-500 p-4 text-2xl ">
            {string}
          </div>
        </div>
      </main>
    </div>
  )
}