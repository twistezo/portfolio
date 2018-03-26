import { html } from 'lit-html';
import 'bootstrap/dist/js/bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/about-me.css';
import '../styles/scroll-down-button.css';
import '../components/text-scramble';
import mePhotoImg from '../images/me.jpg';
import cloudImg from '../images/clound.png';

const AboutMe =
  html`

<div class="scene-depth-0">
  <div data-relative-input="true" id="scene">
    <div data-depth="0.1">
      <div class="bracesEffect left-bracket">
        &lt;
      </div>
      <div class="bracesEffect right-bracket ">
        /&gt;
      </div>
      <div data-depth="0.2">
        <img class="img-fluid cloudImg" src=${cloudImg} />
      </div>
    </div>
  </div>
</div>

<div class="text-center scene-depth-1">
  <div class="row mx-auto">

    <div class="col-sm-2">
    </div>

    <div class="col-sm-8 ">
      <div class="textScrambleStyle text-left pb-4" data-aos="fade-right ">
        <span class="blinker ">_</span>
        <span class="textScramble "></span>
      </div>

      <div class="row ">

        <div class="col-sm-8 text-justify text-left " data-aos="fade-up ">
          <p>
            Znajdziesz tutaj krótkie podsumowanie moich umiejętności, używanych przeze mnie narzędzi, wybrane projekty oraz przebieg
            edukacji i kariery zawodowej.
          </p>
          <p>
            Każdy projekt posiada odnośnik do GitHuba, gdzie znajdziesz szczegółowy opis oraz kod źródłowy.</p>
          <p>
            W technikum oraz na studiach miałem styczność z Asemblerem, C, C++, MATLAB, JavaScript, HTML, CSS, programowaniem mikrokontrolerów
            oraz sterowników PLC. Później pracując przez prawie cztery lata jako projektant maszyn i urządzeń w między czasie
            hobbystycznie uczyłem się programowania. Wszedłem w świat Javy, Springa,
            <a href="https://pl.wikipedia.org/wiki/Programowanie_obiektowe " target="_blank " rel="noopener noreferrer ">OOP</a> i zaraziłem się tym na tyle mocno, że postanowiłem się przebranżowić.
          </p>
          <p>
            Obecnie zawodowo używam głównie technologii związanych z językiem
            <a href="https://www.rust-lang.org/pl-PL/ " target="_blank " rel="noopener noreferrer ">Rust</a> (symulacje, AI, game dev -
            <a href="https://unity3d.com/ " target="_blank " rel="noopener noreferrer ">Unity</a>,
            <a href="https://pl.wikipedia.org/wiki/Programowanie_funkcyjne " target="_blank " rel="noopener noreferrer ">FP</a>), a w wolnych chwilach siedzę w Web devie - technologiach związanych z JavaScript oraz w Javie.
          </p>
          <p>
            Staram się dotykać wielu języków i technologii oraz być na bieżąco z nowinkami w świecie IT.
          </p>
          <p>
            Sprawdź również moje pozostałe projekty na
            <a href="https://github.com/twistezo " target="_blank " rel="noopener noreferrer ">GitHubie</a>.
          </p>
        </div>

        <div class="col-sm-4 " data-aos="fade-left ">
          <img class="img-fluid " src=${mePhotoImg} />
        </div>

      </div>

    </div>
    <div class="col-sm-2 " data-aos="fade-left ">
    </div>

  </div>
  <a href="#skills " class="buttonJumpToNextSection " role="button ">
    <div class="chevron "></div>
    <div class="chevron "></div>
    <div class="chevron "></div>
  </a>

</div>
`;

export default AboutMe;
