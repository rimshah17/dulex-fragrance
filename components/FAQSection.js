export default function FAQSection() {
    const faqData = [
      {
        question: "How we serve food?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
      },
      {
        question: "How can we get in touch with you?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
      },
      {
        question: "How is our food quality?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
      },
      {
        question: "What will be delivered? And When?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
      },
      {
        question: "How do we give home delivery?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
      },
      {
        question: "Is this restaurant 24 hours open?",
        answer:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
      },
    ];
  
    return (
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Questions Looks Here</h2>
        <p className="text-gray-600 text-center mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="singleFaq rounded-lg p-4  bg-gray-50 border-gray-200"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{item.question}</h3>
                <span className="text-gray-500 text-xl">+</span>
              </div>
              <p className="mt-4 text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  