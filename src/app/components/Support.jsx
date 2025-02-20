export default function Support() {
  const supportImages = [
    "/images/s8.png",
    "/images/s7.png",
    "/images/s6.png",
    "/images/s5.png",
    "/images/s4.png",
    "/images/s3.png",
    "/images/s2.png",
    "/images/s1.png",
  ];
  return (
    <div className="container mx-auto py-20">
      <div>
        <div className="">
            <h1 className="text-[24px] leading-[26px] text-[Quicksand] text-[#121212] text-center">Formats We Support</h1>
            <p className='text-[Inter-Regular] text-[16px] leading-[19.36px] text-[#999999] mt-4'>At Transfective DTP, we do more than just translate words; we transform your content into an engaging journey that captivates and resonates. Our services bridge linguistic and cultural divides, creating a compelling, informative, and immersive experience for your audience.</p>
            <div className="flex space-x-10 justify-center mt-8">
            {supportImages.map((image, index) => (
            <img key={index} src={image} alt={`Format ${index + 1}`} />
          ))}
            </div>
        </div>
      </div>
    </div>
  )
}
