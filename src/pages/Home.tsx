import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import Logo from '../assets/logo.png';

export function Home() {
  const navigate = useNavigate();
  function go(s: string) {
    navigate(s)
  }

  return (
    <div className="flex flex-col gap-8 w-full min-h-screen justify-start pt-20 items-center">
      <img
        className="w-80"
        src={Logo}
        alt="logo-target"
      />

      <main className="p-6 flex flex-wrap w-[400px] gap-4 bg-gray-700 rounded border border-gray-600 items-center justify-center">
        <Button
          function={() => go('/fibonacci')}
          name={"Fibonacci"}
        />
        <Button
          function={() => go('/billing')}
          name={"Billing"}
        />
        <Button
          function={() => console.log()}
          name={"Fibonacci"}
        />
        <Button
          function={() => go('/reverse')}
          name={"Reverse"}
        />
      </main>
    </div>
  )
}