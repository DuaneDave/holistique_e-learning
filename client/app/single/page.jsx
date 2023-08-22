'use client';
import { useState, useRef } from 'react';

const id = '64e378259d8809e21599832e';

function page() {
  const [lesson, setLesson] = useState({
    lesson: '',
    title: '',
    video: '',
    duration: '',
  });

  const inputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('lesson', lesson.lesson);
    formData.append('title', lesson.title);
    formData.append('duration', lesson.duration);

    const videoFile = inputRef.current.files[0];
    formData.append('file', videoFile);

    await fetch(
      `https://holistique-e-learning.onrender.com/api/course/add-lesson/${id}`,
      {
        method: 'POST',
        body: formData,
      }
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginTop: '100px',
        marginInline: 'auto',
      }}
      encType="multipart/form-data"
    >
      <div>
        <label>lesson</label>
        <input
          type="text"
          placeholder="lesson number"
          onChange={(e) => setLesson({ ...lesson, lesson: e.target.value })}
        />

        <input
          type="text"
          placeholder="lesson title"
          onChange={(e) => setLesson({ ...lesson, title: e.target.value })}
        />

        <input type="file" name="file" ref={inputRef} />

        <input
          type="text"
          placeholder="lesson duration"
          onChange={(e) => setLesson({ ...lesson, duration: e.target.value })}
        />
      </div>

      <button type="submit">submit</button>
    </form>
  );
}

export default page;
