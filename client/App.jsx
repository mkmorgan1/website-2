import React from 'react';
import styles from './styles.module.sass';
import $ from 'jquery';

import Header from './Header.jsx';
import SocialLinks from './SocialLinks.jsx';
import profilePhotos from './profilePhotos.js'


class App extends React.Component {
  constructor() {
    super();
    this.randBackgroundColor = this.randBackgroundColor.bind(this);
  }

  /* CREATES RANDOM BACKGROUND COLORS */
  randBackgroundColor(element) {
    $(element).each(function() {
      var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' +
        (Math.floor((256-199)*Math.random()) + 200) + ',' +
        (Math.floor((256-199)*Math.random()) + 200) + ')';
      $(this).css("background-color", hue);
    });
  }

  componentDidMount() {
    this.randBackgroundColor('body');
    this.randBackgroundColor('.randColor');
    this.randBackgroundColor('a');

  }

  render() {
    return (
      <div className={styles.container}>
        <Header styles={styles} />
        <div className={`${styles.boxes} randColor`}>
          <img src={profilePhotos[2]} alt="Matthew Morgan" width='75%' height='75%'/>
        </div>
        <SocialLinks styles={styles} />

        <div className={`${styles.boxes} randColor`}>
          Box Three
        </div>
        <div className={`${styles.boxes} randColor`}>
          Box Four
        </div>

      </div>


    )
  }
}

export default App;