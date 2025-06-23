import { ServicesData } from "../constants/ServicesData";

const Services = () => {
  return (
    <div className="container mt-14">
      <div className="flex flex-col gap-7 sm:flex-row sm:flex-wrap sm:justify-between xl:gap-0">
        {ServicesData.map((service) => {
          const { id, title, description, image } = service;

          return (
            <div
              key={id}
              className="group flex gap-4 sm:w-[calc(50%-14px)] xl:w-1/4"
            >
              <div
                className="relative h-12 w-16 bg-[center_0px] bg-no-repeat transition-all duration-300 group-hover:bg-[center_-67px]"
                style={{ backgroundImage: `url(${image})` }}
              ></div>

              <div>
                <h2 className="text-lg font-medium"> {title} </h2>
                <p className="text-sm"> {description} </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
