function Name(props: { name: string, last_name: string }) {

  return (
    <h1 className="header-1">{props.name} {props.last_name}</h1>
  )
}

export default Name