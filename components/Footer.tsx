import Image from 'next/image'

const Footer = () => {
  return (
    <section className="container mx-auto h-[488px] w-[1280px]  bg-[url('/images/footerImg.png')] bg-no-repeat bg-cover bg-center">
      
            <div className=" flex  w-full justify-center  pt-[302px]">
                <form className="relative ">
                    <input className=" px-[200px] h-[46px] w-full mx-auto rounded-[23px] bg-white" id="searchInput" type="text" placeholder="" />
                    <p className="text-[#A7A6A7]   font-normal text-[13px] absolute top-[12px] left-6">¿Que quieres ver en tu ciudad?</p>
                    <button className="absolute right-5 top-3 h-[17.8px] w-[16.3px text-[#A7A6A7] bg-white">
                        <Image  src="/iconFooter.svg" alt="icon search footer" />
                        
                    </button>
                </form>
            </div>    
        </section>
  )
}

export default Footer