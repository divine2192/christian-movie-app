import React, { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth, updateProfile } from "firebase/auth";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const storage = getStorage();
  const auth = getAuth();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    const storageRef = ref(storage, `profile_pictures/${auth.currentUser.uid}`);
    try {
      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);
      await updateProfile(auth.currentUser, { photoURL: downloadURL });
      setSuccess("Profile picture uploaded successfully.");
      setError("");
    } catch (err) {
      setError("Error uploading file: " + err.message);
      setSuccess("");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
      <div className="p-5 rounded bg-secondary">
        <h2 className="mb-4 text-center">Upload Profile Picture</h2>
        {error && <p className="text-danger text-center">{error}</p>}
        {success && <p className="text-success text-center">{success}</p>}
        <div className="mb-3">
          <input type="file" className="form-control" onChange={handleFileChange} />
        </div>
        <button className="btn btn-warning w-100" onClick={handleUpload}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default Upload;