import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

interface PortfolioCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
}

export default function PortfolioCard({ image, title, description, date }: PortfolioCardProps) {
    return (
    <Card className="w-96 text-gray1 m-5 text-left">
          <CardHeader>
            <Image
              src={image}
              alt="Header"
              width={500}
              height={500}
              className=""
            />
            <CardTitle className="py-1 text-2xl">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="break-words">{description}</p>
          </CardContent>
          <CardFooter>
            <p className="ml-auto text-sm">{date}</p>
          </CardFooter>
        </Card>
        )
    }