
import React, { createContext, useContext, useState, useEffect } from 'react';

interface BookmarkItem {
  id: string;
  title: string;
  description: string;
  content: string;
  createdAt: Date;
}

interface BookmarkContextType {
  bookmarks: BookmarkItem[];
  addBookmark: (title: string, description: string, content: string) => void;
  removeBookmark: (id: string) => void;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
};

export const BookmarkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);

  useEffect(() => {
    const savedBookmarks = localStorage.getItem('volectro-bookmarks');
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('volectro-bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = (title: string, description: string, content: string) => {
    const newBookmark: BookmarkItem = {
      id: Date.now().toString(),
      title,
      description,
      content,
      createdAt: new Date()
    };
    setBookmarks(prev => [newBookmark, ...prev]);
  };

  const removeBookmark = (id: string) => {
    setBookmarks(prev => prev.filter(bookmark => bookmark.id !== id));
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark, removeBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};
