"use client"
import React, { useState, useEffect } from 'react';

const Page = () => {
  const [content, setContent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContent(
        <div>
          <h1>Dashboard users page</h1>
          <ul>
            <li>
              <a href="/dashboard/users/1">User 1</a>
            </li>
            <li>
              <a href="/dashboard/users/2">User 2</a>
            </li>
            <li>
              <a href="/dashboard/users/3">User 3</a>
            </li>
          </ul>
        </div>
      );
    }, 1000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return content;
};

export default Page;