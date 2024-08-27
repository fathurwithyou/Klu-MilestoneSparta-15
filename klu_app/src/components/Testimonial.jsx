import React from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    text: "This platform has completely changed the way I learn. The interface is user-friendly, and the content is top-notch.",
    role: "Software Engineer",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "I've tried many other platforms, but this one stands out for its quality and community support.",
    role: "Product Manager",
  },
  {
    id: 3,
    name: "Alice Johnson",
    text: "Learning with this platform has been a game-changer for my career. Highly recommended!",
    role: "Data Scientist",
  },
];

const Testimonial = () => {
  return (
    <div id='testimonial' className="p-5 lg:pt-3 mt-10">
      <h1 className="text-center font-bold text-navy text-5xl mb-8">What Clients Say</h1>{" "}
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-8 py-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center max-w-sm">
            <p className="text-xl italic mb-4">"{testimonial.text}"</p>
            <h3 className="text-lg font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-600">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
