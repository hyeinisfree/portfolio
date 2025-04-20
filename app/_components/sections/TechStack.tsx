import React, { useState } from "react";
import { FaJava, FaGithub } from "react-icons/fa";
import {
  SiRubyonrails,
  SiSpring,
  SiMysql,
  SiAmazon,
  SiDocker,
  SiJenkins,
  SiGit,
} from "react-icons/si";
import { FaGem } from "react-icons/fa";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

interface StackData {
  name: string;
  icon: IconType;
  color: string;
  details: string[];
}

interface StackBoxProps {
  name: string;
  Icon: IconType;
  color?: string;
  isSelected?: boolean;
  onClick: () => void;
  ariaLabel: string;
}

interface DetailCardProps {
  name: string;
  details: string[];
  onClose: () => void;
}

const StackBox: React.FC<StackBoxProps> = ({
  name,
  Icon,
  color,
  isSelected,
  onClick,
  ariaLabel,
}) => {
  return (
    <div
      className={`stack-box w-28 h-28 rounded-2xl flex justify-center items-center relative overflow-hidden cursor-pointer group transition-all duration-200 hover:scale-105 border ${
        isSelected
          ? "border-gray-400 shadow-md"
          : "border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300"
      }`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <div
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full ${
          isSelected ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <Icon className="w-12 h-12" style={{ color: color }} />
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-y-0 p-2 ${
          isSelected ? `translate-y-0` : "translate-y-full"
        }`}
        style={{ backgroundColor: color + "88" }}
      >
        <span className="text-lg font-medium text-gray-700 text-center leading-tight">
          {name}
        </span>
      </div>
    </div>
  );
};

const DetailCard: React.FC<DetailCardProps> = ({ name, details, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="absolute -left-110 top-0 w-96 bg-white rounded-2xl shadow-lg p-6 border border-gray-200"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-medium">{name}</h3>
        <button
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          ✕
        </button>
      </div>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="text-gray-600">
            • {detail}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const TechStack = () => {
  const [selectedStack, setSelectedStack] = useState<string | null>(null);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
  };

  const stacksMap = new Map<string, StackData>();
  const stacks = [
    [
      {
        name: "Java",
        icon: FaJava,
        color: "#007396",
        details: [
          "객체지향 프로그래밍에 대한 깊은 이해가 있습니다.",
          "멀티스레딩과 동시성 프로그래밍을 구현할 수 있습니다.",
          "JVM과 메모리 관리에 대한 이해가 있습니다.",
        ],
      },
      {
        name: "Ruby",
        icon: FaGem,
        color: "#CC342D",
        details: [
          "Ruby의 메타프로그래밍 기능을 활용할 수 있습니다.",
          "Ruby의 다양한 내장 메서드를 효율적으로 사용할 수 있습니다.",
          "Ruby의 문법적 특성을 활용한 깔끔한 코드 작성이 가능합니다.",
        ],
      },
      {
        name: "Spring\nFramework",
        icon: SiSpring,
        color: "#6DB33F",
        details: [
          "Spring Boot를 사용한 RESTful API 개발이 가능합니다.",
          "Spring Security를 활용한 인증/인가 구현이 가능합니다.",
          "Spring Data JPA를 사용한 데이터베이스 연동이 가능합니다.",
        ],
      },
      {
        name: "Ruby on\nRails",
        icon: SiRubyonrails,
        color: "#CC0000",
        details: [
          "Rails의 MVC 패턴을 활용한 웹 애플리케이션 개발이 가능합니다.",
          "Active Record를 사용한 데이터베이스 연동이 가능합니다.",
          "Rails의 다양한 젬을 활용한 기능 확장이 가능합니다.",
        ],
      },
    ],
    [
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
        details: [
          "복잡한 쿼리 작성과 최적화가 가능합니다.",
          "인덱싱과 성능 튜닝이 가능합니다.",
          "트랜잭션과 ACID 특성을 이해하고 있습니다.",
        ],
      },
      {
        name: "AWS",
        icon: SiAmazon,
        color: "#FF9900",
        details: [
          "AWS EC2를 사용하여 REST API 서버를 구축할 수 있습니다.",
          "AWS S3를 사용하여 이미지 서버를 구축할 수 있습니다.",
          "AWS RDS를 사용하여 DB 서버를 구축할 수 있습니다.",
        ],
      },
      {
        name: "Docker",
        icon: SiDocker,
        color: "#2496ED",
        details: [
          "Docker를 사용한 컨테이너화가 가능합니다.",
          "Docker Compose를 사용한 다중 컨테이너 관리가 가능합니다.",
          "Docker 이미지 최적화와 보안 설정이 가능합니다.",
        ],
      },
      {
        name: "Jenkins",
        icon: SiJenkins,
        color: "#D24939",
        details: [
          "Jenkins를 사용한 CI/CD 파이프라인 구축이 가능합니다.",
          "다양한 플러그인을 활용한 자동화가 가능합니다.",
          "Jenkins Pipeline을 사용한 복잡한 배포 프로세스 구현이 가능합니다.",
        ],
      },
    ],
    [
      {
        name: "Git",
        icon: SiGit,
        color: "#F05032",
        details: [
          "Git을 사용한 버전 관리가 가능합니다.",
          "브랜치 전략 수립과 병합이 가능합니다.",
          "Git Flow 등의 워크플로우를 이해하고 있습니다.",
        ],
      },
      {
        name: "Github",
        icon: FaGithub,
        color: "#181717",
        details: [
          "Github를 사용한 협업 개발이 가능합니다.",
          "Pull Request와 코드 리뷰가 가능합니다.",
          "Github Actions를 사용한 CI/CD가 가능합니다.",
        ],
      },
    ],
  ];

  // 스택 데이터를 Map으로 변환
  stacks.forEach((row) => {
    row.forEach((stack) => {
      stacksMap.set(stack.name, stack);
    });
  });

  const handleStackClick = (name: string) => {
    setSelectedStack(selectedStack === name ? null : name);
  };

  const getStackDetails = (name: string) => {
    return stacksMap.get(name)?.details || [];
  };

  return (
    <section
      id="tech-stack"
      className="flex flex-col justify-center items-center font-clash py-20"
    >
      <h2 className="text-6xl font-medium mb-12">Tech Stack</h2>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.5,
        }}
        className="mb-8 text-gray-500 font-arita text-md flex items-center gap-2"
      >
        <span>✨</span>
        <span>클릭해서 자세히 알아보세요!</span>
        <span>✨</span>
      </motion.div>
      <div className="stack-container flex flex-col items-center gap-6 relative">
        {stacks.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="flex flex-wrap justify-center gap-4 md:gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
          >
            {row.map(({ name, icon: Icon, color }) => (
              <motion.div key={name} variants={item}>
                <StackBox
                  name={name}
                  Icon={Icon}
                  color={color}
                  isSelected={selectedStack === name}
                  onClick={() => handleStackClick(name)}
                  ariaLabel={`${name} 기술 스택 상세 정보 보기`}
                />
              </motion.div>
            ))}
          </motion.div>
        ))}
        {selectedStack && (
          <DetailCard
            name={selectedStack}
            details={getStackDetails(selectedStack)}
            onClose={() => setSelectedStack(null)}
          />
        )}
      </div>
    </section>
  );
};

export default TechStack;
