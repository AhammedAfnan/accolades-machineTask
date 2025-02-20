export default function Hero() {
  return (
    <div className="bg-[#FFF8ED] w-full h-[500px] relative">
      <div className="absolute to-0 left-0">
        <img src="/images/Group.png" alt="" />
      </div>
      <div className="container mx-auto flex justify-center items-center space-x-48 py-20">
        <div className="">
          <h1 className="w-[497px] h-[50px] font-[Outfit-Regular] text-[40px] leading-[50.4px] text-[#121212]">
            Desktop Publishing
          </h1>
          <p className="w-[523px] h-[200px] text-[16px] leading-[24.96px] text-[#000000] font-[Inter-Regular] mt-3">
            Desktop Publishing (DTP) at Transfective is a sophisticated process
            of crafting precise, high- quality layouts and printed materials.
            Our DTP services are expertly tailored to integrate language and
            design seamlessly, ensuring that translated content not only retains
            its message but is also visually optimized to meet the specific
            layout and aesthetic requirements of each target language. Through
            our meticulous approach, we help clients achieve cohesive,
            culturally resonant designs that enhance the impact of their
            content.
          </p>
        </div>
        <div>
            <div className='bg-white rounded-2xl'>
          <img src="/images/image.png" className="p-5 rounded-2xl" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
}
