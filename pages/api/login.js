// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fire from '../../firebaseConfig';
const posts = [
  { id: 1, title: '첫 게시글', text: '첫 게시글의 내용' },
  { id: 2, title: '두번째 게시글', text: '둘째 게시글의 내용' },
];

export default function handler(req, res) {
  if (req.method === 'POST') {
    //res.statusCode = 200;
    //res.setHeader('Content-Type', 'application/json');
    //res.send(posts);
    console.log(req.body);
    let userId = 'some-uid';
    fire
      .auth()
      .signInWithEmailAndPassword(req.body.email, req.body.password)
      .then(() => {
        admin
          .auth()
          .createCustomToken(userId)
          .then(function (customToken) {
            // Send token back to client
          })
          .catch(function (error) {
            console.log('Error creating custom token:', error);
          });
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('error: ', error.message);
        // ...
      });
  } else if (req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.send(posts);
    console.log(posts);
  }
}
