import React from 'react';



export default function Comment({
     username, date, content
}) {

  const currentDate = new Date(date);
  const formattedDate = currentDate.toLocaleString('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

    
   return (
    <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
        <footer className="flex items-center justify-between mb-2">
            <div className="flex items-center align-bottom">
                <p className="inline-flex items-center mr-3 text-lg text-gray-900 dark:text-white">{username}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                    <span>{formattedDate}</span></p>
            </div>


        </footer>
        <p className="text-gray-500 dark:text-gray-400">{content}</p>
        <div className="flex items-center mt-4 space-x-4">
            <button type="button"
                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
                <svg aria-hidden="true" className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                Reply
            </button>
        </div>
    </article>
   )
   
};
