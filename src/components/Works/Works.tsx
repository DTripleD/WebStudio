const Works = () => {
  return (
    <section className="section no-padding-top">
      <div className="container work">
        <h2 className="work__title">Чим ми займаємося</h2>
        <ul className="list work__list">
          <li className="work__item">
            <img
              srcSet="
                  ../images/works/img1_l@1x.jpg 1x,
                  ../images/works/img1_l@2x.jpg 2x
                "
              src="../images/works/img1_l@1x.jpg"
              alt="hands on keyboard"
              width="370"
              loading="lazy"
            />
            <h2 className="work__dscr">Десктопні додатки</h2>
          </li>
          <li className="work__item">
            <img
              srcSet="
                  ../images/works/img2_l@1x.jpg 1x,
                  ../images/works/img2_l@2x.jpg 2x
                "
              src="./images/works/img2_l@1x.jpg"
              alt="phones on laptop"
              width="370"
              loading="lazy"
            />
            <h2 className="work__dscr">Мобільні додатки</h2>
          </li>
          <li className="work__item">
            <img
              srcSet="
                  ../images/works/img3_l@1x.jpg 1x,
                  ../images/works/img3_l@2x.jpg 2x
                "
              src="../images/works/img3_l@1x.jpg"
              alt="tablet"
              width="370"
              loading="lazy"
            />
            <h2 className="work__dscr">Дизайнерські рішення</h2>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Works;
