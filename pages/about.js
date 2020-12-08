import { db } from '../firebaseConfig';
import axios from 'axios';
export default function About(props) {
  return (
    <>
      <div className="mainContainer">
        <div>
          전공 공부할때 참고했던 자료들이 잘 축적되지 않는 것 같아 만들었습니다.
        </div>
        <div>
          전공책 솔루션 link 를 올려도 좋고, 참고했던 전공책들 리뷰를 올려도
          좋습니다. 자유롭게 사용해 주세요.
        </div>
        <br />
        <div>## update 예정사항</div>
        <div>* Latex 문법 지원</div>
        <div>* elasticsearch 또는 algoilia 를 이용한 검색기능</div>
        <div>* 클라이언트 사이드 렌더링 최적화</div>
        <br />
        <div>## 팀원도 구하고 있습니다. </div>
        <div>budlebeee@gmail.com</div>
      </div>
    </>
  );
}
