import React from 'react';
import Link from 'next/link';

export default function Article() {
  <style></style>;
  return (
    <div className="article-container">
      <p>* Joel Spolsky?</p>
      <p>
        FogBugz, Trello, Glitch 등 여러 업무 도구를 만든 소프트웨어 회사 Fog
        Creek의 창업자이며 Stack Overflow 의 창업자이자 CEO 였습니다.
      </p>
      <p>
        <h3>
          컴퓨터과학과 대학생들을 위한 조언 - January 2, 2005 by Joel Spolsky
        </h3>
      </p>
      <p>
        {' '}
        대세는 윈도우 GUI 클라이언트가 될 것이라고 울먹였던게 불과 1, 2년
        전인데도 불구하고, 대학생들은 가끔 저에게 진로 상담 메일을 보냅니다.
        마침 채용시즌이기에 가볍게 읽고 넘어갈만한 조언들을 써보려 합니다.
      </p>
      <p>
        {' '}
        다행스럽게도, 대부분의 컴퓨터과학과 학생들은 어른에게 어떤 조언도 구하지
        않을 정도로 뻔뻔합니다. 왜냐면 주변 어른들은 "천공카드 제작자의 수요는
        1억명을 넘길 것이다", "LISP 프로그래머야 말로 가장 핫한 직업이다" 와
        같은, 노아의 방주 시절 얘기나 하고 있으니까요.
      </p>
      <p>
        {' '}
        저도 학생들에게 무슨 조언을 해야할지 잘 모르겠습니다. 저야말로
        구닥다리인 사람이라, AIM(AOL이 만든 메신저 프로그램)이 뭔지 잘 모르겠고
        CD라는 납작판으로 음악을 듣던 시대에나 쓰던 "email"을 여전히
        쓰고있으니까요.
      </p>
      <p>
        {' '}
        그러니 여기서 제가 말하는건 무시하고{' '}
        <Link href="https://facebook.com">
          <a>
            <span style={{ color: 'orange' }}>데이트 소프트웨어</span>
          </a>
        </Link>
        나 만들러 가는게 나을지도 모릅니다.
      </p>
      <p> 어찌됐든.</p>
      <p>
        {' '}
        만약 컴퓨터 프로그래밍을 좋아한다면, 얼마나 축복받은 인생인지
        생각해보세요. 자신이 즐거워 하는 일을 하면서 훌륭한 삶을 이어갈 수
        있는건 아주 소수입니다. 대부분의 사람들은 그렇게 운이 좋지 않아요.
        "스스로의 일을 사랑하라"는건 최근에야 생긴 개념이죠. 대개 일이라는 것은
        돈을 벌기 위해서 억지로 하는 것이고, 보행기 없이는 한걸음도 떼지 못하는
        호호할아범이 될때까지 억지로 해야하는 불쾌한 것이니까요.
      </p>
      <p> 아, 그래. 조언 얘기를 하죠.</p>
      <p> 다음은 컴퓨터과학 학생들을 위한 무료 조언 7개 입니다.</p>

      <p>
        1. 졸업하기 전에 글쓰는 법을 배워라.
        <br />
        2. 졸업하기 전에 C를 배워라.
        <br />
        3. 졸업하기 전에 미시경제학을 배워라.
        <br />
        4. CS가 아닌 수업들 지루하다고 대충 듣지 마라.
        <br />
        5. 빡센 프로그래밍 코스를 밟아라.
        <br />
        6. 인도인들이 직업을 다 채갈지에 대해 걱정하지 마라.
        <br />
        7. 뭘 하던 간에, 좋은 여름 인턴 경험을 쌓아라.
      </p>
      <p>
        {' '}
        제가 말한걸 곧이곧대로 따를만큼 순진한 사람이 아니라면, 8번 항목을
        추가하세요: 자존심에 대해 전문가의 도움을 구할 것
      </p>
      <p>
        <h3>1. 졸업하기 전에 글쓰는 법을 배워라.</h3>
      </p>
      <p>
        {' '}
        리누스 토르발즈가{' '}
        <Link href="https://groups.google.com/g/comp.os.minix/c/4995SivOl9o/m/GwqLJlPSlCEJ?pli=1">
          <a>
            <span style={{ color: 'orange' }}>열정적인 전도자</span>
          </a>
        </Link>
        가 아니었다면 리눅스가 성공할 수 있었을까요? 해커로서의 능력만큼이나
        그의 대단한 점은, 이메일과 메일링 리스트를 통해 전세계적 자원부대를
        끌어들인 생각을 전달하는 능력입니다.
      </p>
      <p>
        {' '}
        최근 유행하는 익스트림 프로그래밍에 대해 들어보셨나요? 제가 XP에 대해
        어떻게 생각하는지는 제쳐두고, 여러분이 XP에 대해 들어보신 이유는 글을
        잘쓰고 말을 잘하는 사람들이 XP를 소개하고 다니기 때문입니다.
      </p>
      <p>
        {' '}
        작은 프로그래밍 그룹이라 할지라도, 가장 영향력 있는 프로그래머는 자신의
        생각을 명확하고 설득력있고 읽기 쉽게끔 전달할 줄 아는 사람입니다. 키가
        큰 것도 도움이 되는데, 그건 노력으로 어찌할 수 있는 부분이 아니죠.
      </p>
      <p>
        봐줄만한 프로그래머와 훌륭한 프로그래머간의 차이는 얼마나 많은
        프로그래밍 언어를 꿰차고 있는지도 아니고,{' '}
        <Link href="http://www.paulgraham.com/gh.html">
          <a>
            <span style={{ color: 'orange' }}>
              파이썬이 나은지 자바가 나은지
            </span>
          </a>
        </Link>{' '}
        논쟁하는 것도 아닙니다. 자신의 아이디어를 얼마나 잘 전달하느냐에
        달려있습니다. 다른 사람들을 설득함으로써 그들은 레버리지를 얻습니다.
        명확한 코멘트와 기술 스펙을 작성함으로써 다른 프로그래머들이 자신의
        코드를 이해할 수 있도록 해주는데, 이는 다른 프로그래머들이 코드를{' '}
        <Link href="https://www.joelonsoftware.com/2000/04/06/things-you-should-never-do-part-i/">
          <a>
            <span style={{ color: 'orange' }}>다시 쓰는</span>
          </a>
        </Link>{' '}
        대신 자신의 코드를 사용하고 작업할 수 있게 합니다. 코드란 이런 작업
        없이는 아무런 가치가 없습니다. 엔드유저가 코드의 쓰임을 알아채고 그
        가치를 알아보는 유일한 척도는 명료하게 적힌 기술문서입니다. Source
        Forge에는 환상적이고 유용한 코드가 많이 있지만, 아무도 쓰지 않습니다.
        왜냐면 글을 잘 쓰지 못하는(또는 아예 쓰지 않는) 프로그래머들에 의해
        만들어 졌거든요. 그래서 누구도 그들이 뭘 했는지 모르고 훌륭한 코드들은
        묻혀버리죠.
      </p>
      <p>
        {' '}
        저는 글을 잘 쓰지 못하는 프로그래머를 뽑지 않습니다. 글을 잘 쓸 줄
        안다면 어디서 일을 하든, 경영진이 당신의 영향력을 알아보고 스펙 시트
        작성을 부탁하겠죠.
      </p>
      <p>
        {' '}
        대부분의 대학에는 "빡센 글쓰기"를 요구하는 수업이 있습니다. 수업을
        통과하려면 엄청나게 많은 글을 써야하죠. 그런 수업을 찾아 들어보세요!
        매일 또는 매주 글쓰기 과제가 있는 수업을요.
      </p>
      <p>
        저널이나 블로그를 시작하세요. 쓰면 쓸수록 쉬워집니다. 쉬워질수록 더 많이
        쓰게됩니다. 선순환이 되는거죠.
      </p>
      <p>
        <h3>2. 졸업하기 전에 C를 배워라.</h3>
      </p>
      <p>
        {' '}
        2부: C. 제가 C++이라고 하지 않는 것을 주목하세요. 비록 C는 점점
        희귀해지고 있지만, 여전히 프로그래머계의 공용어입니다. 대학에서 배우는
        ML, Java, Python 같은 트렌디한 잡동사니보다 훨씬 기계에 가까운
        언어입니다. 적어도 한학기는 기계와 가까워지게 노력해야지, 안그러면{' '}
        <Link href="https://www.joelonsoftware.com/2001/12/11/back-to-basics/">
          <a>
            <span style={{ color: 'orange' }}>
              고효율의 코드를 짜는 것을 포기해야
            </span>
          </a>
        </Link>{' '}
        해야합니다. C를 모르고서는 최고의 프래그래밍 작업중 하나인 컴파일러와 OS
        관련 일을 결코 할 수 없습니다. 또한 대규모 프로젝트를 위한 아키텍쳐를
        설계하는데 있어 신뢰를 얻을 수 없겠죠. continuations 과 클로져,
        exception handling 에 대해 얼마나 잘 아는지는 중요치 않습니다. 당신이
        while(*s++=*t++); 이 문자를 복사한다는 것을 설명하지 못한다면, 미신에
        기반한 프로그래밍을 하고 있는 겁니다. 해부학을 모른채 약국 영업사원이
        말해주는 대로 처방전을 쓰는 의사나 마찬가지죠.
      </p>
      <p>
        <h3>3. 졸업하기 전에 미시경제학을 배워라</h3>
      </p>
      <p>
        {' '}
        경제학 강의를 하나도 들어본적 없는 분을 위한 초고속 리뷰: 경제학은{' '}
        <Link href="https://www.joelonsoftware.com/articles/StrategyLetterV.html">
          <a>
            <span style={{ color: 'orange' }}>
              유용한 이론과 이치에 맞는 사실들
            </span>
          </a>
        </Link>
        을 배울 수 있고,{' '}
        <Link href="https://www.joelonsoftware.com/articles/CamelsandRubberDuckies.html">
          <a>
            <span style={{ color: 'orange' }}>그 뒤론 쭉 내리막입니다.</span>
          </a>
        </Link>{' '}
        미시경제학은 비즈니스의 모든 토대가 되는 유용한 과목입니다. 그 뒤로는
        악화되기 시작하죠. 실업률과 금리사이의 관계같은(증명된 것보다 반증된 게
        더 많은) 것들을 배우는 거시경제학을 배우게 되겠죠. 가면갈수록 나빠져서
        경제학 전공자들은 월 스트리트에서 직업을 얻기위해 물리학으로 전공을
        바꿉니다. 어찌됐든 미시경제학 수업은 꼭 들으세요. 수요와 공급에 대해
        알고 있어야 하고, 경쟁우위와 NPVs, 할인과 한계효용에 대해 알아야
        비즈니스가 어떻게 돌아가는지 알 수 있습니다.{' '}
      </p>
      <p>
        왜 컴퓨터과학과가 경제학을 배워야 되는지 의문인가요? 비즈니스를 이해할
        줄 아는 프로그래머는 더 가치있는 프로그래머니까요. 그게 전부입니다.
        코드로는 쩔어주지만 상업적인 관점에서는 말도 안되는 아이디어를 내놓는
        프로그래머가 얼마나 많은지 소름이 끼칠 정도에요. 프로그래머로서 경제에
        대한 기본 개념이 있다면, 더 높은 가치를 인정받고 대우 받을겁니다. 이게
        미시경제학을 배워야할 이유입니다.
      </p>
      <p>
        <h3>4. CS가 아닌 수업들 지루하다고 대충 듣지 마라.</h3>
      </p>
      <p>
        CS 수업외 다른 수업을 건성으로 듣는건 낮은 GPA를 얻는 최선의 방법이죠.
      </p>
      <p>
        GPA는 정말 중요합니다. 저를 포함해서 아주 많은 채용 매니저들이 지원서를
        볼때 GPA부터 봐요. 그리고 이런 행위에 아무런 죄책감을 느끼지 않습니다.
        왜냐고요? GPA는 단순히 숫자가 아니라 한무리의 교수들이 오랜 기간 다양한
        상황을 통해 학생의 작업물을 평가한 지표니까요. SAT 점수? 고작 몇시간짜리
        시험따위. GPA는 몇년에 걸친 수백장의 보고서와 시험, 조별과제를 전부
        포함합니다. 물론 GPA도 나름의 문제가 있죠. GPA 점수는 갈수록 인플레이션
        되고 있고, 어디 커뮤니티 칼리지같은데서 학점따기 쉬운 경제학 수업을
        들었는지 아니면 칼텍에서 대학원 수준의 양자역학을 수강했는지는 말해주지
        않습니다. 그럼에도, 전 2점대 학점을 가진 커뮤니티 칼리지들은 전부 쳐내고
        나머지에게 성적증명서를 요구할 겁니다. 그리고 꾸준히 높은 성적을
        받았는지 확인하겠죠. 컴퓨터과학만 높은점수인게 아니라.
      </p>
      <p>
        소프트웨어 엔지니어로 일하는데 역사학 점수에 왜 신경써야 하냐구요?
        그렇죠, 역사는 지루하죠. 그럼 지루한 일은 대충하는 사람을 제가 뽑아야
        하나요? 프로그래밍에도 지루한 일이 많습니다. 모든 직업이 지루한 일을
        해야될때가 있죠. 그래서 자기가 좋아하는 일만 잘하는 사람은 채용하지
        않습니다.
      </p>
      <p>저는 대학시절 문화인류학 수업이 재밌어 보여서 수강한 적이 있습니다.</p>
      <p>
        재미 있었냐고요? 전혀요! 브라질 열대우림의 인디언이나 트로브리안드
        제도의 원주민들에 대한 지루한 책들을 읽어야 했죠. 차라리 잡초가 자라는걸
        구경하는게 더 흥분됐을겁니다. 얌(yam)을 쌓는 방법 따위에 대해 끝없는
        토론을 하다보면 졸음을 참을 수가 없습니다. 트로브리안드 섬사람들이 얌
        쌓기에 왜 그리 많은 시간을 보내는지 아직도 모르겠네요. 놀라울정도로
        지루했지만, 끝장을 보기로 결심했습니다. 인류학 강의를 제 지루함 해결사로
        삼기로 결정했죠. 포틀랜드 담요에 대해 시험을 봐야하는 수업에서 A학점을
        받을 수 있다면, 그 어떤 지루함도 이겨낼 수 있겠죠.
      </p>
      <p>전 A를 받았습니다. 제가 해냈다면, 여러분도 해낼수 있어요.</p>
      <p>
        <h3>5. 빡센 프로그래밍 코스를 밟아라.</h3>
      </p>
      <p>저는 결코 대학원에 가지 않겠다고 결심한 순간을 기억하고 있습니다.</p>
      <p>
        {' '}
        <Link href="http://www.wisdom.weizmann.ac.il/~dharel/dynamic_logic.html">
          <a>
            <span style={{ color: 'orange' }}>Dynamic Logic</span>
          </a>
        </Link>{' '}
        에 대한 강의었는데, 예일대의 휘황찬란한 CS 교수진중 가장 밝게 빛나는
        Lenore Zuck 교수가 강의했습니다.
      </p>
      <p>
        제 흐릿한 기억으로는 이 과목에서 그다지 좋은 점수를 받지 못했으나,
        어찌어찌 계속 수업을 들었습니다. Formal Logic 의 아이디어는 이게 참이고,
        저게 참이면, 그것도 참이다 입니다. 예를 들어보죠. "좋은 성적을 받으면
        취직이 된다"에 "Johnny 는 좋은 성적을 받았다"를 더한다면, "Johnny는
        취직할 것이다"를 얻을 수 있습니다. Formal Logic 에서 배우는것들은 매우
        기묘하고 재미를 느낄수 있겠지만, 쓸모는 없습니다.
      </p>
      <p>
        Dynamic Logic 도 똑같습니다. 단지 시간에 대한 고려가 추가된 거죠. 예를
        들면, "당신이 불을 킨다면, 당신의 신발을 볼 수 있습니다"에 "전등은 이미
        켜졌습니다"를 더한다면 "당신은 신발을 볼 수 있습니다"를 알 수 있죠.
      </p>
      <p>
        Zuck 교수님같은 휘황찬란한 이론가에게 Dynamic Logic 은 흥미로운
        것이겠죠. 컴퓨터 프로그램에 대해 공식적인 증명이 가능하다는 희망을 품고
        있으니까요.
      </p>
      <p>
        그래서 수업 첫날, Zuck 교수님은 "전등의 불이 꺼져있다면, 스위치를
        올렸을때, 불이 켜질 것이다"에 대한 증명을 커다란 화이트보드 두개로도
        모자라 강의실 벽에까지 적어내려갔습니다.
      </p>
      <p>
        증명은 미친듯이 복잡했고, 매우 오류가 발생하기 쉬웠습니다. 화이트보드를
        가득 매운 증명은 생략된 부분도 많았고, 온갖 기교와 대학원에서나 쓰이는
        테크닉들을 포함하고 있었죠.
      </p>
      <p>
        숙제는 반대를 증명하는 것이었습니다. "만약 전등이 꺼져있었는데, 지금
        켜졌다면, 당신은 스위치를 올린것이다."
      </p>
      <p>시도해 보았습니다. 정말 열심히요.</p>
      <p>도서관에서 몇시간을 보냈죠.</p>
      <p>
        몇시간을 쏟은 뒤 Zuck 교수님의 원래 증명에 오류가 있다는 것을
        발견했습니다. 또는 제가 필기를 잘못 받아적은거 였을수도 있구요. 하지만
        이번 일로 무언가를 깨달았습니다. 이런 사소한 것을 증명하기 위해
        몇시간씩이나 걸린다면, 흥미로운 것을 증명하는데 쓸 수 없을거라는 것을요.
      </p>
      <p>
        Dynamic Logic 으로 밥벌이하는 사람들에게 중요한건 유용한 무언가가 아니라
        종신교수직인거죠.
      </p>
      <p>
        수강철회를 하고, 결코 컴퓨터과학 대학원을 가지 않겠다고 결심했습니다.
      </p>
      <p>
        컴퓨터과학과 소프트웨어 개발은 결코 같지 않습니다. 학교에 적당한
        소프트웨어 개발 교육과정이 있다는건 매우매우 운이 좋은 일입니다. 엘리트
        대학들은 실용적인 기술같은건 직업학원이나 교도소 재활프로그램에 맡기는
        거라고 생각하기 때문이죠. 우린 예일 대학이고, 글로벌 리더잖아요? 하.
      </p>
      <p>
        문제는 소프트웨어 개발에 전문학교가 없다는 것입니다. 그래서 프로그래머가
        되고 싶은 학생들은 컴퓨터 과학을 전공하죠. 컴퓨터과학이 괜찮은 전공이긴
        하지만, 소프트웨어 개발과는 다른 분야입니다.{' '}
      </p>
      <p>
        만약 운이 좋다면 역사학과에서 글을 써대는것 만큼 프로그래밍에 집중하는
        수업을 찾을 수 있겠죠. 그런 수업이야말로 여러분에게 가장 좋은
        수업입니다. 정말 프로그래밍을 사랑한다면, 람다 미적분학이나 선형대수같이
        컴퓨터에 손댈일도 없는 과목은 이해 못해도 기분 나쁠거 없죠. Practicum
        이라는 단어가 붙은 과목들을 찾아 들으세요. 실용적인 강의들은 라틴어
        이름을 붙임으로써 대학 행정부의 단속을 피하려고 하니까요.
      </p>
      <p>
        <h3>6. 인도인들이 직업을 다 뺏어갈 거라고 걱정하지 마라.</h3>
      </p>
      <p>이미 인도에 계신 분이라면 이 문제에 대해 걱정할 필요 없겠네요.</p>
      <p>
        컴퓨터과학과의 등록률이 매년 떨어지고 있다는 소식을 듣습니다. "학생들은
        인도인들이 모든 직업을 채갈까봐 두려워 한다" 라는 이유 때문이라네요.
        이런 염려는 여러 이유로 잘못됐습니다. 첫째, 비즈니스적인 유행때문에
        직업을 선택하는 것은 바보짓입니다. 둘째, 중국과 인도가 소프트웨어
        개발일을 전부 가져가 버린다 해도 프로그래밍은 비즈니스 프로세스
        엔지니어링 같은 흥미로운 직업을 위한 최선의 선택입니다. 셋째, 저를
        믿으세요. 미국이나 인도나 훌륭한 프로그래머가 부족해서 난리입니다.
        실직한 한무더기의 개발자들을 화나게 할 것을 각오하고 말씀드리자면, 진짜
        훌륭한 프로그래머들은 실직하지 않습니다. 넷째, 뭐 다른 좋은 선택이
        있나요? 역사학 전공은 어때요? 로스쿨 외엔 다른 선택지가 없을텐데. 제가
        알기론 99%의 변호사가 자신의 일을 싫어하고, 매일 아침 일어날때마다
        싫어하는데도, 매주 90시간씩 일합니다. 말했듯이, 당신이 프로그래밍을
        좋아한다면 굉장히 축복받은 겁니다. 자신이 사랑하는 일을 하면서 훌륭한
        삶을 살아갈 수 있는 사람에 속하는 거죠.
      </p>
      <p>
        제 생각에 학생들은 이런 생각을 안하는 것 같네요. 컴퓨터과학과의 진학율
        감소는 단지 닷컴 버블이 터지고 평소의 수준으로 돌아오는 거겠죠.
        프로그래밍을 좋아하지도 않으면서 엄청난 연봉과 24살때 IPO 를 할 수 있는
        기회를 노리고 오는 사람들로 만들어진 거품이요. 다행스럽게도 이런
        사람들은 오래전에 없어졌습니다.
      </p>
      <p>
        <h3>7. 뭘 하던 간에, 좋은 여름 인턴 경험을 쌓아라. </h3>
      </p>
      <p>
        똑똑한 채용 담당자들은 프로그래밍을 좋아하는 사람들이 15살때 치과의사를
        위한 데이터베이스를 작성하고, 대학 오기전 3년 동안 여름 컴퓨터 캠프에서
        강의를 했으며, 대학신문의 콘텐츠 관리 시스템을 제작하고, 소프트웨어
        회사에서 여름 인턴십을 한다는걸 알고 있죠. 채용 담당자들이 찾고 있는게
        이런겁니다.
      </p>
      <p>
        만약 프로그래밍을 좋아한다면, 여러분이 저지를 수 있는 가장 큰 실수는
        여름에 프로그래밍이 아닌 다른 일을 하는 겁니다. 19살때는 쇼핑몰 같은데서
        알바를 하고 싶어한다는 것을 저도 알지만, 여러분은 19살때 믿을 수 없을
        만큼 가치있는 기술을 갖고 있습니다. 쇼핑몰에서 물건포장이나 하며 시간을
        보내는건 바보같은 일이에요. 졸업할때 쯤에는 이력서에 수많은 프로그래밍
        작업물이 있어야 합니다. 아베크롬비 같은데서 일한 졸업생들은 렌트카
        회사나 갈겁니다(톰 웰링은 예외입니다. 그는 TV에서 슈퍼맨을 연기하고
        있죠).
      </p>
      <p>
        여러분의 삶을 편하게 만들고, 그리고 이 글이 얼마나 이기적인 글인지
        강조하기 위해, 제 회사인 Fog Creek 는 소프트웨어 개발 여름 인턴십을 열고
        있습니다. 지난 여름 인턴중 한 명인 벤은 "다른 곳 인턴보다 Fog Creek에서
        더 많이 배울수 있다"고 말했습니다. 그렇게 말하라고 제가 시킨거 아니에요.
        신청서 마감은 2월 1일입니다. 서두르세요.
      </p>
      <p>
        만약 여러분이 제 충고를 따른다면, 마이크로소프트사의 주식을 너무 빨리
        팔아버리거나, 구글의 일자리를 거절하게 될 수도 있죠. 왜냐면 스스로가
        개인사무실*을 비롯한 멍청한 선택을 원했기 때문이죠. 그렇게 한다해도 제
        잘못은 아닙니다. 가볍게 읽고 넘어가라고 제가 말씀드렸잖아요.
      </p>
      <p>
        * Joel Spolsky 는 개발자의 생산성 향상을 위해서 개발자에게 개인 사무실을
        주어야 한다고 주장합니다.
      </p>

      <p>
        <Link href="https://www.joelonsoftware.com/2005/01/02/advice-for-computer-science-college-students/">
          <a>출처: Joel Spolsky 블로그</a>
        </Link>
      </p>
    </div>
  );
}
