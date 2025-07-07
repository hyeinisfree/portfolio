import { Button } from '@/components/ui/button';
import Image from 'next/image';
import matdongsan from '@/public/images/matdongsan.webp';

export default function Projects() {
  return (
    <div className="flex flex-col justify-center font-clash">
      <div className="flex">
        <span>Year</span>
        <Button>All</Button>
        <Button>2025</Button>
        <Button>2024</Button>
        <Button>2022</Button>
      </div>
      <div className="flex">
        <span>Position</span>
        <Button>All</Button>
        <Button>Backend</Button>
        <Button>Frontend</Button>
      </div>
      <div className="flex">
        <span>Tech Stack</span>
        <Button>All</Button>
        <Button>Java/SpringBoot</Button>
        <Button>Ruby</Button>
      </div>

      <div className="flex flex-col">
        <h2 className="text-4xl xl:text-5xl 2xl:text-6xl font-medium mb-4 md:mb-8 xl:mb-14 2xl:mb-20">
          맛동산
        </h2>
        <div className="w-1/4">
          <Image src={matdongsan} alt="matdongsan"></Image>
        </div>
      </div>
    </div>
  );
}
