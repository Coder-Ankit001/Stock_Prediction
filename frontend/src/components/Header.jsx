import Button from "./Button"
const Header = ()=>{
  return (
    <>
    <nav className='bg-slate-700 w-full h-15'>
      <ul className='list-none flex gap-x-4 items-center text-white py-2 px-4'>
        <li className='text-xl font-semibold h-full'>Stock Predictor</li>
        <li className='hover:bg-slate-800 h-10 rounded-lg p-2'>Dashbord</li>
        <li className='absolute right-10 flex gap-x-2'>
          <Button text='login' class='border-2 text-sky-500 hover:text-white border-sky-600 hover:bg-sky-600'/>
          <Button text='register' class='text-slate-700 hover:text-white bg-sky-600'/>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Header
