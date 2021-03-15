import React from 'react';
import styles from './styles.module.sass';
import $ from 'jquery';


class App extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    $('a').each(function() {
      var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' +
        (Math.floor((256-199)*Math.random()) + 200) + ',' +
        (Math.floor((256-199)*Math.random()) + 200) + ')';
      $(this).css("background-color", hue);
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.boxes}>
          <div className={styles.title}>
            <h1>Matthew Morgan</h1>
            <p>Software Engineer</p>
          </div>
        </div>
        <div className={styles.boxes}>
          <div className={styles.socials}>
            <a href='https://www.linkedin.com/in/mkmorgan1/'><i class="fab fa-linkedin"></i></a>
            <a href='https://github.com/mkmorgan1'><i class="fab fa-github-square"></i></a>
            <a href='https://twitter.com/m_kmorgan'><i class="fab fa-twitter-square"></i></a>
          </div>

        </div>
        <div className={styles.boxes}>
          Box Three
        </div>
        <div className={styles.boxes}>
          Box Four
        </div>

      </div>


    )
  }
}

export default App;