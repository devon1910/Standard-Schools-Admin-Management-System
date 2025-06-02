import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { title: 'Dashboard', path: '/', icon: '📊' },
    { title: 'Students', path: '/students', icon: '👥' },
    { title: 'Classes', path: '/classes', icon: '🏫' },
    { title: 'Payments', path: '/payments', icon: '💰' },
    { title: 'Reports', path: '/reports', icon: '📈' },
  ];

  return (
    <div className="h-screen w-64 bg-white shadow-lg fixed left-0 top-0">
      <div className="p-4 bg-primary">
        <h1 className="text-2xl font-bold text-white">School Admin</h1>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-primary hover:text-white transition-colors"
          >
            <span className="mr-3">{item.icon}</span>
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar; 