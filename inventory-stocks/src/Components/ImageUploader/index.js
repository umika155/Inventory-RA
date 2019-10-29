import React, { Component } from 'react';
import firebase from '../../config/firebaseConfig'

class ImageUploader extends Component {
    constructor(props) {
      super(props);
      this.state = { file: '', imagePreview: '' };
  
      this.handlePreview = this.handlePreview.bind(this);
      this.handleUpload = this.handleUpload.bind(this);
    }
  
    handlePreview(file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        this.setState({
          file: file[0],
          imagePreview: reader.result,
        });
      };
      reader.readAsDataURL(file[0]);
    }
  
    handleUpload() {
      const storageRef = firebase.storage().ref();
      const uploadTask = storageRef
        .child(`productPictures/${this.state.file.name}`) //create a folder to store the images
        .put(this.state.file); //save the file in the folder with it's name
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          console.log(snapshot);
        },
        (error) => {},
        (success) => {
          console.log(uploadTask.snapshot.downloadURL);
        },
      );
    }
  
    render() {
      return (
        <div>
          <h2>Image Upload</h2>
            <div width="20%" height="20%">
            {this.state.imagePreview && <img src={this.state.imagePreview} />}
            </div>

          <input
            accept="image/*"
            multiple
            placeholder="ImageUpload"
            type="file"
            onChange={(event) => {
                          this.handlePreview(event.target.files);
                      }}
          />
  
          <button onClick={this.handleUpload}> Handle Upload </button>
        </div>
      );
    }
  }


  

  export default ImageUploader