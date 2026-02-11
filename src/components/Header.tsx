

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full max-w-250 mx-auto bg-primary-700 p-3 rounded-2xl">
        <img src="/images/logo.svg" alt="" className=" invert"/>
        <button className=" bg-primary-800 p-2 rounded-xl hover:cursor-pointer hover:opacity-50 hover:scale-85 transition duration-375 ease-in-out "><img src="/images/icon-sun.svg" alt="" /></button>
    </header>
  )
}

export default Header