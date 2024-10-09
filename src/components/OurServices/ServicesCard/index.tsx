import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import { SectionProps } from "src/types";

const ServicesCard = ({ title, children }: SectionProps): JSX.Element => {
  return (
    <Card
      shadow={false}
      className="h-[330px] w-full overflow-hidden bg-BrandYellow"
    >
      <CardHeader
        className="m-0 rounded-none h-[250px]"
      >
        {children}
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