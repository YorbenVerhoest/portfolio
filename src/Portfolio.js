import './library/css/portfolio.scss'
import Header from './components/Header'
import { BiMailSend } from 'react-icons/bi';
import { IoIosLaptop } from 'react-icons/io';
import { IoGlassesOutline } from 'react-icons/io5';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { AiOutlineMail } from 'react-icons/ai';
import { PiMapPinLine } from 'react-icons/pi';
import { GiNewBorn } from 'react-icons/gi';
import { MdOutlineSchool } from 'react-icons/md';
import { BsBriefcase } from 'react-icons/bs';
import { FaLanguage } from 'react-icons/fa';
import { BiSolidCircle, BiSolidCircleHalf } from 'react-icons/bi';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { SelectItem, SelectRandom } from './redux/actions';
import { useSelector } from "react-redux";



const Portfolio = () => {

  const dispatch = useDispatch()
  let [view, setView] = useState(false)
  let selectedItem = useSelector((state) => state.selectedItem);

  const selectHandler = (item) => {
    dispatch(SelectItem(item))
    selectRandom()
  }

  const selectRandom = () => {
    const items = ["one", "two", "three"];
    const randomIndex = Math.floor(Math.random() * items.length);
    dispatch(SelectRandom(items[randomIndex]));
  };

  useEffect(() => {
    let body = document.getElementsByTagName('body')[0]
    if (selectedItem !== "") {
      body.style.overflow = 'hidden'
    }
    else {
      body.style.overflow = 'auto'
    }

    }, [selectedItem])
  


  return (
    <div className="portfolio">
      <Header />
      <div className='divider' onClick={() => setView(!view)}>
        {view ? <BsChevronCompactLeft /> : <BsChevronCompactRight />}
      </div>
      <section className={`first ${view === false ? 'active' : ''}`}>
        <div className='block'>
          <div className='title'><BiMailSend />Contact</div>
          <ul>
            <li><HiOutlineDevicePhoneMobile />0479 05 71 36</li>
            <li><AiOutlineMail /><a href="mailto:yorben.verhoest@gmail.com">yorben.verhoest@gmail.com</a></li>
            <li><PiMapPinLine />Kloosterstraat 44 <br /> 9090 Melle</li>
            <li><GiNewBorn />02.12.1998</li>
          </ul>
        </div>
        <div className='block'>
          <div className='title'><IoGlassesOutline />Over mij</div>
          <p>
            Ik ben een rustig persoon die zowel in teamverband als alleen kan werken.
            In mijn vrije tijd ga ik graag sporten of spendeer ik graag wat tijd achter mijn computer.
            Vanaf november zal ik heel wat tijd spenderen met mijn zoontje.
          </p>
        </div>

        <div className='block'>
          <div className='title'><IoIosLaptop />Vaardigheden</div>
          <p><b>Frontend:<br/></b><span className='selectable' onClick={() => selectHandler('HTML5')}>HTML5</span>, <span className='selectable' onClick={() => selectHandler('CSS3')}>CSS3</span>, <span className='selectable' onClick={() => selectHandler('Javascript')}>Javascript</span>, <span className='selectable' onClick={() => selectHandler('ReactJs')}>ReactJs</span>, <span className='selectable' onClick={() => selectHandler('React Hooks')}>React Hooks</span>, <span className='selectable' onClick={() => selectHandler('React Router')}>React Router</span>, <span className='selectable' onClick={() => selectHandler('Redux')}>Redux</span></p>
          <p><b>Backend:<br/></b><span className='selectable' onClick={() => selectHandler('Python')}>Python</span>, <span className='selectable' onClick={() => selectHandler('Django')}>Django</span>, <span className='selectable' onClick={() => selectHandler('Django Rest Framework')}>Django Rest Framework</span>, <span className='selectable' onClick={() => selectHandler('Elasticsearch')}>Elasticsearch</span>, beperkte kennis <span className='selectable' onClick={() => selectHandler('Django Oscar')}>Django Oscar</span>, OOP programming.</p>
          <p><b>Andere:<br/></b>Beperkte kennis van bepaalde <span className='selectable' onClick={() => selectHandler('AWS')}>AWS</span> services (<span className='selectable' onClick={() => selectHandler('RDS')}>RDS</span>, <span className='selectable' onClick={() => selectHandler('S3')}>S3</span>, <span className='selectable' onClick={() => selectHandler('Lambda')}>Lambda</span>, <span className='selectable' onClick={() => selectHandler('Amplify')}>Amplify</span>, <span className='selectable' onClick={() => selectHandler('Cloudfront')}>Cloudfront</span>, <span className='selectable' onClick={() => selectHandler('Route53')}>Route53</span>) kan omgaan met <span className='selectable' onClick={() => selectHandler('Geospatial')}>Geospatial data</span>.</p>
          <p><b>Adobe Creative Cloud:<br/></b><span className='selectable' onClick={() => selectHandler('Illustrator')}>Illustrator</span>, <span className='selectable' onClick={() => selectHandler('InDesign')}>InDesign</span>, <span className='selectable' onClick={() => selectHandler('Photoshop')}>Photoshop</span>, <span className='selectable' onClick={() => selectHandler('XD')}>XD</span>, <span className='selectable' onClick={() => selectHandler('Premiere Pro')}>Premiere Pro</span>, <span className='selectable' onClick={() => selectHandler('After Effects')}>After Effects</span></p>
        </div>
      </section>
      <section className={`second ${view === true ? 'active' : ''}`}>
        <div className='block'>
          <div className='title'><MdOutlineSchool />Opleidingen</div>
          <div className='item'><span><b>Multimedia</b>, VISO Mariakerke</span>2015 - 2017</div>
          <div className='item'><span><b>Toegepaste informatica</b>, (niet afgewerkt)</span>2017 - 2018</div>
          <div className='item'><span><b><span className='selectable' onClick={() => selectHandler('ReactJs')}>ReactJs</span></b>, zelfstudie</span>2019</div>
          <div className='item'><span><b><span className='selectable' onClick={() => selectHandler('Django')}>Django</span></b>, zelfstudie</span>2021</div>
        </div>
        <div className='block'>
          <div className='title'><BsBriefcase />Werkervaring</div>
          <div className='item'><span><b><span className='selectable' onClick={() => selectHandler('Outbound Call Agent')}>Outbound Call Agent</span></b>, Mifratel Gent</span>10/2018 - 01/2019</div>
          <div className='item'><span><b>Full Stack Developer</b>, identityBuilding</span>03/2019 - heden</div>
          <p>
            Ik startte in 2019 als junior Front End Developer in opleiding. Tijdens
            deze opleiding leerde ik de kneepjes van het vak &gt; <span className='selectable' onClick={() => selectHandler('ReactJs')}>ReactJs</span> - <span className='selectable' onClick={() => selectHandler('Javascript')}>Javascript</span> -
            <span className='selectable' onClick={() => selectHandler('HTML5')}>HTML5</span> - <span className='selectable' onClick={() => selectHandler('CSS3')}>CSS3</span> - . . .
            Ik ontwikkelde de volledige FrontEnd van enkele projecten:
            <span className='selectable' onClick={() => selectHandler('Ondernemersnetwerk')}>Ondernemersnetwerk</span>/<span className='selectable' onClick={() => selectHandler('100% Lokaal')}>100% Lokaal</span>, <span className='selectable' onClick={() => selectHandler('OSN OnePage')}>websites van klanten</span> (gekoppeld
            aan een eigen database), <span className='selectable' onClick={() => selectHandler('Catalogusnetwerk')}>Catalogusnetwerk</span>, <span className='selectable' onClick={() => selectHandler('Promonetwerk')}>Promonetwerk</span>,
            <span className='selectable' onClick={() => selectHandler('Mijn.Stad-Gemeente.be')}>Mijn.Stad-Gemeente.be</span>, eigen uitwerking van <span className='selectable' onClick={() => selectHandler('Superplanner')}>Superplanner</span>, <span className='selectable' onClick={() => selectHandler('OSN Customer Info')}>online formulier</span> die ondernemers kunnen invullen om rechtstreeks hun
            informatie aan te passen in het <span className='selectable' onClick={() => selectHandler('Ondernemersnetwerk')}>Ondernemersnetwerk</span>, . . .
          </p>
          <p>
            In 2021 was de dringende nood aan BackEnd Developers hoog bij
            identityBuilding. Daarom volgde ik een zelfstudie <span className='selectable' onClick={() => selectHandler('Django')}>Django</span>/<span className='selectable' onClick={() => selectHandler('Python')}>Python</span>
            om zo mijn kennis op te doen. Ik ontwikkelde een volledige BackEnd
            voor bovenstaande projecten, schreef een eigen updatescript voor de
            maandelijkse updates (KBO) die aangeleverd werden als .csv bestanden.
            Ter optimalisatie voor het <span className='selectable' onClick={() => selectHandler('Ondernemersnetwerk')}>Ondernemersnetwerk</span>/<span className='selectable' onClick={() => selectHandler('100% Lokaal')}>100% Lokaal</span> zorgde ik
            voor een implementatie van <span className='selectable' onClick={() => selectHandler('Elasticsearch')}>Elasticsearch</span>. Dit betekent het indexeren
            van modellen in de BackEnd en de Search Optimalisatie van de
            FrontEnd. Het <span className='selectable' onClick={() => selectHandler('Hosten')}>Hosten</span> van projecten op <span className='selectable' onClick={() => selectHandler('AWS')}>AWS</span> is me ook niet vreemd.
            Kortom projecten van A-Z afwerken was hier wel aan de orde.
          </p>
        </div>
        <div className='block'>
          <div className='title'><FaLanguage /> Talenkennis</div>
          <div className='item'><span><b>Nederlands</b>, Moedertaal</span><div className='circles'><BiSolidCircle /><BiSolidCircle /><BiSolidCircle /><BiSolidCircle /><BiSolidCircleHalf /></div></div>
          <div className='item'><span><b>Engels</b>, Spreken & schrijven</span><div className='circles'><BiSolidCircle /><BiSolidCircle /><BiSolidCircle /><BiSolidCircle /><BiSolidCircleHalf /></div></div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
