import React from 'react';
import styles from './styles.module.sass';
import $ from 'jquery';

import {bio, project} from './requestQueries.js'

import Header from './Header.jsx';
import ProfilePhoto from './profilePhoto/ProfilePhoto.jsx';
import SocialLinks from './SocialLinks.jsx';
import Bio from './Bio.jsx'
import Projects from './projects/Projects.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      projectData: [],
      bioData: {bio: ''},
    }
    this.makeColors = this.makeColors.bind(this);
    this.getData = this.getData.bind(this);
    this.randBackgroundColor = this.randBackgroundColor.bind(this);
    this.redirectToHttps = this.redirectToHttps.bind(this);
  }

  /* REDIRECT TO HTTPS ON DEPLOYMENT */
  redirectToHttps() {
    const link = window.location.href;
      if(link[4] !== "s" && !(link.includes('localhost'))){
        let clink = "";
        for (let i = 4; i < link.length; i++) {
          clink += link[i];
        }
      window.location.href = `https${clink}`;
    }
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
        this.setState({
          [stateName]: data.data[dataFunc]
        })
      })
      .catch(err => err)
      .then(() => {
        if (stateName === 'projectData') {
          this.randBackgroundColor('body');
          this.randBackgroundColor('.randColor');
        }
      });
    }

  componentDidMount() {
    this.redirectToHttps();
    this.getData(project.get, 'projectData', 'getProjects')
    this.getData(bio.get, 'bioData', 'getBio');
  }

  render() {
    return (
      <div className={styles.container}>
        <Header styles={styles} makeColors={this.makeColors}/>
        <ProfilePhoto styles={styles} />
        <Bio styles={styles} bioData={this.state.bioData}/>

        {/* APPLICATIONS HEADER */}
        <div className={`${styles.longBoxes} randColor`}>
          <div className={styles.centerContent}>
            <p className={styles.titleName}>Applications</p>
          </div>
        </div>

        <Projects styles={styles} appData={this.state.projectData}/>

        {/* CONTACT HEADER */}
        <div className={`${styles.longBoxes} randColor`}>
          <div className={styles.centerContent}>
            <p className={styles.titleName}>Contact</p>
          </div>
        </div>

        <SocialLinks styles={styles} />
      </div>
    )
  }
}

export default App;