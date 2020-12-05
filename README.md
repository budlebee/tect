https://tect.dev

## Rule

기본적으로 git-flow 식의 브랜치 관리를 따른다. 반드시 읽어볼것(https://uxgjs.tistory.com/183?category=832417)

- 메인 repo를 clone 하고, 각자의 branch 를 만들어 작업할것.
- 매일 작업시작전에 master와 dev 브랜치 pull. 작업끝내고 push 를 잊지 말자.
- 각자 branch 에서 작업하고, dev 브랜치로 merge 한다.
- 작업시작전 무슨 작업하는지 github 이슈에 등록하고 시작할것(중복 작업 방지)
- dev 브랜치에서 이상이 없다면 dev 브랜치에서 release 브랜치를 만들고, release 브랜치를 master로 merge 한다.
- 절대 dev 및 master 브랜치에서 직접 작업하지 말것!!!

## Nextjs

웬만한 내용은 Nextjs 홈페이지에 잘 정리가 되어있다. (https://nextjs.org/)



## hjs 추가

##  ant design next js에 적용시키기
    출처: (https://dev.to/burhanuday/using-ant-design-with-nextjs-custom-variables-for-ant-design-57m5)

1.  npm i antd
2.  styles/antd.less 파일 생성 후 원하는 코드 입력
3.  npm install --save @zeit/next-css @zeit/next-less @zeit/next-sass babel-plugin-import less 실행
4.  next.config.js 파일 생성 후 출처 내용 복붙

## 2020-12-05 hjs

일단 댓글이나 답글이 서버에 전송된 즉시 화면에도 반영되는 부분은 아직 구현 안 함.
당연히 임시 인증도 구현 안 함.
일단 미완성이게나마 lazy loading을 구현함. 엄밀히 말해서 lazy loading은 아닌데
지금이 pc 환경이기도 하고 그냥 편해서 이걸로 함. 사실 요청에 따른 비용이나 구현 난이도
감안하면 pagination과 별 차이 없긴 하다.
그리고 다른 개별 question 페이지 들어갔다가 다시 question main으로 나오면 리스트가
초기화되는데, 이건 useContext로 처리하면 될 듯 하다.
이거 이번 주 내로 런칭하는 건 무리일 것 같은데...