import React, { useState } from "react";
import SectionTitle from "./SectionTitle";

const testimonials = [
  {
    id: 1,
    name: "Jenny Wilson",
    role: "Digital Agency",
    image: "./src/assets/testimonial1.png",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took  type scrambled it to make a type specimen book. It has survived not only five centuries,.",
  },
  {
    id: 2,
    name: "Alex Smith",
    role: "Marketing Expert",
    image: "./src/assets/testimonial2.jpg",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    id: 3,
    name: "Brandon Hans",
    role: "Product Designer",
    image: "./src/assets/testimonial3.jpg",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Business Owner",
    image: "./src/assets/testimonial4.jpg",
    text: "It has survived not only five centuries but also the leap into electronic typesetting, remaining essentially unchanged. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est .",
  },
  {
    id: 5,
    name: "Daniel Johnson",
    role: "Software Engineer",
    image: "./src/assets/testimonial5.jpg",
    text: "Sed quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam . ",
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-16 px-6 flex flex-col items-center">
      <div className="flex justify-center items-center">
        <SectionTitle firstPart={"Our"} lastWord={"Testimonials"}></SectionTitle>
      </div>

      <div className="relative flex items-center justify-center space-x-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`relative rounded-full overflow-hidden transition-all duration-500 ${
              index === activeIndex
                ? "w-40 h-40 border-4 border-yellow-500 p-2"
                : "w-24 h-24 opacity-50"
            }`}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Testimonial Content */}
      <div className="mt-6 text-center max-w-2xl">
        <p className="font-lora text-[18px] text-black-color leading-[176%] tracking-[2%]">{testimonials[activeIndex].text}</p>
        <h3 className="mt-4 font-bold text-lg">
          {testimonials[activeIndex].name} |{" "}
          <span className="text-gray-500">{testimonials[activeIndex].role}</span>
        </h3>
      </div>

      {/* Dots Indicator */}
      <div className="flex space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex ? "bg-yellow-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={nextTestimonial}
        className="mt-6 px-5 py-2 bg-yellow-500 text-white rounded-lg shadow-lg hover:bg-yellow-600 transition"
      >
        Next
      </button>
    </section>
  );
};

export default Testimonial;
