
const InfoComponent = ({ title, text, src, alt }) => {
  return (
    <div>
      <div className="flex flex-col items-center p-9">
        <img src={src} alt="" />
        <div className="text-center max-w-[250px]">
          <h3 className="py-4 text-xl text-blue-900 font-extrabold uppercase">
            {title}
          </h3>
          <p className="text-blue-900 font-semibold">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoComponent;
