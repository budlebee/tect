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
        <div>* Latex 문법 지원 및 라이브프리뷰 기능 추가 예정</div>
        <div>* 팀원도 구하고 있습니다. 편하게 연락주세요.</div>
        <div>budlebeee@gmail.com</div>
      </div>
    </>
  );
}
