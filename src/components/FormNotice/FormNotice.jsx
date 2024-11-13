import React, { useState } from 'react';
import { createNotice } from '../../services/newsServices';

const NoticeForm = () => {
  const [title, setTitle] = useState(''); 
  const [sections, setSections] = useState([
    { subtitle: '', content: '' },
    { subtitle
: '', content: '' },
    { subtitle: '', content: '' },
    { subtitle: '', content: '' }
  ]);
  const [imageUrl, setImageUrl] = useState('');

  const handleSectionChange = (index, field, value) => {
    const updatedSections = [...sections];
    updatedSections[index][field] = value;
    setSections(updatedSections);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createNotice(title, sections, imageUrl); 
      // Limpiar

      setTitle('');
      setSections([
        { subtitle: '', content: '' },
        { subtitle: '', content: '' },
        { subtitle: '', content: '' },
        { subtitle: '', content: '' }
      ]);
      setImageUrl('');
      // Mostrar un mensaje de éxito al usuario (opcional)
      alert('Noticia creada con éxito!'); 
    } catch (error) {
      // Manejar el error, por ejemplo, mostrar un mensaje al usuario
      console.error('Error al crear la noticia:', error);
      alert('Error al crear la noticia. Por favor, intenta de nuevo.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Título principal:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="imageUrl">URL de la imagen:</label>
        <input
          type="
text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      {sections.map((section, index) => (
        <div key={index}>
          <label htmlFor={`subtitle-${index}`}>Subtítulo {index + 1}:</label>
          <input
            type="text"
            id={`subtitle-${index}`}
            value={section.subtitle}
            onChange={(e) => handleSectionChange(index, 'subtitle', e.target.value)}
          />
          <label htmlFor={`content-${index}`}>Contenido {index + 1}:</label>
          <textarea
            id={`content-${index}`}
            value={section.content}
            onChange={(e) => handleSectionChange(index, 'content', e.target.value)}
          />
        </div>
      ))}
      <button type="submit">Crear Noticia</button>
    </form>
  );
};

export default NoticeForm;
