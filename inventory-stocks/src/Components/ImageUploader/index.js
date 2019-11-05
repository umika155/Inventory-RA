import React, { Component } from "react";
import firebase, { fbConfig } from "../../config/firebaseConfig";
import { firestore } from "firebase";

class ImageUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      url: "",
      progress: 0
    };
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleUpload = () => {
    const { image } = this.state;
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef
      .child(`productPictures/${image.name}`) //create a folder to store the images
      .put(image); //save the file in the folder with it's name
    uploadTask.on(
      "state_changed",
      snapshot => {
        console.log(snapshot);
        // progress function ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        // Error function ...
        console.log(error);
      },
      success => {
        console.log("Uploaded! " + success);
        storageRef.child(`productPictures/${image.name}`).getDownloadURL()
        .then(url => {
            this.setState({ url });
            console.log('File available at', url);
            const user = 
            firebase.database().ref('users/' + user.user.uid + '/image').set(url);
        });
        // .then(url => {
        //     const imageUrl = url;
        //     const dbRef = firebase.database().ref().child(`productPictures/${image.name}`)
        //       return dbRef.push({ imageUrl });
        //     // const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${
        //     //                 firebase.storageBucket
        //     //                 }/o/${imageFileName}?alt=media`;
        //     // return db.doc(`/users/${req.user.handle}`).update({ imageUrl });
        // })
      }
    );
  };

  render() {
    return (
      <div>
        <h2>Image Upload</h2>
        <img
            src={this.state.url || "https://via.placeholder.com/400x300"}
            alt="Uploaded Images"
            height="300"
            width="400"
            hidden="true"
          />
        <div>
        <input
          accept="image/*"
          multiple
          placeholder="ImageUpload"
          type="file"
          onChange={this.handleChange}
        />
        </div>
        <div className="row">
          <progress
            value={this.state.progress}
            max="100"
            className="progress"
          />
          
        </div>
        <button onClick={this.handleUpload}> Upload </button>
      </div>
    );
  }
}

export default ImageUploader;
