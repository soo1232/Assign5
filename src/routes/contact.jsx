export default function Contact() {
    return (
      /* Define contact page */
      <main>
        <div class="container">
          <div class="footer-contactus">
            <h5 class="text-md-right">KEEP IN TOUCH</h5>
            <form>
              <fieldset class="form-group">
                <input type="yourname" class="form-control" id="yourname" placeholder="Your name"/>
              </fieldset>
              <fieldset class="form-group">
                <input type="email" class="form-control" id="email" placeholder="E-mail"/>
              </fieldset>
              <fieldset class="form-group">
                <textarea class="form-control" id="exampleMessage" placeholder="Leave your message"></textarea>
              </fieldset>
              <fieldset class="form-group text-xs-right">
                <button type="button" class="btn btn-secondary-outline btn-lg">Send</button>
              </fieldset>
            </form>
          </div>
        </div>
      </main>
    );
  }