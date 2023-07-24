
import React, {useContext, useState} from "react";
import {LocalContext} from '../../Context'

export default function PostComment({pageId, comments, onPostComment}) {
  const [content, setContent] = useState("");
  const [inProgress, setInProgress] = useState(null);
  const [setItem, getItem] = useContext(LocalContext);
  
  async function handlePost() {
    const comment = {
      content: content
    };
    setInProgress(true)
    const response = await fetch(
        "http://localhost:1337/api/comment-manager/comments/" + pageId,
        {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + getItem().jwt
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(comment),
        }
    );
    setInProgress(false)
    if (response.status === 200) {
        setContent("")
        onPostComment()
    }
  }
  
  return (

        <div className="max-w-2xl px-4 mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900 lg:text-2xl dark:text-white">
              {" "}
              Leave your comment
            </h2>
          </div>
          <div className="mb-6">
            <div className="px-4 py-2 mb-4 bg-white border border-gray-500 rounded-lg rounded-t-lg dark:bg-gray-800 dark:border-gray-700">
              <label for="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows="6"
                className="w-full px-0 text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..."
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
              <div className="text-right">
                  <button
                      type="submit"
                      className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-[#BF9270]  rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 "
                      onClick={handlePost}
                      disabled={inProgress}
                  >
                      Post comment
                  </button>
              </div>
          </div>
        </div>
     

  );
}
