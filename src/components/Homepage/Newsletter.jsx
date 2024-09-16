"use client"
const Newsletter = () => {
  return (
    <section
      style={{ backgroundImage: 'url("/assets/Banner_Image/Newsletter.svg")' }}
      className="py-6 text-white  rounded-lg bg-cover mb-10"
    >
      <div className="mx-auto flex flex-col justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
        <div className="flex flex-col space-y-4 text-center lg:text-left">
          <h1 className="text-4xl font-bold leading-none">
            Join Our Shopping Community
          </h1>
          <p className="text-lg">
            Subscribe to our newsletter for the latest deals, product updates,
            and tips on all things food, home, personal care, and more!
          </p>
        </div>
        <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="example@email.com"
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
            />
            <button
              type="button"
              className="w-2/5 p-3 font-semibold bg-[#84b93e] text-white rounded-r-lg sm:w-1/3 "
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
