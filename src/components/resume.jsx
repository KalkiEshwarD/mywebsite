import React, { Component } from 'react';
import Pdf from '../assets/resume.pdf';

class DownloadResume extends Component {

  render() {

    return (
        <div>
          <a href = {Pdf} target = "_blank" rel="noreferrer">Download Pdf</a>
        </div>
    );

  }
}

export default DownloadResume;