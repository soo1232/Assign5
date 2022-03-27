import { Link } from "react-router-dom";

export default function App() {
  return (
    /* Definge home page html */
    <main>
        <div class="container">
            <article>

                <div class="content-part">
                    <div class="post-header">
                        <h3 class="post-title">
                            <a href="">Combine fine images</a>
                        </h3>
                    </div>
                    <div class="post-list-entry">
                        <p>To represent a product</p>
                    </div>
                </div>
                <div class="hero">
                  <div class="item"><img src="/images/brand Book.jpg" /></div>
                  <div class="item"><img src="/images/brand book-1.jpg" /></div>
                  <div class="item"><img src="/images/brand book-2.jpg" /></div>
                  <div class="item"><img src="/images/brand book-11.jpg" /></div>
                  <div class="item"><img src="/images/plash.jpg" /></div>
                  <div class="item"><img src="/images/brand book-4.jpg" /></div>
                  <div class="item"><img src="/images/UX soo.jpg" /></div>
                  <div class="item"><img src="/images/main portfolio.jpg" /></div>
                </div>
            </article>
        </div>
    </main>
  );
}