import React, { useEffect } from 'react';
import avatar from '../components/images/avatar.jpg'; // Đường dẫn tới hình ảnh của bạn

const SetFavicon = () => {
  useEffect(() => {
    const link = document.querySelector("link[rel~='icon']");
    if (!link) {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.href = avatar;
      document.head.appendChild(newLink);
    } else {
      link.href = avatar;
    }
  }, []);

  return null;
};

export default SetFavicon;
