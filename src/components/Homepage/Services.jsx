import { FcOnlineSupport } from "react-icons/fc";
import { MdOutlinePayment } from "react-icons/md";
import { GiBoxUnpacking } from "react-icons/gi";
const productFeatures = [
   {
      title: "Product Packing",
      icon: GiBoxUnpacking,
      description: "Eco-friendly packaging ensures products arrive safely and sustainably."
    },
   {
      title: "24x7 Support",
      icon: FcOnlineSupport,
      description: "Our team is available round-the-clock to assist you with any queries."
    },
   {
      title: "Secure Payment",
      icon: MdOutlinePayment,
      description: "Your transactions are protected with advanced security encryption."
    }
];
  

const Services = () => {
    return (
       <section className="px-3 pt-20 lg:px-0">
        <div className="text-center max-w-2xl  mx-auto">
        <h2 className="text-3xl font-bold mb-2">Our Services</h2>
        <p className="text-gray-600">
          We offer a range of services designed to provide you with the best experience. From secure packaging to round-the-clock support, discover our commitment to quality.
        </p>
        </div>

         <div className="grid mt-10  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5">
            {
                productFeatures?.map((service , index) => <div className="text-center bg-[#F7F7F8] py-8 rounded-lg hover:shadow-lg px-4 space-y-3" key={index}>
                    {service?.icon && <service.icon className="text-5xl mx-auto" />}
                    <h3 className="text-xl font-bold">{service?.title}</h3>
                    <h3>{service?.description}</h3>
                </div>
            )
            }
        </div>
       </section>
    );
};

export default Services;