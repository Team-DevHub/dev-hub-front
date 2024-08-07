# 📔 프로젝트 개요
<img width="1190" alt="devhub" src="https://github.com/user-attachments/assets/75741e4c-53f4-4f9b-bb34-9f07612bae24">

- **프로젝트 기간**: 2024.04.30 ~ 2024.06.14 (1차) / ~2024.07.19 (2차)
- **Website:** [https://full-devhub.netlify.app/](https://full-devhub.netlify.app/)
- **Notion:  [데브허브팀 노션](https://www.notion.so/DevHub-17544f3f7c654e18a29aa4a2d7cc4d16?pvs=21)**
- **Figma**: [데브허브 Figma](https://www.figma.com/design/g1LHrU5G2W8IxmcL2yF2K2/%EB%8D%B0%EB%B8%8C%ED%97%88%EB%B8%8C-(DevHub)-UI?node-id=0-1&t=7UVwKNOJkA0IDVj8-1)

---

> ***데브코스 수강생들의 지식 공유 공간, DevHub***

프로그래머스 웹 풀사이클 데브코스 수강생들이 모여 개발자로서의 꿈을 향해 함께 달려가는 공간입니다.

열정 넘치는 동기들과 함께 지식을 나누고 성장하세요!

- **코드 블록, 유용한 링크**를 공유하며 서로의 성장에 기여해요! 🤘
- 동기들이 공유한 정보를 카테고리로 한눈에 확인하고, 손쉽게 검색하여 찾아볼 수 있어요 👀
- 지식을 나누고 포인트를 쌓아, **Top 5 명예의 전당**에 도전해보세요! 🏆

<br/>

# 🛠️ 기술 스택
<img width="1166" alt="tech stack" src="https://github.com/Team-DevHub/dev-hub-front/assets/121474189/536fafe8-6a99-475d-a28f-85d4c7c72691">

<br/>

# 🤔 프로젝트 기획 배경

기존의 프로그래머스 웹 풀사이클 데브코스 과정에서는 소통의 창구로 **Slack**을 활용했습니다.
슬랙을 통해 수강생들은 학습 과정으로부터 얻은 지식과 정보들을 서로 공유했는데요, 저희는 이러한 기존의 소통 방식에서 다음과 같은 불편함을 느낄 수 있었습니다.

- 슬랙 메시지에는 제목이라는 개념이 없기 때문에, **가독성**이 좋지 않아 정보를 한눈에 알아보기 힘들었습니다.
- **카테고리별**로 정보를 모아볼 수 없었습니다.
- 채널 내부에서 **스크롤** 형태로만 컨텐츠를 둘러볼 수 있었습니다.
- 유용한 정보들이 **여러 채널에 산재**되어 있고, 각종 질문글과 뒤섞여 있었습니다.

이러한 pain point를 계기로, 저희 팀은 수강생들이 공유하는 정보를 한 곳에서 모아볼 수 있는 플랫폼을 개발하기로 했습니다.
이를 통해 수강생들이 보다 효율적으로 지식을 공유하고 함께 성장할 수 있는 서비스를 제공하고자 합니다!

<br/>

# 📄 주요 페이지 소개

### **✔️ 홈페이지**

- 게시글을 grid 형태로 확인할 수 있습니다.
- 카테고리를 선택하거나, 필터를 이용하여 최신순, 댓글 많은 순 등으로 정렬할 수 있습니다.
- 내 프로필 정보를 확인할 수 있으며, 가장 지식 공유가 활발한 수강생들의 명예의 전당을 확인할 수 있습니다.
![home](https://github.com/Team-DevHub/dev-hub-front/assets/121474189/998ead11-c281-411d-b838-01b35c6636ff)

### **✔️ 게시글 상세 모달**

- 게시글을 클릭하면 모달이 등장합니다.
- 좌측 상단에서 게시글을 스크랩 기능을 사용할 수 있습니다. (비회원은 기능이 제한됩니다.)
- 좌측에서는 게시글을, 우측에서는 댓글을 확인하거나 작성할 수 있습니다.
- 해당 게시글 작성자의 경우, 게시글 섹션 오른쪽 하단에 게시글 수정 버튼이 생성됩니다.

![modal](https://github.com/user-attachments/assets/374e1649-329d-475f-aef2-b708b93cbc4d)


### **✔️ 게시글 작성/수정 페이지**

- 제목, 카테고리를 설정할 수 있습니다.
- 에디터를 이용하여 마크다운 형식으로 편리하게 게시글을 작성 및 수정하고, 미리보기 할 수 있습니다.

![posting](https://github.com/Team-DevHub/dev-hub-front/assets/121474189/3ea189cc-2f75-42ea-8b76-726d357ab97f)


### **✔️ 마이페이지**

- 내 정보, 레벨, 활동 기록을 한 눈에 확인할 수 있습니다.
- 내가 작성한 게시글과 스크랩한 리스트를 모아보고, 삭제할 수 있습니다.

![mypage](https://github.com/user-attachments/assets/ff1885d1-f3c8-4865-91cb-2e2b090c542e)


### **✔️ 로그인 & 회원가입**

- 닉네임, 이메일, 비밀번호를 이용해 회원가입할 수 있습니다.
- 깃허브, 구글 소셜 로그인을 통해 별도의 회원가입없이 간편하게 서비스 이용할 수 있습니다.

![join](https://github.com/Team-DevHub/dev-hub-front/assets/121474189/04c34d27-bdfe-4130-8615-76e1cf744d91)
![google](https://github.com/user-attachments/assets/56e0b120-3b3f-4508-96e1-236312ef3370)
![github](https://github.com/user-attachments/assets/8a9bc551-9c3f-4f7b-9e7e-dcf277e827af)


### **✨ 비회원 플로우**

- ‘둘러보기’를 통해 비회원도 서비스를 접해볼 수 있도록 유도했습니다.
- 비회원은 데브허브 내 공유된 게시글을 둘러볼 수 있지만, ‘지식 공유하기’, ‘댓글 작성’과 같은 주요 기능들에 대한 권한은 제한되어 있습니다.
    - 이에 대한 정보를 팝업이나 placeholder로 안내하여 로그인을 유도하고자 했습니다.

![non-member](https://github.com/user-attachments/assets/a3c103cb-1c6f-471c-bb22-f5f4b9b480b3)



<br/>

# 😎 Team DevHub
### Front-end (React)
| <img src="https://avatars.githubusercontent.com/u/67947887?v=4" width=80px alt=“김지민/>  | <img src="https://avatars.githubusercontent.com/u/121474189?v=4" width=80px alt=“류지민/>  |  <img src="https://avatars.githubusercontent.com/u/103192902?v=4" width=80px alt=“연하영”/>  | 
| :-----: | :-----: | :-----: |
| [김지민](https://github.com/JMK1007) | [류지민](https://github.com/JIMIN1020)  |  [연하영](https://github.com/0520hy) |

### Back-end (Node.js)
| <img src="https://avatars.githubusercontent.com/u/124678039?v=4" width=80px alt=“강정윤/>  | <img src="https://avatars.githubusercontent.com/u/121474189?v=4" width=80px alt=“류지민/>  | 
| :-----: | :-----: |
| [강정윤](https://github.com/kkang0) | [류지민](https://github.com/JIMIN1020)  | 

<br/>

### 강정윤
- **역할**: BE
- **주요 개발 파트**
    - 게시글 API 구현 (게시글 작성, 조회, 삭제 기능)
    - 댓글 API 구현 (댓글 작성, 삭제 기능)
    - 구글 소셜 로그인 구현

### 김지민
- **역할**: FE
- **주요 개발 파트**
   - 로그인, 회원가입, 비밀번호 찾기 페이지 구현
    

### 류지민
- **역할**: 기획 & 디자인, FE, BE
- **주요 개발 파트**
    - **FE**
        - 홈페이지, 404페이지 구현
        - 팝업 컴포넌트 구현
        - pagination 기능, 피드백 메일 전송 기능 구현
    - **BE**
        - Github 소셜 로그인 구현
        - token refresh API 구현
        - 회원 API 구현 (로그인, 회원가입, 비밀번호 재설정, 프로필 조회 등)
        - 스크랩 API 구현 (스크랩 추가, 삭제, 조회 기능)
        - 배포 자동화 (with Github Action)

### 연하영
- **역할**: FE
- **주요 개발 파트**
   - 마이페이지, 게시글 모달 구현
   - 게시글 작성, 조회, 수정, 삭제 기능 구현
   - 댓글 작성, 삭제 기능 구현
   - 스크랩 추가, 삭제, 스크랩 목록 조회 기능 구현
