'use client';
import { useState, useRef } from 'react';

function page() {
  const [lesson, setLesson] = useState({
    lesson: '',
    title: '',
    video: '',
    duration: '',
  });

  const [inputData, setInputData] = useState({
    title: '',
    total_lessons: '',
    duration: '',
    cover: '',
  });

  const inputRef = useRef();
  const coverRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', inputData.title);
    formData.append('total_lessons', inputData.total_lessons);
    formData.append('duration', inputData.duration);
    formData.append('cover', coverRef.current.files[0]);
    formData.append('lessons', JSON.stringify(lesson));
    formData.append('transcript', '');

    const videoFile = inputRef.current.files[0];
    formData.append('file', videoFile);

    console.log(formData);

    fetch('http://localhost:4000/api/course/create', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
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
        <label>title</label>
        <input
          type="text"
          name="title"
          onChange={(e) =>
            setInputData({ ...inputData, title: e.target.value })
          }
        />
      </div>
      <div>
        <label>total_lessons</label>
        <input
          type="text"
          name="total_lessons"
          onChange={(e) =>
            setInputData({ ...inputData, total_lessons: e.target.value })
          }
        />
      </div>
      <div>
        <label>duration</label>
        <input
          type="text"
          name="duration"
          onChange={(e) =>
            setInputData({ ...inputData, duration: e.target.value })
          }
        />
      </div>

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

      <div>
        <label>cover</label>
        <input
          type="file"
          name="cover"
          ref={coverRef}
        />
      </div>

      <button type="submit">submit</button>
    </form>
  );
}

export default page;
