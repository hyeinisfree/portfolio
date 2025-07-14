import { Project } from '@/data/types/content';

import matdongsan from '@/public/images/project/thumbnail/matdongsan.webp';
import i_matdongsan from '@/public/images/project/icon/matdongsan.svg';
import hyeinkim from '@/public/images/project/thumbnail/hyeinkim.webp';
import i_hyeinkim from '@/public/images/project/icon/hyeinkim.svg';
import sswu from '@/public/images/project/sswu.webp';
import s_sswu from '@/public/images/project/thumbnail/sswu.jpg';
import i_sswu from '@/public/images/project/icon/sswu.svg';
import storeasy from '@/public/images/project/thumbnail/storeasy.jpg';
import i_storeasy from '@/public/images/project/icon/storeasy.svg';
import dingdong from '@/public/images/project/thumbnail/dingdong.jpg';
import i_dingdong from '@/public/images/project/icon/dingdong.svg';

export const ProjectData: Project[] = [
  {
    id: 1,
    title: '맛동산',
    description: '제철 음식 아카이빙/커뮤니티 서비스',
    startDate: '2025/04',
    endDate: 'ing',
    year: [2025],
    team: ['기획팀 1명, 디자인팀 1명, 백엔드팀 1명, 프론트팀 1명, iOS팀 1명'],
    platform: ['Web', 'iOS'],
    position: 'Backend',
    roles: ['Backend Developer'],
    color: '#FBE56A',
    image: matdongsan,
    thumbnail: matdongsan,
    icon: i_matdongsan,
    simpleIntroduction: (
      <div className="space-y-1">
        <p>
          제철 음식을 공유하고 기록할 수 있는 아카이빙/커뮤니티 서비스입니다.
        </p>
        <p>
          Spring Boot 기반의 REST API 서버와, Terraform/Flyway를 통해 인프라와
          마이그레이션을 코드로 관리하는 인프라를 분리하여 설계했습니다.
        </p>
        <p>
          EC2, RDS, S3 등 AWS 환경 위에 직접 인프라를 구성하고, Terraform으로
          코드화했으며, Flyway 기반의 DB 마이그레이션 자동화 환경을
          구축했습니다. GitHub Actions 기반의 CI/CD 파이프라인을 구성하였습니다.
        </p>
      </div>
    ),
    introduction: (
      <div>
        제철 음식을 공유하고 기록할 수 있는 아카이빙/커뮤니티 서비스입니다.
      </div>
    ),
    techStack: [
      'Java',
      'SpringBoot',
      'MySQL',
      'Flyway',
      'Docker',
      'GitHub Actions',
      'Terraform',
      'AWS EC2/RDS/S3/ECR',
    ],
    detailTechStack: [
      'Java',
      'SpringBoot',
      'MySQL',
      'Flyway',
      'Docker',
      'GitHub Actions',
      'Terraform',
      'AWS EC2/RDS/S3/RDS',
    ],
    developmentExperience: [
      {
        title: '개발 경험 1',
        content: `첫 번째 개발 경험 내용입니다.
줄바꿈이 가능합니다.`,
      },
      {
        title: '개발 경험 2',
        content: `두 번째 개발 경험 내용입니다.`,
      },
    ],
    growExperience: [
      {
        title: '개발 경험 1',
        content: `첫 번째 개발 경험 내용입니다.
줄바꿈이 가능합니다.`,
      },
      {
        title: '개발 경험 2',
        content: `두 번째 개발 경험 내용입니다.`,
      },
    ],
    links: [
      {
        type: 'github',
        url: 'https://github.com/kira-matdongsan/Matdongsan-BE',
      },
    ],
  },
  {
    id: 2,
    title: 'Hyein Kim',
    description: '개인 포트폴리오 사이트',
    startDate: '2025/03',
    endDate: '2025/07',
    year: [2025],
    team: ['기획팀 1명, 디자인팀 1명, 백엔드팀 1명, 프론트팀 1명, iOS팀 1명'],
    platform: ['Web'],
    position: 'Frontend',
    roles: ['Frontend Developer'],
    color: '#798088',
    image: hyeinkim,
    thumbnail: hyeinkim,
    icon: i_hyeinkim,
    simpleIntroduction: (
      <div className="space-y-1">
        <p>부드러운 인터랙션을 중심으로 설계한 개인 포트폴리오 사이트입니다.</p>
        <p>
          Next.js App Router 기반의 구조로 구성하고, Framer Motion과 GSAP의
          ScrollTrigger 기능을 활용해 섹션별 인터랙션과 애니메이션 효과를
          구현했습니다. Lenis 기반의 스무스 스크롤, 섹션 고정 및 수평 이동 등의
          효과를 통해 사용자에게 자연스러운 흐름과 몰입감 있는 경험을 제공하는
          데 집중했습니다.
        </p>
      </div>
    ),
    introduction: <div></div>,
    techStack: [
      'TypeScript',
      'Next.js',
      'tailwindcss',
      'Framer Motion',
      'GSAP',
      'Vercel',
    ],
    detailTechStack: [
      'Java',
      'SpringBoot',
      'MySQL',
      'Flyway',
      'Docker',
      'GitHub Actions',
      'Terraform',
      'AWS EC2/RDS/S3/RDS',
    ],
    developmentExperience: [
      {
        title: '개발 경험 1',
        content: `첫 번째 개발 경험 내용입니다.
줄바꿈이 가능합니다.`,
      },
    ],
    growExperience: [
      {
        title: '개발 경험 1',
        content: `첫 번째 개발 경험 내용입니다.
줄바꿈이 가능합니다.`,
      },
      {
        title: '개발 경험 2',
        content: `두 번째 개발 경험 내용입니다.`,
      },
    ],
    links: [
      { type: 'github', url: 'https://github.com/hyeinisfree/portfolio' },
      { type: 'website', url: 'https://hyeinisfree.me' },
    ],
  },
  {
    id: 3,
    title: '수정광산',
    description: '성신여자대학교 커뮤니티 서비스',
    startDate: '2021/05',
    endDate: '2022/09',
    year: [2022],
    image: sswu,
    thumbnail: s_sswu,
    icon: i_sswu,
    position: 'Backend',
    roles: ['Backend Team Leader', 'Backend Developer'],
    platform: ['iOS', 'Android'],
    color: '#A055FE',
    team: ['기획팀 1명, 디자인팀 1명, 백엔드팀 1명, 프론트팀 1명, iOS팀 1명'],
    simpleIntroduction: (
      <div className="space-y-1">
        <p>성신여자대학교 학생들을 위한 커뮤니티 서비스입니다.</p>
        <p>
          정회원 인증 시스템을 기반으로, 게시판/게시글/댓글, 좋아요 및 스크랩
          기능, 포인트 기반의 티어 시스템 등 커뮤니티에 필요한 핵심 기능들을
          설계하고 구현했습니다.
        </p>
        <p>
          AWS 기반의 배포 환경과 CI/CD 자동화(Jenkins + Docker)도 직접
          구축했습니다.
        </p>
      </div>
    ),
    introduction: (
      <div className="flex flex-col gap-1">
        <span className="flex">
          <p className="bg-[#A055FE]/13 px-0.5 rounded-xs mr-0.5">
            성신여자대학교 학생들을 위한 커뮤니티 서비스
          </p>
          <p>입니다.</p>
        </span>
        <p>위 서비스에서 제공하는 주요 기능은 아래와 같습니다.</p>
        <ol className="list-decimal px-4 space-y-1">
          <li>정회원 인증 기능</li>
          <li>게시판, 게시글, 댓글 기능</li>
          <li>좋아요, 스크랩, 신고 기능</li>
          <li>포인트 및 티어 기능</li>
        </ol>
      </div>
    ),
    techStack: [
      'Java',
      'SpringBoot',
      'MySQL',
      'Docker',
      'Jenkins',
      'AWS EC2/RDS/S3',
    ],
    detailTechStack: [
      'Java 11, Gradle 7.1.1',
      'SpringBoot 2.5.3',
      'Spring Rest Docs',
      'MySQL',
      'AWS EC2, RDS, S3',
      'Jenkins',
      'Docker',
      'Git, GitHub',
    ],
    developmentExperience: [
      {
        title: 'DB와 API 설계',
        content: (
          <div>
            <ul className="list-disc pl-4 space-y-1">
              <li>
                기능명세서를 토대로 ERD를 작성하여 데이터들간의 관계를 도출할 수
                있었고, 이를 통해 Entity를 작성하였습니다.
              </li>
              <li>
                개발에 앞서 기능명세서를 토대로 팀원들과 API를 설계하였습니다.
                API 설계를 통해 필요한 기능들을 정리할 수 있었고, 작업량도
                파악할 수 있어 프로젝트 관리와 역할 분담에도 큰 도움이
                되었습니다.
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: 'Jenkins와 Docker를 이용한 CI/CD 구축',
        content: (
          <div>
            <ul className="list-disc pl-4 space-y-1">
              <li>
                Jenkins Pipeline과 Docker를 이용하여 위 그림과 같은 구조의
                CI/CD를 구축하였습니다.
              </li>
              <li>
                Github와 연동하여 develop branch에 push 이벤트가 발생하였을 때
                자동으로 빌드 및 배포가 되도록 하였고, 이에 대한 결과가
                Slack으로 전송되게 하여 팀원들이 모두 빌드 및 배포 상태를 확인할
                수 있도록 하였습니다.
              </li>
              <li>
                CI/CD 구축을 통해 빌드, 테스트 및 배포 과정을 자동화하여
                생산성을 매우 높일 수 있었습니다.
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: 'Gradle 멀티 모듈 적용',
        content: (
          <div>
            <ul className="list-disc pl-4 space-y-1">
              <li>
                사용자 서버(api)와 관리자 서버(admin)를 분리하여 운영하고자 멀티
                모듈을 적용하였습니다.
              </li>
              <li>
                멀티 모듈을 적용함으로써 코드의 중복을 줄일 수 있었고, 의존성을
                분리할 수 있었습니다. 또한 프로젝트 구조를 이해하기
                쉬워졌습니다.
              </li>
              <li>
                <code className="bg-stone-200 text-rose-600 text-xs rounded-sm px-1 py-0.5 mr-0.5">
                  ./gradlew :moduleName:build
                </code>
                의 명령어를 통해 특정 모듈을 쉽게 빌드하여 배포할 수 있었습니다.
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: 'JUnit5를 이용한 단위 테스트 코드 작성',
        content: (
          <div>
            <ul className="list-disc pl-4 space-y-1">
              <li>
                컨트롤러 테스트는 @WebMvcTest와 MockMvc를 사용하여 진행하였고,
                컨트롤러 테스트에 필요한 이외의 Bean들은 @MockBean으로 주입받아
                사용하였습니다.
              </li>
              <li>
                서비스 테스트는 Mockito를 사용하였습니다. @InjectMocks와 @Mock을
                사용하여 레포지토리 객체를 서비스 객체에 주입하여
                테스트하였습니다.
              </li>
              <li>레포지토리 테스트는 @DataJpaTest를 사용하였습니다.</li>
            </ul>
          </div>
        ),
      },
    ],
    growExperience: [
      {
        title: '함께 공부하고 빠르게 성장하기',
        content: (
          <div className="px-1">
            <p>
              해당 프로젝트에 첫 번째 개발자로 참여하여 백엔드팀의 리더를
              맡았습니다.
            </p>
            <br />
            <p>
              팀원 모두 스프링 부트를 사용해 본 적이 없었지만 모두 사용 가능한
              언어가 Java였고 계속해서 유지 보수를 해나가야 하기 때문에 의존성
              관리가 쉽고 안정성이 높은 스프링 부트로 서버를 구축하였습니다.
            </p>
            <br />
            <p>
              따라서 프로젝트 초기에 팀원이 함께 스프링 부트를 공부하였고 이
              과정을 통해 스프링 부트를 빠르게 학습할 수 있었습니다. 매주
              정기적으로 모여 미리 공부해온 강의 내용이나 책 내용을 공유하거나
              주요한 개념들을 정해 돌아가며 설명하는 등 다양한 방법으로 함께
              공부하였고 이를 통해 팀원 모두 실력이 빠르게 성장할 수 있었습니다.
            </p>
          </div>
        ),
      },
      {
        title: '생산성 향상을 위한 끊임없는 고민과 노력',
        content: (
          <div className="px-1">
            <p>
              본격적인 개발에 들어가기 전 프레임워크 공부를 하며 팀원들이 조금
              지치기도 하였고 프로젝트와 학업을 병행하는 팀원들의 작업 시간이
              많지 않아 저는 팀원들이 개발에만 힘쓸 수 있도록 하고 싶었습니다.
            </p>
            <br />
            <p>
              그래서 Jenkins와 Docker를 이용하여 CI/CD를 구축하였고 이를 통해
              생산성을 매우 향상시킬 수 있었습니다. 또한 테스트 코드 작성을
              강제화하고 API 문서를 빠르게 작성할 수 있게 Spring Rest Docs를
              도입하여 생산성을 높이고 코드의 안정성을 높일 수 있었습니다.
              이후에도 협업 도구인 Slack에 서버 Log가 전송될 수 있게 하거나 자주
              사용하는 SQL 문들을 파일로 만들어 공유하는 등 꾸준히 개발의
              생산성을 높일 수 있도록 노력하였습니다.
            </p>
            <br />
            <p>
              조금의 노력을 통해 향상되는 생산성을 직접 경험하며 뿌듯함을 느낄
              수 있었습니다.
            </p>
          </div>
        ),
      },
      {
        title: '프로젝트에 적극적으로 기여하기',
        content: (
          <div className="px-1">
            <p>
              14명의 인원으로 프로젝트를 진행하다 보니 프로젝트 관리가 매우
              어려웠습니다. 각 팀별로 소통이 원활하지 않았고 초반에 개발
              방법론을 정하지는 않았지만 자연스럽게 폭포수 방법론의 형태로
              진행되다 보니 기획, 디자인, 개발 순으로 작업하게 되어 개발팀
              일정이 계속 밀리는 상황이 발생하였고 팀원들의 부담이 커져갔습니다.
            </p>
            <br />
            <p>
              저는 이 상황을 해결하고자 애자일 방법론 도입을 제안하였고, 각
              스프린트 별로 팀 담당자를 지정하여 하나의 스프린트 안에서 각 팀이
              빠르게 소통하고 피드백 할 수 있도록 하였습니다. 애자일 도입 이후
              개발팀뿐만 아니라 다른 팀들의 프로젝트 이해도 높아졌고 큰 만족감을
              느낄 수 있었습니다.
            </p>
            <br />
            <p>
              또한 이후에도 팀원들의 즐거운 Online Meet을 위해 메타버스 기반의
              GatherTown을 생성하여 공유하거나 기존의 요청사항이 누락되는 문제를
              해결하기 위해 협업 도구인 Notion에 ‘무조건 해주세요’(팀별
              요청사항을 작성하고 결정사항을 정리할 수 있는 페이지)를 개설하거나
              팀원들의 일정 관리를 위해 WBS를 직접 작성하여 공유하는 등 원활한
              협업을 위해 노력하였습니다.
            </p>
            <br />
            <p>
              이 과정들을 통해 소통의 중요성을 느낄 수 있었고 프로젝트에 대한
              팀원들의 만족도를 높이는 것이 프로젝트 진행에 큰 도움이 된다는
              것을 배울 수 있었습니다. 개발뿐만 아니라 다양한 방법을 통해
              프로젝트에 기여하는 것에 큰 기쁨을 느낄 수 있었습니다.{' '}
            </p>
          </div>
        ),
      },
    ],
    links: [{ type: 'website', url: 'https://litt.ly/crystalmine' }],
  },
  {
    id: 4,
    title: '스토리지',
    description: '대학생을 위한 경험 정리 아카이빙 서비스',
    startDate: '2021/11',
    year: [2021],
    team: ['기획팀 1명, 디자인팀 1명, 백엔드팀 1명, iOS팀 1명'],
    platform: ['iOS'],
    position: 'Backend',
    roles: ['Backend Developer'],
    color: '#23C38A',
    image: storeasy,
    thumbnail: storeasy,
    icon: i_storeasy,
    simpleIntroduction: (
      <div className="space-y-1">
        <p>대학생을 위한 경험 정리 아카이빙 서비스입니다.</p>
        <p>
          경험을 ‘프로젝트 {'>'} 페이지’ 구조로 분류하여 정리할 수 있으며, 다른
          사람의 경험을 탐색하고 좋아요로 반응할 수 있는 소셜 성격의 아카이빙
          서비스입니다
        </p>
        <p>
          NestJS 기반의 API 서버를 구축하고, GitHub Actions와 AWS CodeDeploy를
          연동하여 배포 자동화 환경을 구성했습니다.
        </p>
      </div>
    ),
    introduction: (
      <div className="flex flex-col gap-1">
        <span className="flex">
          <p className="bg-[#23C38A]/13 px-0.5 rounded-xs mr-0.5">
            대학생을 위한 경험 정리 아카이빙 서비스
          </p>
          <p>입니다.</p>
        </span>
        <p>위 서비스에서 제공하는 주요 기능은 아래와 같습니다.</p>
        <ol className="list-decimal px-4 space-y-1">
          <li>프로젝트와 페이지 구조, 태그를 이용한 경험 아카이빙 기능</li>
          <li>다른 사람들의 경험 둘러보기 기능</li>
          <li>페이지, 사용자 좋아요 기능</li>
        </ol>
      </div>
    ),
    techStack: [
      'TypeScript',
      'NestJS',
      'MySQL',
      'Swagger',
      'Docker',
      'GitHub Actions',
      'AWS EC2/RDS/S3/CodeDeploy',
    ],
    detailTechStack: [
      'Typescript',
      'NestJS',
      'MySQL',
      'Swagger',
      'Docker',
      'GitHub, GitHub Actions',
      'AWS EC2, S3, RDS, CodeDeploy',
    ],
    developmentExperience: [
      {
        title: 'DB와 API 설계',
        content: (
          <div>
            <ul className="list-disc pl-4 space-y-1">
              <li>
                DFD를 작성하여 서비스 내 데이터 흐름을 보다 정확하게 파악할 수
                있었습니다.
              </li>
              <li>
                ERD를 작성해 보면서 데이터들 간의 관계를 도출할 수 있었고, 이를
                통해 데이터베이스 테이블을 생성하였습니다.
              </li>
              <li>
                개발에 앞서 API를 설계하였습니다. API 설계를 통해 필요한
                기능들을 정리할 수 있었고, 작업량도 파악할 수 있어 프로젝트 일정
                관리에 큰 도움이 되었습니다.
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: 'NestJS를 이용한 RESTful API 구현',
        content: (
          <div>
            <ul className="list-disc pl-4 space-y-1">
              <li>
                NestJS 프레임워크를 이용하여 REST API 서버를 구현하였습니다.
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: 'JWT를 이용한 인증 및 인가 구현',
        content: (
          <div>
            <ul className="list-disc pl-4 space-y-1">
              <li>
                REST의 특징인 Stateless를 지키기 위해 JWT를 이용한 인증으로
                구현하였습니다.
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: 'Swagger를 이용한 API 문서 작성',
        content: (
          <div>
            <ul className="list-disc pl-4 space-y-1"></ul>
          </div>
        ),
      },
      {
        title:
          'Github Actions와 Docker, AWS의 S3, CodeDeploy를 이용한 CI/CD 구축',
        content: (
          <div>
            <ul className="list-disc pl-4 space-y-1">
              <li>
                Github Actions와 Docker, AWS의 S3, CodeDeploy를 이용하여 위
                그림과 같은 구조의 CI/CD를 구축하였습니다.
              </li>
              <li>
                CI/CD 구축을 통해 빌드, 테스트 및 배포 과정을 자동화하여
                생산성을 매우 높일 수 있었습니다.
              </li>
            </ul>
          </div>
        ),
      },
    ],
    growExperience: [
      {
        title: '생산성 향상에 대한 고민 with. NestJS, Github Actions',
        content: (
          <div className="px-1">
            <p>
              해당 프로젝트는 공모전 참가를 위한 프로젝트였고, 한 달 정도의 시간
              동안 혼자서 API 서버 개발을 완료해야 했습니다. 따라서 생산성을
              높일 수 있는 방법에 대해 많은 고민을 하였습니다.
            </p>
            <br />
            <p>
              당시 스프링 부트를 공부하고 있기는 했지만 학교 수업 프로젝트에서
              사용했던 Node.js와 Express 만큼 속도가 나오지 않는다고
              생각하였습니다. 또한 NestJS에 대한 관심이 생겨 온라인 강의를
              수강하고 있던 상황이라 NestJS를 사용하여 해당 프로젝트를
              구현하기로 결정하였습니다.
            </p>
            <br />
            <p>
              결론적으로 NestJS의 자세한 공식 문서와 CLI 기능 등을 통해 빠르게
              개발을 진행할 수 있었습니다.
            </p>
            <br />
            <p>
              개발 속도를 높이기 위해 CI/CD 구축은 꼭 필요하였습니다. 개발
              팀원이 iOS 개발자와 저밖에 없었고, 기획, 디자인 작업과 동시에
              개발하다 보니 수정사항이 계속 생겼습니다. 따라서 배포 작업을
              수동으로 하기에는 시간이 부족하였습니다.
            </p>
            <br />
            <p>
              사용해 봤던 CI/CD 툴은 Jenkins였으나 Jenkins 서버를 따로 돌릴 수
              없는 상황이었고 최대한 간단하게 CI/CD를 구축하고자 하였습니다.
              그래서 Github Actions를 사용하기로 결정하였고 간단한 작업만으로
              쉽게 CI/CD를 구축할 수 있었습니다.
            </p>
          </div>
        ),
      },
      {
        title: '공식 문서의 중요성',
        content: (
          <div className="px-1">
            <p>
              NestJS의 경우 다른 프레임워크들 보다 공식 문서가 매우 잘 되어
              있었고, 모르는 개념 대부분을 공식 문서를 통해 공부하고 해결할 수
              있었습니다. 이를 통해 공식 문서를 먼저 보는 습관을 들일 수 있었고
              큰 도움이 되었습니다.
            </p>
          </div>
        ),
      },
      {
        title: '비개발 직군과의 협업',
        content: (
          <div className="px-1">
            <p>
              빅토리지 팀은 기획 1, 디자인 1, 백엔드 1, iOS 1 총 4명으로
              구성되어 있습니다. 파트별로 한 명밖에 없다 보니 각자의 역할을 다
              하는 것도 중요하였지만 모든 팀원이 서비스를 이해하고 소통하는 것이
              매우 중요하였습니다. 따라서 계속해서 서비스에 대해 서로 질문하고
              소통하였습니다.
            </p>
            <br />
            <p>
              이 과정에서 서로 다른 직군이 만나 하나의 서비스를 만들어 가는
              과정을 경험할 수 있었고, 서비스를 개발적인 관점이 아니라
              비즈니스적 관점에서 바라보는 것을 경험할 수 있었습니다.
            </p>
            <br />
            <p>
              결론적으로 비개발 직군 팀원들과의 협업을 통해 더 사용자에게
              가까운, 보다 가치 있는 서비스를 만들 수 있었습니다.
            </p>
          </div>
        ),
      },
    ],
    links: [
      { type: 'github', url: 'https://github.com/Storeasy/Storeasy-server' },
    ],
    award: "2021 원티드 '해,커리어' 예선 진출 (상위 50개팀)",
  },
  {
    id: 5,
    title: '띵-동',
    description: '1인 가구를 위한 지역 기반 식품 및 생필품 나눔 플랫폼',
    startDate: '2021/07',
    endDate: '2021/11',
    year: [2021],
    team: ['백엔드팀 2명, Android팀 2명'],
    platform: ['Android'],
    position: 'Backend',
    roles: ['Team Leader', 'Backend Developer'],
    color: '#0DCF82',
    image: dingdong,
    thumbnail: dingdong,
    icon: i_dingdong,
    simpleIntroduction: (
      <div className="space-y-1">
        <p>1인 가구를 위한 지역 기반 식품 및 생필품 나눔 플랫폼입니다.</p>
        <p>
          동네 인증, 실시간 채팅을 통한 거래 약속, 나눔 후 평가 시스템 등 신뢰
          기반의 거래 흐름을 고려한 기능들을 기획하고 직접 구현했습니다.
        </p>
        <p>
          Spring Rest Docs를 활용해 API 문서를 작성하고, AWS EC2를 활용한 서버
          운영을 담당했습니다.
        </p>
      </div>
    ),
    introduction: (
      <div className="flex flex-col gap-1">
        <span className="flex">
          <p>1인 가구의 음식물 쓰레기, 생활 쓰레기를 줄이기 위한&nbsp;</p>
          <p className="bg-[#0DCF82]/13 px-0.5 rounded-xs mr-0.5">
            식품 및 생필품 나누기 플랫폼 서비스
          </p>
          <p>입니다.</p>
        </span>
        <p>위 서비스에서 제공하는 주요 기능은 아래와 같습니다.</p>
        <ol className="list-decimal px-4 space-y-1">
          <li>동네 인증을 통한 동네별 나누기 기능</li>
          <li>채팅을 통한 거래 약속 생성 기능</li>
          <li>거래 진행 후 사용자 간의 평가 기능</li>
        </ol>
      </div>
    ),
    techStack: [
      'Java',
      'SpringBoot',
      'SpringRestDocs',
      'MySQL',
      'Redis',
      'AWS EC2/RDS/S3',
    ],
    detailTechStack: [
      'Java 11, Gradle 7.1.1',
      'SpringBoot 2.5.3',
      'SpringRestDocs',
      'MySQL',
      'Redis',
      'AWS EC2, RDS, S3',
      'GitHub',
    ],
    developmentExperience: [
      {
        title: '기능명세서 작성과 DB, API 설계',
        content: (
          <div>
            <ul className="list-disc pl-4 space-y-1">
              <li>
                기능명세서를 작성하여 서비스에 대한 이해도를 높일 수 있었고 보다
                효율적으로 개발할 수 있었습니다.
              </li>
              <li>
                ERD를 작성해 보면서 데이터들 간의 관계를 도출할 수 있었고, 이를
                통해 Entity를 작성하여 데이터베이스를 생성하였습니다.
              </li>
              <li>
                개발에 앞서 기능명세서를 토대로 팀원들과 API를 설계하였습니다.
                API 설계를 통해 필요한 기능들을 정리할 수 있었고, 작업량도
                파악할 수 있어 프로젝트 관리와 역할 분담에도 큰 도움이
                되었습니다.
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: '프로필, 평가 기능을 위한 RESTful API 구현',
        content: (
          <div>
            <ul className="list-disc pl-4 space-y-1">
              <li>
                @RestController 어노테이션을 사용하여 REST API를 구현하였습니다.
              </li>
              <li>
                @RequestMapping과 다른 Mapping 어노테이션을 적절히 사용하여 REST
                API 설계 규칙을 지키고자 노력하였습니다.
              </li>
              <li>
                @ResponseEntity를 Return 하도록 하는 함수를 만들어 사용함으로써
                REST API의 JSON 응답 형식이 정형화될 수 있게 하였습니다.
              </li>
              <li>프로필, 평가 기능을 위해 간단한 CRUD를 구현하였습니다.</li>
              <li>
                AWS의 S3를 이용하여 프로필 이미지 업로드를 구현하였습니다.
              </li>
            </ul>
          </div>
        ),
      },
      {
        title: 'Spring Security와 JWT를 이용한 인증 및 인가 구현',
        content: (
          <div>
            <ul className="list-disc pl-4 space-y-1">
              <li>
                REST의 특징인 Stateless를 지키기 위해 JWT를 이용한 인증으로
                구현하였습니다.
              </li>
              <li>
                휴대폰 문자 인증을 통해 간편 로그인이 가능하도록 하였습니다.
                휴대폰 문자 전송은 네이버 클라우드 플랫폼의 SENS API를
                사용하였습니다.
              </li>
            </ul>
          </div>
        ),
      },
      {
        title:
          '@SpringBootTest를 이용한 통합 테스트 및 Spring Rest Docs 문서 작성',
        content: (
          <div>
            <ul className="list-disc pl-4 space-y-1">
              <li>
                JUnit5, MockMVC를 이용하여 API 요청 및 응답을 테스트하고 Spring
                Rest Docs를 이용하여 API 문서를 생성하였습니다. API 문서 작성
                도구는 Asciidoctor를 사용하였습니다.
              </li>
              <li>
                Spring Rest Docs는 테스트 검증이 성공해야 문서가 작성되기 때문에
                테스트 코드 작성을 습관화할 수 있었고, 테스트 코드를 통해 코드의
                안정성을 높일 수 있었습니다.
              </li>
            </ul>
          </div>
        ),
      },
    ],
    growExperience: [
      {
        title: '팀리더를 맡아 기른 리더십과 책임감',
        content: (
          <div className="px-1">
            <p>
              백엔드 개발자 2명과 안드로이드 개발자 2명으로 이루어진 팀에서
              리더를 맡아 서비스 기획, 프로젝트 관리를 주도하였습니다.
            </p>
            <br />
            <p>
              프로젝트 일정에 맞게 작업이 진행될 수 있도록 주 1회 오프라인 회의
              이외에도 주 1회 오전 스프린트를 추가로 진행하여 팀원 간의 진행
              상황 공유에 공백이 없도록 하였습니다.
            </p>
            <br />
            <p>
              오프라인 회의마다 모든 팀원들의 어려운 점을 듣고 함께 해결하고자
              노력하였습니다.
            </p>
            <br />
            <p>
              프로젝트 관리를 위해 Slack, Notion, Github를 적극적으로 사용하였고
              협업 규칙을 정리하여 팀원들이 사용할 수 있도록 하였습니다.
            </p>
          </div>
        ),
      },
      {
        title: '오픈소스 라이선스에 대한 이해',
        content: (
          <div className="px-1">
            <p>
              공개SW 개발자대회에 참가하여 오픈소스의 개념과 다양한 오픈소스
              라이선스 종류에 대해 배울 수 있었습니다.
            </p>
            <br />
            <p>
              Github 프로젝트 내의 LICENSE 파일을 통해 오픈소스의 라이선스를
              고지하였고 OSS Notice 파일을 통해 사용된 오픈소스들의 라이선스를
              고지하였습니다.
            </p>
            <br />
            <p>
              카카오에서 제공하는 오픈소스 관리 서비스 Olive Platform을 이용하여
              Github 프로젝트를 분석해 오픈소스의 라이선스 및 의무사항을
              확인하였습니다.
            </p>
          </div>
        ),
      },
      {
        title: '협업 시 Github 활용',
        content: (
          <div className="px-1">
            <p>
              협업 시 Git과 Git-Flow를 사용하였습니다. 또한 Github 내의 Issue,
              Lable, Wiki, Project를 적극 활용하였습니다. Issue와 Project를 통해
              진행 상황을 한 눈에 파악할 수 있게 했고, Wiki를 활용해
              기능명세서를 작성하였습니다.
            </p>
          </div>
        ),
      },
      {
        title: '안드로이드 개발자와의 협업',
        content: (
          <div className="px-1">
            <p>
              Spring Rest Docs를 사용하여 작성한 API 문서를 통해 안드로이드
              개발자와 협업하였습니다. 따로 API 문서를 작성하고 전달하는 과정을
              생략할 수 있어 프로젝트 시간을 많이 절약할 수 있었습니다.
            </p>
          </div>
        ),
      },
    ],
    award: "2021 원티드 '해,커리어' 예선 진출 (상위 50개팀)",
    links: [
      {
        type: 'github',
        url: 'https://github.com/Team-Dingdong/dingdong-server',
      },
    ],
  },
];
