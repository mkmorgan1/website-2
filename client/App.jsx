import React from 'react';
import styles from './styles.module.sass';
import $ from 'jquery';

import Header from './Header.jsx';
import SocialLinks from './SocialLinks.jsx';
import ProfilePhoto from './profilePhoto/ProfilePhoto.jsx';
import Projects from './projects/Projects.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      appData: [],
    }
    this.makeColors = this.makeColors.bind(this);
    this.getTheProjects = this.getTheProjects.bind(this);
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
  makeColors() {
    this.randBackgroundColor('body');
    this.randBackgroundColor('.randColor');
  }

  /* API CALL FOR ALL DATA */
  getTheProjects() {
    var query = `query {
      getProjects {
          id
          name
          github
          deployedUrl
          description
          media
        }
      }`;

    fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query
      })
    })
      .then(r => r.json())
      .then(data => {
        this.setState({
          appData: data.data.getProjects
        })
      })
      .then(() => {
        this.randBackgroundColor('body');
        this.randBackgroundColor('.randColor');
      });
  }

  componentDidMount() {
    this.getTheProjects();
  }

  render() {
    return (
      <div className={styles.container}>
        <Header styles={styles} />
        <ProfilePhoto styles={styles} />
        <SocialLinks styles={styles} />
        <div className={`${styles.boxes} randColor`}>
          Box on
        </div>
        <Projects
          styles={styles}
          appData={this.state.appData}
        />
        <div className={`${styles.boxes} randColor`}>
          <button onClick={this.makeColors}>test</button>
        </div>
        <div className={`${styles.boxes} randColor`}>
          contact:
        </div>

      </div>


    )
  }
}

export default App;