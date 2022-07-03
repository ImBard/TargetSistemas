interface button {
  name: string;
  function: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button(props: button) {
  return (
    <button onClick={props.function} className="p-3 rounded bg-green-700 w-40 hover:bg-green-600 transition-colors">
      {props.name}
    </button>
  )
}