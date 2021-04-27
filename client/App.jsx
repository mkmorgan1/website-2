import React from 'react';
import styles from './styles.module.sass';
import $ from 'jquery';

import {bio, project} from './requestQueries.js'

import Header from './Header.jsx';
import ProfilePhoto from './profilePhoto/ProfilePhoto.jsx';
import SocialLinks from './SocialLinks.jsx';
import Bio from './bio/Bio.jsx'
import Projects from './projects/Projects.jsx';
import ApplicationsHeader from './projects/ApplicationsHeader.jsx';

import MY_IP_ADDRESS from './mattsIpAddress.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      projectData: [],
      bioData: {bio: ''},
      ipAddress: '',
      admin: false,
    }
    this.makeColors = this.makeColors.bind(this);
    this.getData = this.getData.bind(this);
    this.randBackgroundColor = this.randBackgroundColor.bind(this);
    this.redirectToHttps = this.redirectToHttps.bind(this);
    this.getIpAddress = this.getIpAddress.bind(this);
  }
  // GETS IP ADDRESS FROM USER AND SETS ADMIN
  getIpAddress() {
    $.getJSON('https://api.ipify.org?format=json', (data) => {
        if (data.ip === MY_IP_ADDRESS) {
          console.log("It's Matt");
          this.setState({
            ipAddress: data.ip,
            admin: true,
          })
        } else {
          this.setState({
            ipAddress: data.ip,
          })
        }
    });
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
  getData(type) {
    let request, stateName, dataFunc;
    if (type === 'bio'){
      request = bio.get;
      stateName = 'bioData';
      dataFunc = 'getBio';
    } else {
      request = project.get;
      stateName = 'projectData';
      dataFunc = 'getProjects';
    }
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
    this.getIpAddress();
    this.getData();
    this.getData('bio');
  }

  render() {
    return (
      <div className={styles.container}>
        <Header styles={styles} makeColors={this.makeColors}/>
        <ProfilePhoto styles={styles} />
        <Bio styles={styles} bioData={this.state.bioData} admin={this.state.admin}/>

        {/* APPLICATIONS HEADER */}
        {/* <div className={`${styles.longBoxes} randColor`}>
          <div className={styles.centerContent}>
            <p className={styles.titleName} onClick={this.makeColors}>Applications</p>
          </div>
        </div> */}
        <ApplicationsHeader makeColors={this.makeColors} styles={styles}/>
        <Projects styles={styles} appData={this.state.projectData} getData={this.getData} admin={this.state.admin}/>

        {/* CONTACT HEADER */}
        <div className={`${styles.longBoxes} randColor`}>
          <div className={styles.centerContent}>
            <p className={styles.titleName} onClick={this.makeColors}>Contact</p>
          </div>
        </div>

        <SocialLinks styles={styles} />
      </div>
    )
  }
}

export default App;