export type SectionProps = {
  title: string;
  img: string;
}

export type ProjectCardProps = {
  title: string;
  img: string;
  link: string;
}

export type ArrowProps = {
  id: number;
  open: number;
}

export type AccordionProps = {
  title: string;
  id: number;
  description: Description[];
}

export type Description = {
  name: string;
  unit: string;
  price: number;
  comments: string | undefined;
}

