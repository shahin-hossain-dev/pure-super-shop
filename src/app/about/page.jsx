import Services from "@/components/Homepage/Services";
import Image from "next/image";


const page = () => {
    return (
<<<<<<< HEAD
=======

>>>>>>> cc748b7545b0b5595576c399d903640bc5eed3f4
        <section className="py-12">
      <div className=" mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
 {/* About Us Title and Description */}
 <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-gray-600 text-lg leading-relaxed ">
          Welcome to PureSuper! We are dedicated to creating innovative solutions that drive positive change and empower communities. Our team of passionate professionals is committed to delivering excellence and inspiring others to embrace new technologies and opportunities. At PureSuper, we believe in the power of creativity and collaboration to solve the {`world's`} most pressing challenges. We strive to foster a culture of continuous learning and growth, where every idea is valued, and every voice is heard. Our focus is on building sustainable, scalable solutions that not only meet today’s needs but also anticipate the future. Join us on our journey as we work towards a brighter, more connected world.
          </p>

        </div>
        <div className="">
        <Image
                className="rounded-full mx-auto mb-4"
                src="/assets/Banner_image/cart.gif"
                alt="Team Member"
                width={'400'}
                height={'400'}
              />
        </div>
       
        </div>

        
       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
         {/* Our Vision */}
         <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our vision is to empower individuals and communities to achieve their full potential through innovative and accessible solutions. We strive to be a leader in our industry, inspiring others with our commitment to excellence and social responsibility.
          </p>
        </div>

        {/* Our Mission */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our mission is to create sustainable value for our customers, employees, and stakeholders by providing high-quality products and services that improve lives and promote positive social and environmental impact.
          </p>
        </div>
       </div>

        {/* Our Team */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Team</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto pb-10">
  Our team is a diverse group of talented professionals united by a shared passion for innovation and excellence.
</p>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
              <Image
                className="w-24 h-24 rounded-full mx-auto mb-4"
                src="/assets/team_member/images.jfif"
                alt="Team Member"
                width={'100'}
                height={'100'}
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-500">CEO & Founder</p>
              <p className="text-gray-600 mt-2">
                John is an experienced entrepreneur with a passion for innovation and leadership.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
              <Image
                className="w-24 h-24 rounded-full mx-auto mb-4"
                src="/assets/team_member/download.jfif"
                alt="Team Member"
                width={'100'}
                height={'100'}
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-500">Chief Marketing Officer</p>
              <p className="text-gray-600 mt-2">
                Jane is a marketing strategist with over 10 years of experience in digital marketing and brand management.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
              <Image
                className="w-24 h-24 rounded-full mx-auto mb-4"
                src="/assets/team_member/images (1).jfif"
                alt="Team Member"
                width={'100'}
                height={'100'}
              />
              <h3 className="text-xl font-semibold text-gray-800">Michael Lee</h3>
              <p className="text-gray-500">Head of Development</p>
              <p className="text-gray-600 mt-2">
                Michael leads our development team with a focus on innovation, quality, and user-centric design.
              </p>
            </div>
          </div>
        </div>
        <Services></Services>
      </div>
    </section>
    );
};

export default page;