import React from 'react';

export default function SectionTwo() {
  return (
    <>
    <div className="container mx-auto py-20 px-10 flex justify-center space-x-16 bg-white">
        <div className="bg-[#F5F5F5] w-[380px] px-10 py-8 text-center rounded-xl">
          <h1 className="font-quicksand text-[24px] leading-[26px] text-[#121212]">
            Layout and Formatting Consistency
          </h1>
          <p className="font-inter text-[16px] leading-[19.36px] text-[#999999] mt-6">
            Our specialists meticulously ensure that every aspect of your document’s formatting—from punctuation and hyphenation to other layout features—is perfectly aligned with its original in the target language. This steadfast attention to detail preserves the integrity of your original design, ensuring a consistent presentation across all languages.
          </p>
          <div className="mt-6 flex justify-center">
            <img src="/images/im2.png" className="w-[300px] h-auto object-cover" alt="Layout Consistency" />
          </div>
        </div>
        <div className="bg-[#F5F5F5] w-[380px] px-6 py-8 text-center rounded-xl">
          <h1 className="font-quicksand text-[24px] leading-[26px] text-[#121212]">
            Visual Elements Integrity
          </h1>
          <p className="font-inter text-[16px] leading-[19.36px] text-[#999999] mt-6 mb-20">
          Our team is committed to maintaining the authenticity of every visual element within your content. From precise caption translations to the faithful reproduction of illustrations and graphic design elements, we safeguard the original’s intended visual impact and aesthetic appeal.
          </p>
          <div className="mt-6 flex justify-center">
            <img src="/images/im4.png" className="w-[300px] h-auto object-cover" alt="Layout Consistency" />
          </div>
        </div>
    </div>
    <div className="container mx-auto py-20 px-10 flex justify-center space-x-16 rounded-xl -mt-10">
    <div className="bg-[#F5F5F5] w-[380px] px-10 py-8 text-center rounded-xl">
      <h1 className="font-quicksand text-[24px] leading-[26px] text-[#121212]">
        Functionality and Interactivity
      </h1>
      <p className="font-inter text-[16px] leading-[19.36px] text-[#999999] mt-6">
      Our DTP services extend beyond static visuals. We meticulously adapt interactive components such as order forms, feedback mechanisms, client contact forms, and hyperlinks to ensure they function flawlessly in the target language. This guarantees a seamless and engaging interactive experience for your audience.
      </p>
      <div className="mt-6 flex justify-center">
        <img src="/images/im3.png" className="w-[300px] h-auto object-cover" alt="Layout Consistency" />
      </div>
    </div>
    <div className="bg-[#F5F5F5] w-[380px] px-6 py-8 text-center rounded-xl">
      <h1 className="font-quicksand text-[24px] leading-[26px] text-[#121212]">
        Text-to-White-Space Ratio
      </h1>
      <p className="font-inter text-[16px] leading-[19.36px] text-[#999999] mt-6 mb-20">
      The balance between text and white space is vital for both readability and visual appeal. Our DTP experts skillfully maintain accurate text-to-white-space ratios, significantly enhancing the aesthetics and user experience of your content.
      </p>
      <div className="mt-6 flex justify-center">
        <img src="/images/im.png" className="w-[300px] h-auto object-cover" alt="Layout Consistency" />
      </div>
    </div>
</div>
</>
  );
}
