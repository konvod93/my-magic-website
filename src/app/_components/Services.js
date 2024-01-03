
const Services = () => {
  const services = [
    {
        title: "Close-up magic",
        subtitle: "45 min",
        description:
            "Wandering close up magic in a bar, company event, wedding or similar situation.",
        price: "497 EUR",
    },
    {
        title: "Stage show",
        subtitle: "60 min",
        description:
            "Prepare to be spellbound as I conjure wonders, illusions, and astonishments that will leave",
        price: "997 EUR", 
    },
    {
        title: "Close-up magic & stage show",
        subtitle: "120 min",
        description:
            "Wandering close-up magic in tables e.g. in a wedding. The evening will culminate to an aston:",
        price: "1300 EUR", 
    },
    {
        title: "Magic lecture",
        subtitle: "180 min",
        description:
            "Perfect for your company retreat. I will give an hour lecture talking and teaching about the",
        price: "2000 EUR", 
    },
  ];
  return (
    <section className="pb-32 pt-24">
        <h2 className="text-4xl font-bold text-center mb-20">Services</h2>
        <div className="py-4 px-4 mx-auto max-w-screen-xl">
            <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0 place-items-center items-stretch">
                {services.map((s) => (
                    <ServiceCard data={s} key={s.title} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default Services;

const ServiceCard = ({ data }) => {
  const { title, subtitle, price, description } = data;
  return (
    <>
      <div className="flex flex-col p-6 lg:mx-1 sm:mx-auto max-w-lg text-center rounded-lg border shadow border-gray-600 xl:p-8 text-white bg-neutral-800">
        <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
        <p className="font-light text-xl text-gray-400">{subtitle}</p>
        <p className="text-xl mt-4">{description}</p>
        <div className="flex justify-center my-8">
          <span className="mr-2 text-5xl font-extrabold">{price}</span>
        </div>
      </div>
    </>
  );
};