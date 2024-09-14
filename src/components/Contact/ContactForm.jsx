"use client"
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
const ContactForm = () => {
const handleSubmit = (e) =>{
    e.preventDefault()
    const name =  e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const data = {name, email , message};
    
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    ).then((result)=>{
      if (result.status === 200) {
        Swal.fire({
          title: 'Success!',
          text: 'Your email has been sent successfully.',
          icon: 'success'
        });
     
      }
      
    }).catch((error)=>{
      Swal.fire({
        title: "error!",
        text: error?.message,
        icon: "error"
      });
    })
     
  }

    return (
        <form onSubmit={(e)=>handleSubmit(e)} id="contactForm">
        <div className="mb-6">
          <div className="mx-0 mb-1 sm:mb-4">
            <div className="mx-0 mb-1 sm:mb-4">
              <label
                htmlFor="name"
                className="pb-1 text-xs uppercase tracking-wider"
              ></label>
              <input
                type="text"
                id="name"
                autoComplete="given-name"
                placeholder="Your name"
                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
                name="name"
              />
            </div>
            <div className="mx-0 mb-1 sm:mb-4">
              <label
                htmlFor="email"
                className="pb-1 text-xs uppercase tracking-wider"
              ></label>
              <input
                type="email"
                id="email"
                autoComplete="email"
                placeholder="Your email address"
                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
                name="email"
              />
            </div>
          </div>
          <div className="mx-0 mb-1 sm:mb-4">
            <label
              htmlFor="textarea"
              className="pb-1 text-xs uppercase tracking-wider"
            ></label>
            <textarea
              id="textarea"
              name="message"
              cols="30"
              rows="5"
              placeholder="Write your message..."
              className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"
            ></textarea>
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-[#84b93e] text-white px-6 py-3 font-xl rounded-md sm:mb-0"
          >
            Send Message
          </button>
        </div>
      </form>
    );
};

export default ContactForm;