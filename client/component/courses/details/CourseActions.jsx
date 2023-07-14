import React from 'react';
import Image from 'next/image';

import dislike from '@public/assets/icons/dislike.png';
import like from '@public/assets/icons/like.png';

const postLikes = async (commentId) => {
  const res = await fetch(
    `http://localhost:4000/api/comment/${commentId}/like`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }
  );

  const response = await res.json();

  if (response.status === 200) {
    window.location.reload();
  }
};

const postDislikes = async (commentId) => {
  const res = await fetch(
    `http://localhost:4000/api/comment/${commentId}/dislike`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }
  );

  const response = await res.json();

  if (response.status === 200) {
    window.location.reload();
  }
};

function CourseActions({ className, comment }) {
  console.log(comment)
  return (
    <div className={`flex gap-lg ${className}`}>
      <button className="flex align-y" onClick={() => postLikes(comment._id)}>
        <Image src={like} alt="like button" />
        <span>{comment.likes.length === 0 ? '' : comment.likes.length}</span>
      </button>

      <button
        className="flex align-y"
        onClick={() => postDislikes(comment._id)}
      >
        <Image src={dislike} alt="dislike button" />
        <span>{comment.dislikes.length === 0 ? '' : comment.dislikes.length}</span>
      </button>
    </div>
  );
}

export default CourseActions;
