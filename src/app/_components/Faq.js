const faqs = [
  {
    question: "What kind of magic your do?",
    answer: "Anywhere from stage magic to close-up magic.",
  },
  {
    question: "Now can I book you?",
    answer: 'Best way is by email. Check out the "Get in touch" section for more info.',
  },
  {
    question: "What languages do you perform in?",
    answer: "English or Russian.",
  },
  {
    question: "Do you do card tricks?",
    answer: "Yes, Card tricks are one of my favourite form of magic.",
  },
];

const Faq = () => {  

  return (
    <section className="px-52 bg-zinc-950 pt-20 pb-36">
      <h2 className="text-4xl font-bold text-center mb-20">FAQ</h2>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-2">
        {faqs.map((f) => (
          <FaqCard data={f} key={f.question} />
        ))}
      </div>
    </section>
  )
}

export default Faq;

const FaqCard = ({ data }) => {
  const { question, answer } = data;
  return (
    <div className="lg:col-span-2 xl:col-auto">
      <div className="flex flex-col justify-between w-full h-full px-5 rounded-2xl py-5 bg-neutral-800">
        <h3 className="text-2xl text-gray-400 pb-2">{question}</h3>
        <p className="text-xl leading-normal">{answer}</p>
      </div>
    </div>
  )
}