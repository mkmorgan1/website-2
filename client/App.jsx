import React from 'react';
import styles from './styles.module.sass';
import $ from 'jquery';

import {bio, project} from './requestQueries.js'

import Header from './Header.jsx';
import SocialLinks from './SocialLinks.jsx';
import ProfilePhoto from './profilePhoto/ProfilePhoto.jsx';
import Projects from './projects/Projects.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      appData: [],
      bioData: {bio: ''},
    }
    this.makeColors = this.makeColors.bind(this);
    this.getData = this.getData.bind(this);
    this.randBackgroundColor = this.randBackgroundColor.bind(this);
  }

  /* CREATES RANDOM BACKGROUND COLORS */
  randBackgroundColor(element) {
    $(element).each(function() {
      var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' +
        (Math.floor((256-199)*Math.random()) + 200) + ',' +
        (Math.floor((256-199)*Math.random()) + 200) + ')';
      $(this).css('background-color', hue);
    });
  }
  makeColors() {
    this.randBackgroundColor('body');
    this.randBackgroundColor('.randColor');
  }

  /* API CALL FOR ALL DATA */
  getData(request, stateName, dataFunc) {
    const query = request;
    fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ query })
    })
      .then(r => r.json())
      .then(data => {
        console.log(data)
        this.setState({
          [stateName]: data.data[dataFunc]
        })
      })
      .catch(err => err)
      .then(() => {
        this.randBackgroundColor('body');
        this.randBackgroundColor('.randColor');
      })
    }

  componentDidMount() {
    this.getData(project.get, 'appData', 'getProjects');
    this.getData(bio.get, 'bioData', 'getBio');
  }

  render() {
    return (
      <div className={styles.container}>
        <Header styles={styles} makeColors={this.makeColors}/>
        <ProfilePhoto styles={styles} />
        <SocialLinks styles={styles} />

        <div className={`${styles.boxes} randColor`}>
          {this.state.bioData.bio}
        </div>

        <div className={`${styles.longBoxes} randColor`}>
          <div className={styles.projectsTitle}>
            <p className={styles.titleName}>Applications</p>
          </div>
        </div>

        <Projects
          styles={styles}
          appData={this.state.appData}
        />
        <div className={`${styles.longBoxes} randColor`}>
          contact:
        </div>

      </div>


    )
  }
}

export default App;