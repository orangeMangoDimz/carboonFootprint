import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ArticlePictureSection.css';

import image1 from '../Assets/1.jpg';
import image2 from '../Assets/2.jpg';
import image3 from '../Assets/3.jpg';
import {renderToStaticMarkup} from 'react-dom/server';

import leftSide from '../Assets/Left Side.png'
import { computeHeadingLevel } from '@testing-library/react';

const ArticlePictureSection = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false
  };

  const article_data = [
    {
      id: 1,
      url: 'https://news.microsoft.com/id-id/2022/03/22/a-journey-to-indonesias-2030-carbon-emission-reduction-target-with-cloud-and-ai/',
      img: image1,
      title: 'A Journey to Indonesia’s 2030 Carbon Emission Reduction Target with Cloud and AI',
      description: (
        <>
          Various cross-sectoral organizations in Indonesia are starting to monitor the impact of their carbon emissions with Jejak.in and Microsoft, for a sustainable future in Indonesia.<br />
          <br />
          To achieve a sustainable future, Indonesia has committed to reducing its carbon emissions by 41 percent by 2030. This commitment is included in the Indonesia Emas 2045 (Golden Indonesia 2045) Program.
          <br />
          <br />
          To bring this goal to life, the participation of everyone in society is needed. This is because our daily activities such as turning on the lights, eating, and driving contribute to the creation of carbon footprint—the total greenhouse gas emissions generated directly or indirectly from individuals, organizations, events, or products.*
          <br />
          <br />
          Various educational efforts about the importance of collaboration in solving sustainability issues have started to increase the awareness level of individuals and organizations to reduce the environmental impact of daily activities. The next question: how can we carry out activities in a sustainable manner? What concrete actions can we take?
        </>
      ),
    },
    {
      id: 2,
      url: 'https://www.esdm.go.id/en/media-center/news-archives/indonesia-cuts-1037-million-tonnes-of-carbon-emissions-from-power-plants-in-2021',
      img: image2,
      title: 'Indonesia Cuts 10.37 Million Tonnes of Carbon Emissions from Power Plants in 2021',
      description: (
        <>
          Throughout 2021, the Indonesian government cut 10.37 million tonnes of carbon dioxide (CO2) emissions from power plants, which is 210.8% of the target of 4.92 million tonnes.
          <br />
          <br />
          "This relates (Indonesia's contribution) to the fate of the world. Based on the 2021 target, we recorded an achievement of more than 200% percent," said Director General of Electricity of the Ministry of Energy and Mineral Resources (EMR), Rida Mulyana, in a press conference titled Performance of 2021 and Work Programs for 2022 of the Electricity Subsector, in Jakarta on Tuesday (18/1).
          <br />
          <br />
          Rida went on to say that the reduction of CO2 emissions from power plants shows a significant development year by year. Back in 2020, the Ministry of EMR set an emission reduction target at 4.71 million tonnes while the result came at 8.78 million tonnes, or 186% of the target.
          <br />
          <br />
          For 2022, the Ministry of EMR has set 5.36 million tonnes for power plants CO2 emission reduction target. "We will aim for these figures during 2022," said Rida.
        </>
      ),
    },
    {
      id: 3,
      url: 'https://www.thejakartapost.com/culture/2023/01/17/jakarta-aims-to-achieve-net-zero-emissions-by-2050.html',
      img: image3,
      title: 'Jakarta aims to achieve net-zero emissions by 2050',
      description: (
        <>
          We are reaping what we have sown. As extreme weather and floods have besieged us lately, many have come to realize that climate change is real and we are the main culprit of so many environmental disasters happening on Earth.
          <br />
          <br />
          “In Indonesia and many parts of the world, climate and hydrometeorological disasters at an unprecedented scale are happening, resulting in a great number of victims and financial losses,” Leonard Simanjuntak, Greenpeace country director for Indonesia, said at the Goethe Institute Jakarta on Dec. 14, 2022.
          <br />
          <br />
          The scale is predicted to keep on escalating if we do not rein in the main cause of the problem, which is carbon emissions.
          <br />
          <br />
          Carbon dioxide emissions have increased exponentially from year to year. According to Ourworldindata.org, the world emitted six billion tonnes of CO2 in 1950. The number almost quadrupled in 1990 with the global carbon emissions amounting to 22 billion tonnes.
          <br />
          <br />
          Last year, the world emitted 37.12 billion tonnes of CO2 emissions, precipitating global warming at an alarming level.
        </>
      ),
    },
  ];

  return (
    <div className="ArticlePictureSection d-flex justify-content-center align-items-center">
      <div className='container'>
        <h1 className='text-light text-center mb-3'>Enviromental News</h1>
        <Slider {...settings} >
          {article_data.map((article) => (
            <div key={article.id} className='article-card'>
              {console.log("Article ID: " + article.id)}
              <div className="carousel-items">
                <div className="carousel-items-left">
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <img
                      src={article.img}
                      alt={`Illustration for the article ${article.id + 1}`}
                      className="carousel-image"
                    />
                  </a>
                </div>
                <div className="carousel-items-right">
                  <h2 className="image-description">{article.title}</h2>
                  <p>{article.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ArticlePictureSection;
