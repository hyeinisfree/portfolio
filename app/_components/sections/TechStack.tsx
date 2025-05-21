import React, { useState } from 'react';
import { FaJava, FaGithub } from 'react-icons/fa';
import {
  SiRubyonrails,
  SiSpring,
  SiMysql,
  SiAmazon,
  SiDocker,
  SiJenkins,
  SiGit,
} from 'react-icons/si';
import { FaGem } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface StackData {
  name: string;
  icon: IconType;
  color: string;
  details: string[];
}

interface SkillProps {
  stack: StackData;
  isOpen: boolean;
  toggleOpen: () => void;
}

const Skill: React.FC<SkillProps> = ({ stack, isOpen, toggleOpen }) => {
  const Icon = stack.icon;
  return (
    <div className="border border-gray-300 rounded-lg mb-4">
      <button
        onClick={toggleOpen}
        className="w-full flex items-center p-4 bg-gray-100 hover:bg-gray-200 rounded-t-lg focus:outline-none"
        aria-expanded={isOpen}
        aria-controls={`${stack.name}-details`}
      >
        <Icon className="w-8 h-8 mr-3" style={{ color: stack.color }} />
        <span className="text-lg font-medium">{stack.name}</span>
        <span className="ml-auto text-xl">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div
          id={`${stack.name}-details`}
          className="p-4 bg-white text-gray-700 border-t border-gray-300 rounded-b-lg"
        >
          <ul className="list-disc list-inside space-y-1">
            {stack.details.map((detail, idx) => (
              <li key={idx}>{detail}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const TechStack = () => {
  const [openSkill, setOpenSkill] = useState<string | null>(null);

  const stacksByCategory: { [category: string]: StackData[] } = {
    Language: [
      {
        name: 'Java',
        icon: FaJava,
        color: '#007396',
        details: [
          '객체지향 프로그래밍에 대한 깊은 이해가 있습니다.',
          '멀티스레딩과 동시성 프로그래밍을 구현할 수 있습니다.',
          'JVM과 메모리 관리에 대한 이해가 있습니다.',
        ],
      },
      {
        name: 'Ruby',
        icon: FaGem,
        color: '#CC342D',
        details: [
          'Ruby의 메타프로그래밍 기능을 활용할 수 있습니다.',
          'Ruby의 다양한 내장 메서드를 효율적으로 사용할 수 있습니다.',
          'Ruby의 문법적 특성을 활용한 깔끔한 코드 작성이 가능합니다.',
        ],
      },
    ],
    'Backend Framework': [
      {
        name: 'Spring Framework',
        icon: SiSpring,
        color: '#6DB33F',
        details: [
          'Spring Boot를 사용한 RESTful API 개발이 가능합니다.',
          'Spring Security를 활용한 인증/인가 구현이 가능합니다.',
          'Spring Data JPA를 사용한 데이터베이스 연동이 가능합니다.',
        ],
      },
      {
        name: 'Ruby on Rails',
        icon: SiRubyonrails,
        color: '#CC0000',
        details: [
          'Rails의 MVC 패턴을 활용한 웹 애플리케이션 개발이 가능합니다.',
          'Active Record를 사용한 데이터베이스 연동이 가능합니다.',
          'Rails의 다양한 젬을 활용한 기능 확장이 가능합니다.',
        ],
      },
    ],
    Database: [
      {
        name: 'MySQL',
        icon: SiMysql,
        color: '#4479A1',
        details: [
          '복잡한 쿼리 작성과 최적화가 가능합니다.',
          '인덱싱과 성능 튜닝이 가능합니다.',
          '트랜잭션과 ACID 특성을 이해하고 있습니다.',
        ],
      },
    ],
    'Infra / DevOps': [
      {
        name: 'AWS',
        icon: SiAmazon,
        color: '#FF9900',
        details: [
          'AWS EC2를 사용하여 REST API 서버를 구축할 수 있습니다.',
          'AWS S3를 사용하여 이미지 서버를 구축할 수 있습니다.',
          'AWS RDS를 사용하여 DB 서버를 구축할 수 있습니다.',
        ],
      },
      {
        name: 'Docker',
        icon: SiDocker,
        color: '#2496ED',
        details: [
          'Docker를 사용한 컨테이너화가 가능합니다.',
          'Docker Compose를 사용한 다중 컨테이너 관리가 가능합니다.',
          'Docker 이미지 최적화와 보안 설정이 가능합니다.',
        ],
      },
      {
        name: 'Jenkins',
        icon: SiJenkins,
        color: '#D24939',
        details: [
          'Jenkins를 사용한 CI/CD 파이프라인 구축이 가능합니다.',
          '다양한 플러그인을 활용한 자동화가 가능합니다.',
          'Jenkins Pipeline을 사용한 복잡한 배포 프로세스 구현이 가능합니다.',
        ],
      },
    ],
    Tools: [
      {
        name: 'Git',
        icon: SiGit,
        color: '#F05032',
        details: [
          'Git을 사용한 버전 관리가 가능합니다.',
          '브랜치 전략 수립과 병합이 가능합니다.',
          'Git Flow 등의 워크플로우를 이해하고 있습니다.',
        ],
      },
      {
        name: 'Github',
        icon: FaGithub,
        color: '#181717',
        details: [
          'Github를 사용한 협업 개발이 가능합니다.',
          'Pull Request와 코드 리뷰가 가능합니다.',
          'Github Actions를 사용한 CI/CD가 가능합니다.',
        ],
      },
    ],
  };

  const toggleSkill = (name: string) => {
    setOpenSkill(openSkill === name ? null : name);
  };

  return (
    <section id="tech-stack" className="flex flex-col font-clash py-20">
      <h2 className="text-4xl xl:text-5xl 2xl:text-6xl font-medium mb-12">
        Tech Stack
      </h2>
      {Object.entries(stacksByCategory).map(([category, stacks]) => (
        <div key={category} className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">{category}</h3>
          <div>
            {stacks.map((stack) => (
              <Skill
                key={stack.name}
                stack={stack}
                isOpen={openSkill === stack.name}
                toggleOpen={() => toggleSkill(stack.name)}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default TechStack;
