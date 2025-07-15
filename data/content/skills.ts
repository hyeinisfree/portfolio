import { Skill } from "@/data/types/content";

import {
  SiRubyonrails,
  SiSpringboot,
  SiMysql,
  SiAmazon,
  SiDocker,
  SiJenkins,
  SiGithubactions,
  SiElasticsearch,
  SiJavascript,
  SiTypescript,
  SiNestjs,
  SiTerraform,
  SiFlyway,
  SiSwagger,
  SiGit,
} from "react-icons/si";
import { FaJava, FaGem, FaReact } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export const SkillData: { [category: string]: Skill[] } = {
  Language: [
    {
      name: "Java",
      icon: FaJava,
      color: "#007396",
      details: [
        "객체지향 설계 원칙(OOP, SOLID 등)에 대한 깊은 이해를 바탕으로 코드를 작성합니다.",
        "Spring 기반 프로젝트에서 실제 비즈니스 로직과 연동되는 코드 개발 경험이 있습니다.",
        "컬렉션, 예외 처리, 스트림 API 등 자주 사용하는 표준 라이브러리에 익숙합니다.",
        "JVM 동작 원리 및 메모리 구조, GC에 대한 이해가 있습니다.",
      ],
    },
    {
      name: "Ruby",
      icon: FaGem,
      color: "#CC342D",
      details: [
        "2년 간 Ruby on Rails 실무 프로젝트를 수행하면서 Ruby 문법에 익숙합니다.",
        "Ruby의 유연한 문법과 메타프로그래밍 기능을 활용해 간결하고 효율적인 코드를 작성할 수 있습니다.",
        "Block, Proc, Lambda 등의 문법을 사용해 함수형 스타일의 코드를 작성할 수 있습니다.",
      ],
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E",
      details: [
        "Next.js 기반 포트폴리오 프로젝트에서 화면 동작 구현에 사용했습니다.",
        "DOM 조작과 이벤트 처리 등 브라우저 동작 원리에 대한 기본적인 이해가 있습니다.",
        "비동기 처리 방식(Promise, async/await)을 학습하고 실제로 간단한 로직에 적용해봤습니다.",
      ],
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#2D79C8",
      details: [
        "Next.js, NestJS 등에서 기본적인 타입 선언을 경험하며 타입 안정성의 중요성을 체감하고 있습니다.",
        "interface와 type의 기본적인 차이를 이해하고, 상황에 따라 선택해 사용해봤습니다.",
        "아직 깊이 있는 타입 설계는 익숙하지 않지만, 실전에서 발생하는 타입 오류를 해결하며 점진적으로 학습 중입니다.",
      ],
    },
  ],
  "Backend Framework": [
    {
      name: "Spring Boot",
      icon: SiSpringboot,
      color: "#6DB33F",
      details: [
        "Spring Boot 기반의 RESTful API 서버를 설계하고 구현한 다양한 프로젝트 경험이 있습니다.",
        "도메인 별로 모듈을 분리한 Gradle 멀티 모듈 아키텍처를 직접 설계하고 적용해봤습니다.",
        "Spring Security를 활용한 세션 및 JWT 로그인, 인증/인가 흐름을 구현할 수 있습니다.",
        "Spring Data JPA를 기반으로 Repository 설계 및 복잡한 쿼리 처리 경험이 있습니다.",
        "단위 테스트(@WebMvcTest, @DataJpaTest 등)와 통합 테스트(@SpringBootTest)를 직접 작성하여 테스트 커버리지를 관리한 경험이 있습니다.",
      ],
    },
    {
      name: "Ruby on Rails",
      icon: SiRubyonrails,
      color: "#CC0000",
      details: [
        "2년간 실무에서 Ruby on Rails를 사용해 MVC 패턴 기반 웹 애플리케이션을 개발했습니다.",
        "Active Record를 통한 데이터베이스 모델링 및 CRUD 기능 구현에 익숙합니다.",
        "다양한 젬(Gem)을 활용해 OAuth, 파일 업로드, 배치 작업 등을 구현한 경험이 있습니다.",
        "Rails의 라우팅, 컨트롤러, 뷰 계층에 대한 전반적인 구조를 이해하고 있습니다.",
      ],
    },
    {
      name: "NestJS",
      icon: SiNestjs,
      color: "#E0234E",
      details: [
        "NestJS 기반의 프로젝트를 진행하며 Controller, Service, Module 구조에 대한 이해가 있습니다.",
        "간단한 API 서버를 NestJS로 구축하고, Swagger 문서화 및 폴더 구조 설계까지 직접 경험해봤습니다.",
        "TypeORM과 연동하여 데이터베이스 모델을 구성하고, 환경별 설정도 구성해봤습니다.",
      ],
    },
  ],
  Database: [
    {
      name: "MySQL",
      icon: SiMysql,
      color: "#4479A1",
      details: [
        "데이터 무결성과 정규화를 기반으로 성능을 고려한 테이블 구조를 설계할 수 있습니다.",
        "Spring Data JPA와 Active Record ORM 등 ORM 도구를 활용해 MySQL과 연동하여 사용한 경험이 있습니다",
        "JOIN, GROUP BY, 서브쿼리 등 복합 쿼리를 작성하고, 성능 개선을 위해 인덱스를 적용한 경험이 있습니다.",
        "트랜잭션의 ACID 특성과 격리 수준을 이해하고, 비즈니스 로직 내 데이터 정합성을 고려한 처리 경험이 있습니다.",
      ],
    },
    {
      name: "Redis",
      icon: DiRedis,
      color: "#D6362C",
      details: [
        "TTL(Time to Live)을 설정하여 인증번호와 같은 일시적 데이터를 저장하여 관리한 경험이 있습니다.",
        "pub/sub 기능을 사용해 간단한 채팅 기능을 구현해본 경험이 있습니다.",
        "Spring Boot와 RedisTemplate을 활용한 연동 설정 및 기본적인 데이터 조작을 수행할 수 있습니다.",
      ],
    },
  ],
  "Frontend Framework": [
    {
      name: "Next.js",
      icon: RiNextjsFill,
      color: "#000000",
      details: [
        "Next.js App Router를 기반으로 포트폴리오 프로젝트를 개발하며 정적 페이지와 컴포넌트를 구성했습니다.",
        "서버 컴포넌트와 클라이언트 컴포넌트를 분리해 렌더링 방식에 따른 구조를 설계하고 최적화에 반영했습니다.",
        "내장 라우팅 시스템을 활용해 동적 경로 및 중첩 라우트를 구현하고, 페이지 단위로 폴더 구조를 체계적으로 정리했습니다.",
        "layout.tsx, metadata 설정 등을 활용하여 일관된 페이지 구조와 SEO 친화적인 설정을 적용했습니다.",
      ],
    },
    {
      name: "React",
      icon: FaReact,
      color: "#61DAFB",
      details: [
        "JSX와 함수형 컴포넌트를 기반으로 컴포넌트 분리, props 전달, 이벤트 처리 등을 구현한 경험이 있습니다.",
        "useState, useEffect, useMemo 등 주요 React Hook을 활용하여 동적인 UI 상태를 제어할 수 있습니다.",
      ],
    },
    {
      name: "Tailwind CSS",
      icon: RiTailwindCssFill,
      color: "#06B6D4",
      details: [
        "Tailwind CSS를 활용해 빠르게 스타일링을 구성하고, 반응형 레이아웃을 구현할 수 있습니다.",
      ],
    },
  ],
  "Infra / DevOps": [
    {
      name: "AWS",
      icon: SiAmazon,
      color: "#FF9900",
      details: [
        "EC2, RDS, S3, ECR, VPC, IAM, Route 53 등 다양한 AWS 서비스를 활용해 인프라를 구성한 경험이 있습니다.",
        "VPC와 서브넷, 보안 그룹, IAM 역할 및 정책을 설정하여 보안을 고려한 분리된 네트워크 환경을 구축할 수 있습니다.",
        "AZ 및 Region 개념을 바탕으로 고가용성 인프라 설계를 고려한 리소스 배치를 수행할 수 있습니다.",
        "Route 53과 SSL 인증서를 활용한 사용자 도메인 연결과 HTTPS 환경 구성 경험이 있습니다.",
        "다양한 AWS 서비스와 동작 원리에 대한 이해를 기반으로 실무에서 적용하고 있습니다.",
      ],
    },
    {
      name: "Docker",
      icon: SiDocker,
      color: "#2496ED",
      details: [
        "Spring Boot와 Flyway 마이그레이션을 Docker 이미지로 구성하고, Docker Hub와 ECR에 배포하여, CI/CD에 활용한 경험이 있습니다.",
        "Docker Compose를 활용한 다중 컨테이너 환경 구성과 간단한 네트워크 설정을 할 수 있습니다.",
        "Dockerfile 최적화, 볼륨 마운트, 환경변수 설정 등을 통해 재사용성과 이식성을 고려한 이미지를 만들 수 있습니다.",
      ],
    },
    {
      name: "Terraform",
      icon: SiTerraform,
      color: "#7B42BC",
      details: [
        "AWS 프리티어 기반 인프라를 코드로 정의하고 관리하기 위해 Terraform을 사용하고 있습니다.",
        "VPC, EC2, RDS, S3, IAM, Route 53 등을 모듈화하여 효율적으로 배포/수정할 수 있습니다.",
        "Plan → Apply → Destroy 흐름과 상태 파일 관리(tfstate)에 대한 기본적인 이해를 바탕으로 인프라를 운영합니다.",
      ],
    },
    {
      name: "Jenkins",
      icon: SiJenkins,
      color: "#314C5F",
      details: [
        "AWS EC2에 직접 Jenkins를 설치하고 설정하여 CI/CD 파이프라인을 구성한 경험이 있습니다.",
        "플러그인을 활용해 GitHub 연동, Build Trigger, Slack 알림 등 다양한 기능을 확장해 사용했습니다.",
        "단계별 Job을 분리하여 테스트, 빌드, 배포 과정을 시각화하고, 실패 구간을 명확히 파악할 수 있도록 구성했습니다.",
        "Jenkins의 구조와 DSL 파이프라인 작성 방식에 대해 이해하고 있습니다.",
      ],
    },
    {
      name: "GitHub Actions",
      icon: SiGithubactions,
      color: "#2088FF",
      details: [
        "GitHub Actions를 활용해 CI/CD 파이프라인을 구성하고, Docker 이미지 빌드 → ECR 푸시 → EC2 배포까지 자동화했습니다.",
        "Flyway 마이그레이션 전용 워크플로우와, Discord Webhook을 통한 워크플로우 상태 알림 등 다양한 워크플로우 작성 경험이 있습니다.",
        "수동 실행(workflow_dispatch), 환경 변수 관리, Job 간 분리 등 다양한 기능을 활용한 경험이 있습니다.",
      ],
    },
  ],
  Tools: [
    {
      name: "Elasticsearch",
      icon: SiElasticsearch,
      color: "#F7BC00",
      details: [
        "Index와 Query DSL을 기반으로 다양한 형태의 검색 쿼리를 구성할 수 있습니다.",
        "검색 정확도를 개선하기 위한 Analyzer, Tokenizer, Stop Word 설정 등의 개념을 이해하고 활용할 수 있습니다.",
        "인덱스 매핑, 필드 타입 정의, 다중 조건 필터링 등을 통해 검색 정확도와 속도를 최적화할 수 있습니다.",
      ],
    },
    {
      name: "Git",
      icon: SiGit,
      color: "#F05032",
      details: [
        "Git을 활용한 다양한 프로젝트 경험이 있습니다.",
        "rebase, merge, cherry-pick, squash 등 고급 Git 기능을 이해하고 상황에 맞게 활용할 수 있습니다.",
        "코드 리뷰 및 Pull Request 기반의 협업을 원활하게 수행할 수 있으며, Git을 통한 버전 관리와 충돌 해결에도 익숙합니다.",
      ],
    },
    {
      name: "Flyway",
      icon: SiFlyway,
      color: "#CC0101",
      details: [
        "Flyway를 사용해 데이터베이스 버전 관리를 수행했으며, 여러 프로젝트에서 마이그레이션 전략을 적용해봤습니다.",
        "버전 관리된 SQL 스크립트를 통해 스키마 변경 이력을 체계적으로 관리하고, 팀 협업 시에도 DB 변경 이력을 안전하게 공유할 수 있습니다.",
      ],
    },
    {
      name: "Swagger",
      icon: SiSwagger,
      color: "#85EA2D",
      details: [
        "RESTful API 문서화를 위해 Swagger(OpenAPI)를 여러 프로젝트에서 사용한 경험이 있습니다.",
        "Spring Boot 프로젝트에 Swagger를 연동하여 각 API의 요청/응답 구조 및 상태 코드 정보를 명확히 문서화했습니다.",
        "API 테스트, 클라이언트 협업을 위한 자동화된 문서화 환경을 구축할 수 있습니다.",
      ],
    },
  ],
};
