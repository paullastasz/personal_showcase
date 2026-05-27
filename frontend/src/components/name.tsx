function Name(props: { name: string, last_name: string }) {

  return (
    <div className="grid grid-rows-1 md:grid-cols-2">
        <h1 className='text-[4rem] md:text-[7rem] lg:text-[160px] xl:text-[190px] 2xl:text-[200px] babylonica-r'>{props.name}</h1>
        <h1 className='text-[4rem] md:text-[7rem] lg:text-[160px] xl:text-[190px] 2xl:text-[200px] babylonica-r'>{props.last_name}</h1>
    </div>
    
  )
}

export default Name