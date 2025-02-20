import React from 'react';

const sections = [
  {
    title: "Layout and Formatting Consistency",
    description:
      "Our specialists meticulously ensure that every aspect of your document’s formatting—from punctuation and hyphenation to other layout features—is perfectly aligned with its original in the target language. This steadfast attention to detail preserves the integrity of your original design, ensuring a consistent presentation across all languages.",
    image: "/images/im2.png",
  },
  {
    title: "Visual Elements Integrity",
    description:
      "Our team is committed to maintaining the authenticity of every visual element within your content. From precise caption translations to the faithful reproduction of illustrations and graphic design elements, we safeguard the original’s intended visual impact and aesthetic appeal.",
    image: "/images/im4.png",
  },
  {
    title: "Functionality and Interactivity",
    description:
      "Our DTP services extend beyond static visuals. We meticulously adapt interactive components such as order forms, feedback mechanisms, client contact forms, and hyperlinks to ensure they function flawlessly in the target language. This guarantees a seamless and engaging interactive experience for your audience.",
    image: "/images/im3.png",
  },
  {
    title: "Text-to-White-Space Ratio",
    description:
      "The balance between text and white space is vital for both readability and visual appeal. Our DTP experts skillfully maintain accurate text-to-white-space ratios, significantly enhancing the aesthetics and user experience of your content.",
    image: "/images/im.png",
  },
];

export default function SectionTwo() {
  return (
    <div className="container mx-auto py-20 px-10 grid grid-cols-1 md:grid-cols-2 gap-16 bg-white justify-items-center">
      {sections.map((section, index) => (
        <div
          key={index}
          className="bg-[#F5F5F5] w-[380px] px-10 py-8 text-center rounded-xl  border border-gray-300"
        >
          <h1 className="font-quicksand text-[24px] leading-[26px] text-[#121212]">
            {section.title}
          </h1>
          <p className="font-inter text-[16px] leading-[19.36px] text-[#999999] mt-6">
            {section.description}
          </p>
          <div className="mt-6 flex justify-center">
            <img
              src={section.image}
              className="w-[300px] h-auto object-cover"
              alt={section.title}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
