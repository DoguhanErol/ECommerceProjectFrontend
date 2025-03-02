
type Tprops = {
    mainMessage:String,
    linkActivate:boolean,
    linkMessage?:String,
    linkUrl?:String,
    
}

const InformationCard = (props:Tprops) => {
  return (
    <div className='flex w-full h-screen justify-center items-center'>
    <div className='p-5 rounded-lg shadow-2xl bg-gray-600'>
      <h2 className='text-3xl font-mono font-bold text-warning '>{props.mainMessage}</h2>
      {props.linkActivate ? (
        <div className='flex w-full justify-end'>
          <a href={'/'+ props.linkUrl} className='btn btn-secondary text-base'>{props.linkMessage}</a>
        </div>
      ):(
        <></>
      )}

    </div>
</div>
  )
}

export default InformationCard