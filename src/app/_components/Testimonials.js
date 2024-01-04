import Image from "next/image";
import userImage from "../../../public/img/profile-pic.png";

const Testimonials = () => {
  const testinomials = [
    {
      name: "Timo",
      image: userImage,
      comment: "Konstantin's magic was super awesome!",
    },
    {
      name: "Ville",
      image: userImage,
      comment: "I couldn't believe my eyes!",
    },
    {
      name: "Taneli",
      image: userImage,
      comment: "Very entertaining, big thumbs up!"
    },
    {
      name: "Sami",
      image: userImage,
      comment: "The cards tricks of Konstantin did were unbelievable!"
    }
  ];
  return (
    <section className="px-52 bg-zinc-950 pt-24 pb-32">
      <h2 className="text-4xl font-bold text-center mb-20">
        What people are saying
      </h2>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-2">
        {testinomials.map((t) => (
          <TestimonialCard data={t} key={t.name} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

const TestimonialCard = ({ data }) => {
  const { image, name, comment } = data;
  return (
    <div className="lg:col-span-2 xl:col-auto">
      <div className="flex flex-col justify-between w-full h-full px-5 rounded-2xl py-5 bg-neutral-800">
        <p className="text-xl leading-normal">{comment}</p>

        <Avatar image={image} name={name} />
      </div>
    </div>
  );
};

const Avatar = (props) => {
  return (
    <div className="flex items-center mt-3 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-10 h-10">
        <Image
          src={props.image}
          width="100"
          height="100"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
      </div>
    </div>
  );
};