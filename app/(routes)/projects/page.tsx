import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import matdongsan from "@/public/images/matdongsan.webp";
import ssgImage from "@/public/images/sswu.jpg";

export default function Projects() {
  return (
    <div className="flex flex-col justify-center font-clash">
      <h1 className="text-6xl my-4">Projects</h1>
      <div className="filter">
        <div className="flex items-center">
          <span className="w-[100px]">Year</span>
          <Button variant="outline" size="sm">
            All
          </Button>
          <Button variant="outline" size="sm">
            2025
          </Button>
          <Button variant="outline">2024</Button>
          <Button variant="outline">2022</Button>
        </div>
        <div className="flex items-center">
          <span className="w-[100px]">Position</span>
          <Button variant="outline">All</Button>
          <Button variant="outline">Backend</Button>
          <Button variant="outline">Frontend</Button>
        </div>
        <div className="flex items-center">
          <span className="w-[100px]">Tech Stack</span>
          <Button variant="outline">All</Button>
          <Button variant="outline">Java/SpringBoot</Button>
          <Button variant="outline">Ruby</Button>
        </div>
      </div>
      <div className="items grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <ProjectCard
          title="맛동산"
          description="제철 음식 아카이빙/커뮤니티 서비스"
          startDate="2021/05"
          endDate="2022/09"
          thumbnail={matdongsan}
          position="Backend Developer"
          techStack={["SpringBoot", "Java", "MySQL", "AWS"]}
          icon={matdongsan}
        />
        <ProjectCard
          title="Hyein Kim"
          description="제철 음식 아카이빙/커뮤니티 서비스"
          startDate="2021/05"
          endDate="2022/09"
          thumbnail={matdongsan}
          position="Backend Developer"
          techStack={["SpringBoot", "Java", "MySQL", "AWS"]}
          icon={matdongsan}
        />
        <ProjectCard
          title="수정광산"
          description="성신여자대학교 커뮤니티 서비스"
          startDate="2021/05"
          endDate="2022/09"
          thumbnail={ssgImage}
          position="Backend Developer"
          techStack={["SpringBoot", "Java", "MySQL", "AWS"]}
          icon={ssgImage}
        />
        <ProjectCard
          title="스토리지"
          description="성신여자대학교 커뮤니티 서비스"
          startDate="2021/05"
          endDate="2022/09"
          thumbnail={ssgImage}
          position="Backend Developer"
          techStack={["SpringBoot", "Java", "MySQL", "AWS"]}
          award="2021 원티드 '해,커리어' 예선 진출 (상위 50개팀)"
          icon={ssgImage}
        />
        <ProjectCard
          title="띵-동"
          description="성신여자대학교 커뮤니티 서비스"
          startDate="2021/05"
          endDate="2022/09"
          thumbnail={ssgImage}
          position="Backend Developer"
          techStack={["SpringBoot", "Java", "MySQL", "AWS"]}
          award="2021 원티드 '해,커리어' 예선 진출 (상위 50개팀)"
          icon={ssgImage}
        />
      </div>
    </div>
  );
}
