import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../styles/about-me.css';
import '../styles/scroll-down-button.css';
import '../scripts/text-scramble.js';
import myPhotoImg from '../images/me.jpg';

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <div className="col-sm-10 col-lg-7 mx-auto">
          <div className="textScrambleStyle text-left pb-3" data-aos="fade-right">
            <span className="blinker">_</span>
            <span className="textScramble"></span>
          </div>
          <div className="row">
            <div className="col-sm-8 text-justify text-left" data-aos="fade-up">
              <p>Znajdziesz tutaj krótkie podsumowanie moich umiejętności, używanych przeze mnie narzędzi, wybrane projekty oraz przebieg edukacji i kariery zawodowej.</p>
              <p>Każdy projekt posiada odnośnik do GitHuba, gdzie znajdziesz szczegółowy opis oraz kod źródłowy.</p>
              <p>W technikum oraz na studiach miałem styczność z Asemblerem, C, C++, MATLAB, JavaScript, HTML, CSS, programowaniem mikrokontrolerów oraz sterowników PLC. Później pracując przez prawie cztery lata jako projektant maszyn i urządzeń w między czasie hobbystycznie uczyłem się programowania. Wszedłem w świat Javy, Springa, OOP i zaraziłem się tym na tyle mocno, że postanowiłem się przebranżowić.</p>
              <p>Obecnie zawodowo używam głównie technologii związanych z językiem Rust (symulacje, AI, game dev - Unity, FP), a w wolnych chwilach siedzę w Web devie - technologiach związanych z JavaScript oraz w Javie.</p>
              <p>Staram się dotykać wielu języków i technologii oraz być na bieżąco z nowinkami w świecie IT.</p>
              <p>Sprawdź również moje pozostałe projekty na GitHubie.</p>
            </div>
            <div className="col-sm-4" data-aos="fade-left">
              <img className="img-fluid" src={myPhotoImg} />
            </div>
          </div>
        </div>
        <a href="#skills" className="buttonJumpToNextSection" role="button">
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </a>
      </div>
    );
  }
}

export default AboutMe;
