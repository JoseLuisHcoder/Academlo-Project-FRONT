import Image from 'next/image'

const Header = () => {
  return (
    <section className="container flex flex-col justify-center items-center mx-auto  h-[488px] w-[1280px] bg-[url('/images/headerImg.png')] bg-cover bg-no-repeat bg-center bg">
            <div className="mb-10">
                <Image src="/images/imgHeader.png" alt="header img" />
            </div>
            <div className="">
               <form className="relative ">
                    <input className=" px-[200px] h-[46px] w-full mx-auto rounded-[23px] bg-white" id="searchInput" type="text" placeholder="" />
                    <p className="text-[#A7A6A7]   font-normal text-[13px] absolute top-[12px] left-6">¿Que quieres ver en tu ciudad?</p>
                    <button className="absolute right-5 top-3 h-[17.8px] w-[16.3px text-[#A7A6A7] bg-white">
                        <Image  src="/iconFooter.svg" alt="icon search footer" />
                    </button>
                </form>
            </div>    
            <div className="flex gap-3 text-[#A7A6A7] text-[13px] font-normal mt-4 ">
              <button className="bg-white px-8 py-2 rounded-[23px]">Marcas y tiendas</button>
              <button className="bg-white px-8 py-2 rounded-[23px]">Artistas y conciertos</button>
              <button className="bg-white px-8 py-2 rounded-[23px]">Torneos</button>
                                
            </div>
        </section>
  )
}

export default Header