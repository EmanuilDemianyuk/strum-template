import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import { SectionProps } from "src/types";

const ServicesCard = ( { title, img }: SectionProps ): JSX.Element => {
  return (
    <Card
    shadow={false}
    className="h-[330px] w-full overflow-hidden bg-BrandYellow"
    >
     <CardHeader
      className="m-0 rounded-none h-[250px]"
      >
        <img
          className="w-full h-full object-cover transition-transform hover:scale-[1.2]"
          src={img}
          alt="image"
        />
      </CardHeader>
    <CardBody className="flex justify-center items-center">
      <Typography
        variant="h6"
        className="font-bold text-black text-center font-content h-[55px] sm:h-[70px]"
      >
        {title}
      </Typography>
      </CardBody>
    </Card>
  );
}

export default ServicesCard;