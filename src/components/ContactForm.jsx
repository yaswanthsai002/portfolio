import { useRef } from "react";
import Swal from "sweetalert2";
  const ContactForm = () => {
  // Create a ref for the form
  const formRef = useRef(null);
  const emailAPIKey = import.meta.env.EMAIL_API_KEY
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", {emailAPIKey});

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });

      // Reset the form fields
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  };

  return (
    <div className="flex flex-col self-center w-full rounded-lg lg:w-2/5 md:w-3/5">
      <h1 className="text-3xl font-bold text-center font-outfit">
        Contact Form
      </h1>
      <form
        ref={formRef} // Add ref to the form
        action=""
        className="flex flex-col w-full gap-y-4"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-y-1">
          <label htmlFor="fullName" className="text-lg text-white font-outfit">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            required
            className="p-2 font-semibold text-gray-800 rounded-sm outline-none"
            placeholder="Enter your name"
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="email" className="text-lg text-white font-outfit">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="p-2 font-semibold text-gray-800 rounded-sm outline-none"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="message" className="text-lg text-white font-outfit">
            Message
          </label>
          <textarea
            name="message"
            id="message" // Use a consistent id here
            cols="30"
            rows="10"
            required
            className="p-2 font-semibold text-gray-800 rounded-sm outline-none"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="p-2 font-semibold text-white rounded-lg bg-accent"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
