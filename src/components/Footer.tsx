

const Footer = () => {
  return (
    <div className=" flex bg-gray-300 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex mb-4 md:-mb-3">
          <span className="text-2xl text-gray-600 font-semibold tracking-tight -mt-4">
            PioterEats.com
          </span>
        </div>
        <span className="text-gray-600 font-semibold tracking-tight flex gap-10">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </span>
      </div>
    </div>
  );
}

export default Footer;