// import Document, { Html, Head, Main, NextScript } from 'next/document';

// class MyDocument extends Document {
//   render() {
//     return (
//       <Html>
//         <Head>
//           <script src="/js/vendor/jquery-3.3.1.min.js"></script>
//           <script src="/js/vendor/modernizr-3.6.0.min.js"></script>
//           <script src="/js/vendor/jquery.cookie.js"></script>
//           <script src="/js/vendor/wow.min.js"></script>
//           <script src="/js/bootstrap.min.js"></script>
//           <script src="/js/plugins.js"></script>
//           <script src="/js/popper.min.js"></script>
//           <script src="/js/lazysizes.js"></script>
//           <script src="/js/main.js"></script>
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
          ></link>
        </Head>
        <div
          id="modalOverly"
          style={{ height: '5471px', display: 'none' }}
        ></div>
        <body className="template-index belle template-index-belle">
          <Main />
          <NextScript />
          {/* <script src="js/main_kupon.js" />
          <script src="js/vendor/wow.min.js" />
          <script src="js/bootstrap.min.js" />
          <script src="js/plugins.js" />
          <script src="js/popper.min.js" />
          <script src="js/lazysizes.js" />
          <script src="js/vendor/jquery-3.3.1.min.js" />
          <script src="js/vendor/modernizr-3.6.0.min.js" />
          <script src="js/vendor/jquery.cookie.js" /> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
