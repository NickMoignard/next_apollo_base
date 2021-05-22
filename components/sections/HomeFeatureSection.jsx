import Image from "next/image";
import AnimatedSticker from "../atoms/AnimatedSticker";
import tigerImage from "../../public/tiger.jpg";

const HomeFeatureSection = () => {
  return (
    <section className="">
      <h5 className="pb-6" style={{ paddingLeft: `${50}%` }}>
        the game is changing
      </h5>
      <div className="aside-svg" />
      <div className="w-2/5 absolute top-0 left-0">
        <Image
          width={2000}
          height={2000}
          src="/monkey.svg"
          alt="placeholder image"
        />
      </div>
      <h1 className="pb-1 text-9xl text-right">Introducing</h1>
      <h1 className="text-9xl text-right">A NEW PRODUCT</h1>

      <div className="grid grid-cols-2 gap-x-10">
        <Image
          width={300}
          height={300}
          src="/rockClimber.jpg"
          alt="placeholder image"
          className="object-contain"
        />
        <div className="px-4 pt-8">
          <p className="py-3">
            <b>Now you can use our solution for your problem.</b>
          </p>
          <p className="py-3">
            For the first time ever, you can manage your entire experience
            business, all in one place. No more broken integrations, pricey
            custom coding, third-party booking fees, or manually managing
            bookings. With experience commerce you can work on your business,
            not in your business.
          </p>
          <button type="button" className="read-more text-xs rounded-3xl border-2 border-black leading-3">
            read more
          </button>
          <AnimatedSticker />
        </div>
      </div>
    </section>
  );
};

export default HomeFeatureSection;
