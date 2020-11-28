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

## 2020-11-29 03:35:35

아직 임시 인증 로직을 짜지 못함. 아마 replies까지 데이터베이스에 연동하기 전에는 못할 듯

오늘은 코드를 정리함. src > components 디렉토리에 있는 컴포넌트 파일들 중 비슷한 기능을 하는 것들끼리
묶어서 부모 컴포넌트에서 내려보내는 props에 따라 다르게 출력하도록 설정함.

Edit은 따로 페이지를 만드려고 했는데, next Link나 router로는 edit 페이지에 기존의 본문 데이터를 넘겨줄
수가 없었다. 그래서 query로 id를 가져온 다음 edit page에서 다시 firebase에 데이터를 가져오는 방식으로
구현해야 했다. 이 방식으로 라우팅을 하면 같은 정보에 대하여 중복 요청을 하는 것이므로 비용의 증가를 
감안해야 한다.
그래서 차라리 qa/main이나 qa/\[id\] 페이지에서 수정 버튼을 클릭하면 바로 수정 ui가 뜨도록 코드를 짰다.
이게 비용도 절감할 뿐만 아니라 사용자 경험에도 더 나을 것 같다. 일단 전자는 qa/main에서, 후자는
qa/\[id\]에서 가능하도록 만들었다. 참고로 수정 취소 버튼 누르면 뒤로 가게 해놔서 나중에 후자의 방식을
좀 다듬어야 함.

오늘 뭐 많이 했는데 


함수 컴포넌트들은 상위 컴포넌트에서 **함수로 호출**해야 하는 것을 뼈저리게 깨달았다. 다른 때에는
상관 없는데 함수 컴포넌트를 태그로 호출할 때 해당 컴포넌트에 있는 state의 상태가 변경되면 변경된 상태값이
현재 컴포넌트까지 오지 못하는 것 같다.

ant design의 Input 컴포넌트의 경우 (Textarea도 마찬가지) attribute들 중 value에 state을 지정하고 
onChange attribute에는 setState(e.target.value)를 실행하는 함수를 지정해야 한다.(현재 Input에 들어있는
string을 state에 삽입하는 것) 그래야 렌더링 후 Input에 입력한 내용이 Input에 그대로 출력되며, value를 
지정하지 않으면 아무리 TextArea에 뭘 입력해도 출력되지 않는다.

문제는 해당 Input(혹은 Input이 포함된 상위 컴포넌트)을 함수로 정의하고 태그로 호출할 때이다. 이 때
키를 입력하는 순간 바로 Input에서 focus가 상실된다. 확인해보니 클라이언트에 전달되는 소스코드에서,
즉, next.js가 개발자가 만든 코드를 바탕으로 생성한 실제 실행 코드 상에서 onChange와 관련된 코드가
정상적인 로직에서 벗어났다는 것을 알게되었다. 예측하건데 페이지 최상위 컴포넌트의 생명주기를 기준으로 
componentDidUpdate 쯤에 onChange가 실행되는 것 같았다.

그 외에 Input 컴포넌트를 해당 js파일의 메인 컴포넌트 밖으로 빼서 실행해보기도 했는데 이 때는 
```onchange is not a function```이라는 에러가 떴다. 아무래도 실행 코드를 돌리는 과정에서
발생한 에러인데 잘 모르겠다.

자세한 코드는 이 에러 때문에 받은 스트레스로 미처 따로 저장할 생각을 하지 못했다...

이거는 나중에 정리해서 wiki에 올릴 예정.



firebase에서 규칙 시뮬레이션에 UPDATE가 있길래 실행해봤는데 write로 연결된다. 그래서 UPDATE도
write 규칙이겠거니 했는데 안 된다. 찾아보니 firebase에 웹앱 등록하고 뭐 설치하고 해야 한다는데
그건 내일 헤야겠다.