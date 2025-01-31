import React from "react";
import "./PodcastCards.css"; // Assuming the styles are in this CSS file

const PodcastCard = ({ theme, color, imgSrc, title, date, previewText }) => {
  return (
    <article className={`postcard ${theme} ${color}`}>
      <a className="postcard__img_link" href="#">
        <img className="postcard__img" src={imgSrc} alt="Podcast" />
      </a>
      <div className="postcard__text">
        <h1 className={`postcard__title ${color}`}>
          <a href="#">{title}</a>
        </h1>
        <div className="postcard__subtitle small">
          <time dateTime="2020-05-25 12:00:00">
            <i className="fas fa-calendar-alt mr-2"></i>
            {date}
          </time>
        </div>
        <div className="postcard__bar"></div>
        <div className="postcard__preview-txt">{previewText}</div>
        <ul className="postcard__tagbox">
          <li className="tag__item">
            <i className="fas fa-tag mr-2"></i>Podcast
          </li>
          <li className="tag__item">
            <i className="fas fa-clock mr-2"></i>55 mins.
          </li>
          <li className={`tag__item play ${color}`}>
            <a href="#">
              <i className="fas fa-play mr-2"></i>Play Episode
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};

const PodcastCards = () => {
  const cards = [
    {
      theme: "dark",
      color: "blue",
      imgSrc: "https://picsum.photos/1000/1000",
      title: "Podcast Title",
      date: "Mon, May 25th 2020",
      previewText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius!",
    },
    {
      theme: "dark",
      color: "red",
      imgSrc: "https://picsum.photos/501/500",
      title: "Podcast Title",
      date: "Mon, May 25th 2020",
      previewText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius!",
    },
    {
      theme: "dark",
      color: "green",
      imgSrc: "https://picsum.photos/500/501",
      title: "Podcast Title",
      date: "Mon, May 25th 2020",
      previewText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius!",
    },
    {
      theme: "light",
      color: "yellow",
      imgSrc: "https://picsum.photos/501/501",
      title: "Podcast Title",
      date: "Mon, May 25th 2020",
      previewText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius!",
    },
    {
      theme: "light",
      color: "blue",
      imgSrc: "https://picsum.photos/1000/1000",
      title: "Podcast Title",
      date: "Mon, May 25th 2020",
      previewText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius!",
    },
  ];

  return (
    <div>
      <section className="dark">
        <div className="container py-4">
          <h1 className="h1 text-center" id="pageHeaderTitle">
            My Cards Dark
          </h1>
          {cards
            .filter((card) => card.theme === "dark")
            .map((card, index) => (
              <PodcastCard key={index} {...card} />
            ))}
        </div>
      </section>
      <section className="light">
        <div className="container py-2">
          <h1 className="h1 text-center text-dark" id="pageHeaderTitle">
            My Cards Light
          </h1>
          {cards
            .filter((card) => card.theme === "light")
            .map((card, index) => (
              <PodcastCard key={index} {...card} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default PodcastCards;
