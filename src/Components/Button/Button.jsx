
const Button =({value, handleClick, type, disable})=>{
return (
    <div className='row-span-2 text-center cursor-pointer text-xs self-center lg:text-sm rounded-full bg-lightGreen py-4  lg:px-5 font-poppins lg:leading-10 text-white hover:-translate-y-1'>
        <button  className="w-full h-full block" onClick={handleClick} type={type} disabled={disable}>{value}</button>
    </div>
    )
}

export default Button