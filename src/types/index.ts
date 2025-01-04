export type SectionProps = {
  title: string;
  children: JSX.Element;
};

export type ProjectCardProps = {
  title: string;
  children: JSX.Element;
  link: string;
};

export type ArrowProps = {
  id: number;
  open: number;
};

export type AccordionProps = {
  title: string;
  id: number;
  description: Description[];
};

export type Description = {
  name: string;
  unit: string;
  price: string;
  comments: string | undefined;
};
