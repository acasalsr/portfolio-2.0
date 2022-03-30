export default function Footer() {
  return (
    <footer id="contact">
      <div className="blue-line background-color-blue"></div>
      <div className="background-color-yellow-gradient">
        <div className="container-medium flex-left-footer padding-huge">
          <div className="flex-vertical-left">
            <a
              className="div-link text-color-black margin-bottom margin-medium"
              href="tel:+34611134273"
            >
              Call me at +34 611 13 42 73
            </a>
            <a
              className="div-link text-color-black"
              href="emai: acasalsr@gmail.com"
            >
              Email me at acasalsr@gmail.com
            </a>
          </div>
          {/* 
                <div className="flex-vertical-left">
                    <form id="contact" action="https://formcarry.com/s/qfOk0xRnnqo" method="POST" accept-charset="UTF-8" >
                        <label for="email">Your Email:</label><br>
                        <input className="input" type="email" placeholder="What is your email address?" name="email"><br/>
                        <label for="text">Your Name</label><br>
                        <input className="input" type="text" placeholder="What is your name?" name="firstName"><br/>
                        <label for="phone">Enter your phone number</label><br>
                        <input className="input" type="tel" placeholder="What is your phone number?" name="phoneNumber"><br/>
                        <button className="buttonForm" type="submit">Submit</button>
                        <input className="input" type="hidden" name="_gotcha">
                    </form>
                */}
        </div>
      </div>
    </footer>
  );
}
