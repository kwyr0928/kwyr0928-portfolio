import Image from "next/image";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface PortfolioCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  tag: string;
}

export default function BlenderCard({
  image,
  title,
  description,
  date,
  tag,
}: PortfolioCardProps) {
  return (
    <Card className="m-5 w-96 text-gray1">
      <CardHeader>
        <Image src={image} alt="Header" width={500} height={500} className="" />
        <div className="flex items-center space-x-3">
          <CardTitle className="py-1 text-2xl">{title}</CardTitle>
          <Badge className="flex h-full items-center">{tag}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-blue-600 hover:underline" dangerouslySetInnerHTML={{ __html: description }} />
      </CardContent>
      <CardFooter>
        <p className="ml-auto text-sm">作成日：{date}</p>
      </CardFooter>
    </Card>
  );
}
