# 6주차 과제: API를 호출해서 현재 날씨 표시하기
1886px 프론트엔드 스터디 여섯번째 과제입니다

# INTRO
안녕하세요! 프론트엔드 멘토링을 맡은 서연주입니다😊<br/>
여섯번째 과제는 axios로 API를 호출해서 현재 자신이 있는 도시의 날씨 정보를 표시하는 것입니다. 저희가 사용할 API는 [OpenWeatherMap](https://openweathermap.org/current#name) 의 `http://api.openweathermap.org/data/2.5/weather?q={CITY_NAME}&appid={API_KEY}` 입니다! API KEY는 해당 사이트에서 회원가입을 하면 얻을 수 있어요!<br/>
처음 접하는 개념이라 헷갈릴 수도 있지만 모르는 것이 있다면 이전처럼 활발히 검색하고 질문해가며 해결해봅시다!

# 과제 설명
## 과제 목표
- API를 사용하여 통신해봅니다.
- API를 통해 받아온 응답을 적절하게 화면에 출력해봅니다.
- [axios 사용법](https://www.digitalocean.com/community/tutorials/react-axios-react)을 익힙니다.
- 조건부 스타일링을 해봅니다.
- 문자열 속에서 변수를 사용해봅니다.

## 과제 요구사항
![image](https://user-images.githubusercontent.com/56028436/139458702-25357bdd-fd5d-4d39-9690-12f7cc27587f.png)
![image](https://user-images.githubusercontent.com/56028436/139458548-e6c087c2-5f65-44ed-8247-897217e47a93.png)
- axios를 사용하여 현재 날씨 정보를 받아와 위와 같이 현재 날씨와 그에 맞는 이모티콘을 표시합니다.([결과 예시](https://react-weather-1886px-answer-jjms09wdg-yeonjuseo.vercel.app/))
  - 아이콘과 날씨에 대한 정보 리스트는 [여기](https://openweathermap.org/weather-conditions)를 참고해주세요
- 낮일 때와 밤일 때 배경 색을 다르게 하는 조건부 스타일링을 합니다.
- 기본 포맷은 지켜주시되, 스타일링은 자유롭게 해도 좋습니다. (색, 폰트 등)
- 주어진 파일 이외에 새 파일을 만들지 않습니다.
- 개발을 하다 기억이 안 나거나 잘 모르겠는 부분은 추가로 공부하고 정리합니다.
- git commit 할 때 한번에 하는 것이 아니라 기능별로 commit 합니다.
- 변수명은 lowerCamelCase를 적용합니다.
- VSCode와 Prettier을 사용합니다. (저장 시 format 되도록 설정합니다.)
- vercel을 사용하여 배포합니다.

## 생각해 볼 질문
1. 데이터 수신이 완료된 후에 컴포넌트를 렌더링하려면 어떻게 해야할까요?

## 과제 수행 방법
1. 본 레포지토리를 fork합니다.
2. fork된 레포지토리를 git clone을 통해 로컬에 다운받습니다.
3. 로컬에 다운 받은 이후 해당 디렉토리로 이동해 npm install을 해 필요한 패키지를 설치하고 npm start로 시작합니다.
4. 코드 에디터는 VSCode를 사용해 작업합니다.
5. 브랜치를 자기 이름으로 판 다음 해당 브랜치에서 작업합니다. (예: git checkout -b chorom)
6. 로컬에서 개발한 작업물을 원격 레포지토리에 push합니다.
7. 완성한 결과물을 본 레포지토리에 pull request로 보냅니다.
8. 코드 리뷰를 받고 수정합니다.

## FYI
`create-react-app`을 사용해 시작한 프로젝트입니다.

## PR 템플릿
```
제목: [과제 {과제번호}] {이름} 과제 제출합니다
내용:
배포한 링크와 블로그 포스팅 링크를 첨부합니다.
과제를 하며 배운 내용, 고민한 내용, 어려웠던 내용, 추가로 구현하고 싶은 내용 등을 정리합니다.
```

## 과제 기한
2021년 11월 6일
