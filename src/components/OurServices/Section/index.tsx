import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import { SectionProps } from "src/types";

const Section = ( { title, img }: SectionProps ): JSX.Element => {
  return (
    <Card
    shadow={false}
    className="h-full w-full overflow-hidden"
    >
     <CardHeader
      floated={false}
      shadow={false}
      color="transparent"
      className="m-0 rounded-none h-[200px]"
      >
        <img
          className="w-full h-full object-cover transition-transform hover:scale-[1.2]"
          src={img}
          alt="image"
        />
      </CardHeader>
    <CardBody className="bg-BrandYellow flex justify-center items-center">
      <Typography
        variant="h6"
        className="font-bold text-black min-h-[50px] sm:min-h-[80px] text-center font-content"
      >
        {title}
      </Typography>
      </CardBody>
    </Card>
  );
}

export default Section;