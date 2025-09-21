import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings, Users, FileText, Calendar, BookOpen, MessageCircle } from 'lucide-react';

const Admin = () => {
  useEffect(() => {
    // Check if Netlify Identity is available
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', user => {
            console.log('Welcome back!', user);
          });
        }
      });
    }
  }, []);

  const adminFeatures = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Kelola Tugas",
      description: "Tambah, edit, dan hapus tugas mahasiswa",
      link: "/admin/#/collections/tasks",
      color: "bg-blue-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Kelola Kelompok",
      description: "Atur informasi kelompok mata kuliah",
      link: "/admin/#/collections/groups",
      color: "bg-green-500"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Daftar Tugas",
      description: "Lihat semua tugas dalam format list",
      link: "/admin/#/collections/pages/entries/tasks_list",
      color: "bg-purple-500"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Daftar Kelompok",
      description: "Lihat semua kelompok mata kuliah",
      link: "/admin/#/collections/pages/entries/groups_list",
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Admin Panel
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kelola konten website manajemen tugas mahasiswa dengan mudah melalui Netlify CMS
          </p>
        </motion.div>

        {/* Admin Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {adminFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`${feature.color} text-white p-3 rounded-lg mr-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <a
                  href={feature.link}
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Kelola
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Ringkasan Konten
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-gray-600">Total Tugas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">2</div>
              <div className="text-gray-600">Total Kelompok</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
              <div className="text-gray-600">Total Konten</div>
            </div>
          </div>
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white mt-8"
        >
          <h3 className="text-xl font-semibold mb-4">
            🚀 Cara Menggunakan Admin Panel
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Untuk Admin:</h4>
              <ul className="space-y-1">
                <li>• Klik tombol "Kelola" pada fitur yang diinginkan</li>
                <li>• Login dengan akun Netlify Identity</li>
                <li>• Tambah, edit, atau hapus konten sesuai kebutuhan</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Fitur Yang Tersedia:</h4>
              <ul className="space-y-1">
                <li>• Editorial workflow untuk review konten</li>
                <li>• Preview real-time sebelum publish</li>
                <li>• Version control dengan Git</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Admin;
