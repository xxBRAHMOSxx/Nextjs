"use client"
import React, { useState,useEffect, use } from 'react'

function layout({children}:{children:React.ReactNode}) {
  const [content, setContent] = useState<JSX.Element | null>(null);
  useEffect(() => {const timer = setTimeout(() => {
    setContent(
      <div>
              <h1>dashboard layout</h1>
          {children}
          </div>
    );
  }, 3000);

  // Cleanup the timer on component unmount
  return () => clearTimeout(timer);
}, []);

  return content
}

export default layout