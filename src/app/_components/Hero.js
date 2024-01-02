import Container from './Container';
import Link from 'next/link';
import Image from 'next/image';
import heroImg from "../../../public/img/img035.jpg"

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap pt-28 pb-18">
        <div className="flex items-center w-full lg:w-1/2 lg:px-10">
            <div className="max-w-2xl mb-8 pr-3">
                <h1 className="text-4xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight">
                    Magician Konstantin Vodolazhskii
                </h1>
                <p className="py-5 text-xl leading-normal lg:text-xl xl:text-2xl text-gray-100">
                    Ahoy! My name is Konstantin and I have done magic ever since I can
                    remember. My favourite type of mgic is card magic, but I don't 
                    shy away from grandious stage shows either!
                </p>
                <p className="py-5 text-xl leading-normal lg:text-xl xl:text-2xl text-gray-100">
                    Whether you nare looking for an entertainer to warm up an audience
                    with intimate close-up magic or your are looking for whole night
                    entertainment to your company event or a wedding, I am here to 
                    help you!
                </p>
                <div className="flex flex-col items-start space-y-3 sm:space-y-0 sm:items-center">
                    <Link
                        href="#contact"
                        className="px-7 py-3 text-white text-xl bg-indigo-600 rounded-md"
                    >
                        Book me!
                    </Link>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
            <Image
                src={heroImg}
                width="529"
                height="529"
                className={"object-cover rounded-full hidden lg:inline"}
                alt="Konstantin Vodolazhskii"
                loading="eager"            
             />
        </div>
      </Container>
    </>
  );
};

export default Hero