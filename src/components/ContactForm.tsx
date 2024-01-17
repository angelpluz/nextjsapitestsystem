import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from '../styles/ContactPage.module.css'; // Make sure the path is correct

interface FormData {
  name: string;
  email: string;
  phone: string;
  type: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    type: '',
  });
  const [fileSets, setFileSets] = useState<File[][]>([[]]);
  const [fileNames, setFileNames] = useState<string[][]>([[]]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? Array.from(event.target.files) : [];
    setFileSets(prevFileSets => {
      const newFileSets = [...prevFileSets];
      newFileSets[index] = files;
      return newFileSets;
    });
    setFileNames(prevFileNames => {
      const newFileNames = [...prevFileNames];
      newFileNames[index] = files.map(file => file.name);
      return newFileNames;
    });
  };

  const addImageSet = () => {
    setFileSets(prevFileSets => [...prevFileSets, []]);
    setFileNames(prevFileNames => [...prevFileNames, []]);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    fileSets.forEach((fileSet, index) => {
      fileSet.forEach((file) => {
        data.append(`images[]`, file);
      });
    });

    // Debugging: Console log the FormData values
    for (let pair of data.entries()) {
      console.log(`${pair[0]}:`, pair[1]);
    }

    try {
      const response = await fetch('http://toyotathonburi.co.th/api/contact', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('There was an error submitting the form:', error);
      alert(`Failed to submit the form. Error: ${error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" className={styles.formContainer}>
      {/* ... form fields ... */}
      <select name="type" value={formData.type} onChange={handleInputChange} required>
        <option value="">Select Type</option>
        <option value="promotion">Promotion</option>
        <option value="turn_car">Turn Car</option>
        <option value="check_distance">Check Distance</option>
        {/* Add other options as needed */}
      </select>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Name"
        required
      />
      
      {fileSets.map((fileSet, index) => (
        <div key={index} className={styles.fileInputContainer}>
          <input
            type="file"
            name={`images[]`}
            onChange={handleFileChange(index)}
            accept="image/*"
            multiple
            className={styles.formField}
          />
          <div className={styles.fileNameDisplay}>
            {fileNames[index] && fileNames[index].map((name, fileIndex) => (
              <span key={fileIndex} className={styles.fileName}>{name}</span>
            ))}
          </div>
        </div>
      ))}

      <button type="button" onClick={addImageSet} className={styles.addButton}>
        Add More Images
      </button>
      <button type="submit" className={styles.submitButton}>Submit</button>
    </form>
  );
}
