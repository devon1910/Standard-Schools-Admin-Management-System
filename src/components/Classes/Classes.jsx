import React, { useState } from 'react';

const classData = [
  // Pre-Nursery Classes
  { 
    id: 1, 
    name: 'Pre-Nursery A', 
    level: 'Pre-Nursery', 
    section: 'A', 
    capacity: 20, 
    currentStudents: 18,
    teacher: {
      id: 1,
      name: 'Grace Adebayo',
      photo: 'https://ui-avatars.com/api/?name=Grace+Adebayo&background=f0a150&color=fff',
      email: 'grace.a@school.com',
      phone: '+234 801 234 5678'
    }
  },
  { 
    id: 2, 
    name: 'Pre-Nursery B', 
    level: 'Pre-Nursery', 
    section: 'B', 
    capacity: 20, 
    currentStudents: 16,
    teacher: {
      id: 2,
      name: 'Blessing Okafor',
      photo: 'https://ui-avatars.com/api/?name=Blessing+Okafor&background=f0a150&color=fff',
      email: 'blessing.o@school.com',
      phone: '+234 802 345 6789'
    }
  },
  { 
    id: 3, 
    name: 'Pre-Nursery C', 
    level: 'Pre-Nursery', 
    section: 'C', 
    capacity: 20, 
    currentStudents: 19,
    teacher: {
      id: 3,
      name: 'Fatima Ibrahim',
      photo: 'https://ui-avatars.com/api/?name=Fatima+Ibrahim&background=f0a150&color=fff',
      email: 'fatima.i@school.com',
      phone: '+234 803 456 7890'
    }
  },

  // Nursery1 Classes
  { 
    id: 4, 
    name: 'Nursery1 A', 
    level: 'Nursery', 
    section: 'A', 
    capacity: 22, 
    currentStudents: 20,
    teacher: {
      id: 4,
      name: 'Chioma Eze',
      photo: 'https://ui-avatars.com/api/?name=Chioma+Eze&background=f0a150&color=fff',
      email: 'chioma.e@school.com',
      phone: '+234 804 567 8901'
    }
  },
  { 
    id: 5, 
    name: 'Nursery1 B', 
    level: 'Nursery', 
    section: 'B', 
    capacity: 22, 
    currentStudents: 21,
    teacher: {
      id: 5,
      name: 'Amina Yusuf',
      photo: 'https://ui-avatars.com/api/?name=Amina+Yusuf&background=f0a150&color=fff',
      email: 'amina.y@school.com',
      phone: '+234 805 678 9012'
    }
  },
  { 
    id: 6, 
    name: 'Nursery1 C', 
    level: 'Nursery', 
    section: 'C', 
    capacity: 22, 
    currentStudents: 18,
    teacher: {
      id: 6,
      name: 'Patience Okoro',
      photo: 'https://ui-avatars.com/api/?name=Patience+Okoro&background=f0a150&color=fff',
      email: 'patience.o@school.com',
      phone: '+234 806 789 0123'
    }
  },

  // Nursery2 Classes
  { 
    id: 7, 
    name: 'Nursery2 A', 
    level: 'Nursery', 
    section: 'A', 
    capacity: 25, 
    currentStudents: 23,
    teacher: {
      id: 7,
      name: 'Jennifer Udoh',
      photo: 'https://ui-avatars.com/api/?name=Jennifer+Udoh&background=f0a150&color=fff',
      email: 'jennifer.u@school.com',
      phone: '+234 807 890 1234'
    }
  },
  { 
    id: 8, 
    name: 'Nursery2 B', 
    level: 'Nursery', 
    section: 'B', 
    capacity: 25, 
    currentStudents: 24,
    teacher: {
      id: 8,
      name: 'Maryam Hassan',
      photo: 'https://ui-avatars.com/api/?name=Maryam+Hassan&background=f0a150&color=fff',
      email: 'maryam.h@school.com',
      phone: '+234 808 901 2345'
    }
  },
  { 
    id: 9, 
    name: 'Nursery2 C', 
    level: 'Nursery', 
    section: 'C', 
    capacity: 25, 
    currentStudents: 22,
    teacher: {
      id: 9,
      name: 'Victoria Nwosu',
      photo: 'https://ui-avatars.com/api/?name=Victoria+Nwosu&background=f0a150&color=fff',
      email: 'victoria.n@school.com',
      phone: '+234 809 012 3456'
    }
  },

  // Nursery3 Classes
  { 
    id: 10, 
    name: 'Nursery3 A', 
    level: 'Nursery', 
    section: 'A', 
    capacity: 25, 
    currentStudents: 24,
    teacher: {
      id: 10,
      name: 'Ruth Adamu',
      photo: 'https://ui-avatars.com/api/?name=Ruth+Adamu&background=f0a150&color=fff',
      email: 'ruth.a@school.com',
      phone: '+234 810 123 4567'
    }
  },
  { 
    id: 11, 
    name: 'Nursery3 B', 
    level: 'Nursery', 
    section: 'B', 
    capacity: 25, 
    currentStudents: 23,
    teacher: {
      id: 11,
      name: 'Esther Emeka',
      photo: 'https://ui-avatars.com/api/?name=Esther+Emeka&background=f0a150&color=fff',
      email: 'esther.e@school.com',
      phone: '+234 811 234 5678'
    }
  },
  { 
    id: 12, 
    name: 'Nursery3 C', 
    level: 'Nursery', 
    section: 'C', 
    capacity: 25, 
    currentStudents: 25,
    teacher: {
      id: 12,
      name: 'Zainab Aliyu',
      photo: 'https://ui-avatars.com/api/?name=Zainab+Aliyu&background=f0a150&color=fff',
      email: 'zainab.a@school.com',
      phone: '+234 812 345 6789'
    }
  },

  // Basic1 Classes
  { 
    id: 13, 
    name: 'Basic1 A', 
    level: 'Basic', 
    section: 'A', 
    capacity: 30, 
    currentStudents: 28,
    teacher: {
      id: 13,
      name: 'Sarah Johnson',
      photo: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=f0a150&color=fff',
      email: 'sarah.j@school.com',
      phone: '+234 813 456 7890'
    }
  },
  { 
    id: 14, 
    name: 'Basic1 B', 
    level: 'Basic', 
    section: 'B', 
    capacity: 30, 
    currentStudents: 29,
    teacher: {
      id: 14,
      name: 'Michael Brown',
      photo: 'https://ui-avatars.com/api/?name=Michael+Brown&background=f0a150&color=fff',
      email: 'michael.b@school.com',
      phone: '+234 814 567 8901'
    }
  },
  { 
    id: 15, 
    name: 'Basic1 C', 
    level: 'Basic', 
    section: 'C', 
    capacity: 30, 
    currentStudents: 27,
    teacher: {
      id: 15,
      name: 'Funmi Ogundimu',
      photo: 'https://ui-avatars.com/api/?name=Funmi+Ogundimu&background=f0a150&color=fff',
      email: 'funmi.o@school.com',
      phone: '+234 815 678 9012'
    }
  },

  // Basic2 Classes
  { 
    id: 16, 
    name: 'Basic2 A', 
    level: 'Basic', 
    section: 'A', 
    capacity: 30, 
    currentStudents: 30,
    teacher: {
      id: 16,
      name: 'James Okoye',
      photo: 'https://ui-avatars.com/api/?name=James+Okoye&background=f0a150&color=fff',
      email: 'james.o@school.com',
      phone: '+234 816 789 0123'
    }
  },
  { 
    id: 17, 
    name: 'Basic2 B', 
    level: 'Basic', 
    section: 'B', 
    capacity: 30, 
    currentStudents: 26,
    teacher: {
      id: 17,
      name: 'Hadiza Mohammed',
      photo: 'https://ui-avatars.com/api/?name=Hadiza+Mohammed&background=f0a150&color=fff',
      email: 'hadiza.m@school.com',
      phone: '+234 817 890 1234'
    }
  },
  { 
    id: 18, 
    name: 'Basic2 C', 
    level: 'Basic', 
    section: 'C', 
    capacity: 30, 
    currentStudents: 28,
    teacher: {
      id: 18,
      name: 'Chinyere Agu',
      photo: 'https://ui-avatars.com/api/?name=Chinyere+Agu&background=f0a150&color=fff',
      email: 'chinyere.a@school.com',
      phone: '+234 818 901 2345'
    }
  },

  // Basic3 Classes
  { 
    id: 19, 
    name: 'Basic3 A', 
    level: 'Basic', 
    section: 'A', 
    capacity: 32, 
    currentStudents: 31,
    teacher: {
      id: 19,
      name: 'Taiwo Akinsola',
      photo: 'https://ui-avatars.com/api/?name=Taiwo+Akinsola&background=f0a150&color=fff',
      email: 'taiwo.a@school.com',
      phone: '+234 819 012 3456'
    }
  },
  { 
    id: 20, 
    name: 'Basic3 B', 
    level: 'Basic', 
    section: 'B', 
    capacity: 32, 
    currentStudents: 29,
    teacher: {
      id: 20,
      name: 'Kemi Adeyemi',
      photo: 'https://ui-avatars.com/api/?name=Kemi+Adeyemi&background=f0a150&color=fff',
      email: 'kemi.a@school.com',
      phone: '+234 820 123 4567'
    }
  },
  { 
    id: 21, 
    name: 'Basic3 C', 
    level: 'Basic', 
    section: 'C', 
    capacity: 32, 
    currentStudents: 30,
    teacher: {
      id: 21,
      name: 'Ibrahim Suleiman',
      photo: 'https://ui-avatars.com/api/?name=Ibrahim+Suleiman&background=f0a150&color=fff',
      email: 'ibrahim.s@school.com',
      phone: '+234 821 234 5678'
    }
  },

  // Basic4 Classes
  { 
    id: 22, 
    name: 'Basic4 A', 
    level: 'Basic', 
    section: 'A', 
    capacity: 32, 
    currentStudents: 32,
    teacher: {
      id: 22,
      name: 'Ngozi Okafor',
      photo: 'https://ui-avatars.com/api/?name=Ngozi+Okafor&background=f0a150&color=fff',
      email: 'ngozi.o@school.com',
      phone: '+234 822 345 6789'
    }
  },
  { 
    id: 23, 
    name: 'Basic4 B', 
    level: 'Basic', 
    section: 'B', 
    capacity: 32, 
    currentStudents: 28,
    teacher: {
      id: 23,
      name: 'Abubakar Garba',
      photo: 'https://ui-avatars.com/api/?name=Abubakar+Garba&background=f0a150&color=fff',
      email: 'abubakar.g@school.com',
      phone: '+234 823 456 7890'
    }
  },
  { 
    id: 24, 
    name: 'Basic4 C', 
    level: 'Basic', 
    section: 'C', 
    capacity: 32, 
    currentStudents: 31,
    teacher: {
      id: 24,
      name: 'Folake Adebisi',
      photo: 'https://ui-avatars.com/api/?name=Folake+Adebisi&background=f0a150&color=fff',
      email: 'folake.a@school.com',
      phone: '+234 824 567 8901'
    }
  },

  // Basic5 Classes
  { 
    id: 25, 
    name: 'Basic5 A', 
    level: 'Basic', 
    section: 'A', 
    capacity: 32, 
    currentStudents: 30,
    teacher: {
      id: 25,
      name: 'Daniel Okechukwu',
      photo: 'https://ui-avatars.com/api/?name=Daniel+Okechukwu&background=f0a150&color=fff',
      email: 'daniel.o@school.com',
      phone: '+234 825 678 9012'
    }
  },
  { 
    id: 26, 
    name: 'Basic5 B', 
    level: 'Basic', 
    section: 'B', 
    capacity: 32, 
    currentStudents: 29,
    teacher: {
      id: 26,
      name: 'Rashida Bello',
      photo: 'https://ui-avatars.com/api/?name=Rashida+Bello&background=f0a150&color=fff',
      email: 'rashida.b@school.com',
      phone: '+234 826 789 0123'
    }
  },
  { 
    id: 27, 
    name: 'Basic5 C', 
    level: 'Basic', 
    section: 'C', 
    capacity: 32, 
    currentStudents: 31,
    teacher: {
      id: 27,
      name: 'Precious Nnamdi',
      photo: 'https://ui-avatars.com/api/?name=Precious+Nnamdi&background=f0a150&color=fff',
      email: 'precious.n@school.com',
      phone: '+234 827 890 1234'
    }
  },

  // J.S.S.1 Classes
  { 
    id: 28, 
    name: 'J.S.S.1 A', 
    level: 'J.S.S', 
    section: 'A', 
    capacity: 35, 
    currentStudents: 33,
    teacher: {
      id: 28,
      name: 'Godwin Ekpe',
      photo: 'https://ui-avatars.com/api/?name=Godwin+Ekpe&background=f0a150&color=fff',
      email: 'godwin.e@school.com',
      phone: '+234 828 901 2345'
    }
  },
  { 
    id: 29, 
    name: 'J.S.S.1 B', 
    level: 'J.S.S', 
    section: 'B', 
    capacity: 35, 
    currentStudents: 32,
    teacher: {
      id: 29,
      name: 'Hauwa Abdullahi',
      photo: 'https://ui-avatars.com/api/?name=Hauwa+Abdullahi&background=f0a150&color=fff',
      email: 'hauwa.a@school.com',
      phone: '+234 829 012 3456'
    }
  },
  { 
    id: 30, 
    name: 'J.S.S.1 C', 
    level: 'J.S.S', 
    section: 'C', 
    capacity: 35, 
    currentStudents: 34,
    teacher: {
      id: 30,
      name: 'Tunde Oladele',
      photo: 'https://ui-avatars.com/api/?name=Tunde+Oladele&background=f0a150&color=fff',
      email: 'tunde.o@school.com',
      phone: '+234 830 123 4567'
    }
  },

  // J.S.S.2 Classes
  { 
    id: 31, 
    name: 'J.S.S.2 A', 
    level: 'J.S.S', 
    section: 'A', 
    capacity: 35, 
    currentStudents: 35,
    teacher: {
      id: 31,
      name: 'Mercy Okonkwo',
      photo: 'https://ui-avatars.com/api/?name=Mercy+Okonkwo&background=f0a150&color=fff',
      email: 'mercy.o@school.com',
      phone: '+234 831 234 5678'
    }
  },
  { 
    id: 32, 
    name: 'J.S.S.2 B', 
    level: 'J.S.S', 
    section: 'B', 
    capacity: 35, 
    currentStudents: 31,
    teacher: {
      id: 32,
      name: 'Yakubu Tanko',
      photo: 'https://ui-avatars.com/api/?name=Yakubu+Tanko&background=f0a150&color=fff',
      email: 'yakubu.t@school.com',
      phone: '+234 832 345 6789'
    }
  },
  { 
    id: 33, 
    name: 'J.S.S.2 C', 
    level: 'J.S.S', 
    section: 'C', 
    capacity: 35, 
    currentStudents: 33,
    teacher: {
      id: 33,
      name: 'Olumide Fagbemi',
      photo: 'https://ui-avatars.com/api/?name=Olumide+Fagbemi&background=f0a150&color=fff',
      email: 'olumide.f@school.com',
      phone: '+234 833 456 7890'
    }
  },

  // J.S.S.3 Classes
  { 
    id: 34, 
    name: 'J.S.S.3 A', 
    level: 'J.S.S', 
    section: 'A', 
    capacity: 35, 
    currentStudents: 32,
    teacher: {
      id: 34,
      name: 'Adunni Lawal',
      photo: 'https://ui-avatars.com/api/?name=Adunni+Lawal&background=f0a150&color=fff',
      email: 'adunni.l@school.com',
      phone: '+234 834 567 8901'
    }
  },
  { 
    id: 35, 
    name: 'J.S.S.3 B', 
    level: 'J.S.S', 
    section: 'B', 
    capacity: 35, 
    currentStudents: 34,
    teacher: {
      id: 35,
      name: 'Usman Dikko',
      photo: 'https://ui-avatars.com/api/?name=Usman+Dikko&background=f0a150&color=fff',
      email: 'usman.d@school.com',
      phone: '+234 835 678 9012'
    }
  },
  { 
    id: 36, 
    name: 'J.S.S.3 C', 
    level: 'J.S.S', 
    section: 'C', 
    capacity: 35, 
    currentStudents: 33,
    teacher: {
      id: 36,
      name: 'Chinelo Ugwu',
      photo: 'https://ui-avatars.com/api/?name=Chinelo+Ugwu&background=f0a150&color=fff',
      email: 'chinelo.u@school.com',
      phone: '+234 836 789 0123'
    }
  },

  // S.S.S.1 Classes
  { 
    id: 37, 
    name: 'S.S.S.1 A', 
    level: 'S.S.S', 
    section: 'A', 
    capacity: 35, 
    currentStudents: 34,
    teacher: {
      id: 37,
      name: 'Emily Davis',
      photo: 'https://ui-avatars.com/api/?name=Emily+Davis&background=f0a150&color=fff',
      email: 'emily.d@school.com',
      phone: '+234 837 890 1234'
    }
  },
  { 
    id: 38, 
    name: 'S.S.S.1 B', 
    level: 'S.S.S', 
    section: 'B', 
    capacity: 35, 
    currentStudents: 30,
    teacher: {
      id: 38,
      name: 'Segun Adesanya',
      photo: 'https://ui-avatars.com/api/?name=Segun+Adesanya&background=f0a150&color=fff',
      email: 'segun.a@school.com',
      phone: '+234 838 901 2345'
    }
  },
  { 
    id: 39, 
    name: 'S.S.S.1 C', 
    level: 'S.S.S', 
    section: 'C', 
    capacity: 35, 
    currentStudents: 32,
    teacher: {
      id: 39,
      name: 'Aisha Umar',
      photo: 'https://ui-avatars.com/api/?name=Aisha+Umar&background=f0a150&color=fff',
      email: 'aisha.u@school.com',
      phone: '+234 839 012 3456'
    }
  },

  // S.S.S.2 Classes
  { 
    id: 40, 
    name: 'S.S.S.2 A', 
    level: 'S.S.S', 
    section: 'A', 
    capacity: 35, 
    currentStudents: 33,
    teacher: {
      id: 40,
      name: 'Bode Ajayi',
      photo: 'https://ui-avatars.com/api/?name=Bode+Ajayi&background=f0a150&color=fff',
      email: 'bode.a@school.com',
      phone: '+234 840 123 4567'
    }
  },
  { 
    id: 41, 
    name: 'S.S.S.2 B', 
    level: 'S.S.S', 
    section: 'B', 
    capacity: 35, 
    currentStudents: 31,
    teacher: {
      id: 41,
      name: 'Nkechi Onyeka',
      photo: 'https://ui-avatars.com/api/?name=Nkechi+Onyeka&background=f0a150&color=fff',
      email: 'nkechi.o@school.com',
      phone: '+234 841 234 5678'
    }
  },
  { 
    id: 42, 
    name: 'S.S.S.2 C', 
    level: 'S.S.S', 
    section: 'C', 
    capacity: 35, 
    currentStudents: 35,
    teacher: {
      id: 42,
      name: 'Musa Abdulkarim',
      photo: 'https://ui-avatars.com/api/?name=Musa+Abdulkarim&background=f0a150&color=fff',
      email: 'musa.a@school.com',
      phone: '+234 842 345 6789'
    }
  },

  // S.S.S.3 Classes
  { 
    id: 43, 
    name: 'S.S.S.3 A', 
    level: 'S.S.S', 
    section: 'A', 
    capacity: 35, 
    currentStudents: 32,
    teacher: {
      id: 43,
      name: 'Stella Nwankwo',
      photo: 'https://ui-avatars.com/api/?name=Stella+Nwankwo&background=f0a150&color=fff',
      email: 'stella.n@school.com',
      phone: '+234 843 456 7890'
    }
  },
  { 
    id: 44, 
    name: 'S.S.S.3 B', 
    level: 'S.S.S', 
    section: 'B', 
    capacity: 35, 
    currentStudents: 29,
    teacher: {
      id: 44,
      name: 'Ahmed Balarabe',
      photo: 'https://ui-avatars.com/api/?name=Ahmed+Balarabe&background=f0a150&color=fff',
      email: 'ahmed.b@school.com',
      phone: '+234 844 567 8901'
    }
  },
  { 
    id: 45, 
    name: 'S.S.S.3 C', 
    level: 'S.S.S', 
    section: 'C', 
    capacity: 35, 
    currentStudents: 34,
    teacher: {
      id: 45,
      name: 'Comfort Adeolu',
      photo: 'https://ui-avatars.com/api/?name=Comfort+Adeolu&background=f0a150&color=fff',
      email: 'comfort.a@school.com',
      phone: '+234 845 678 9012'
    }
  }
];
const Classes = () => {
  const [classes, setClasses] = useState(classData);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClass, setEditingClass] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    level: 'Basic',
    section: 'A',
    capacity: 30,
    teacher: {
      name: '',
      email: '',
      phone: '',
      photo: ''
    }
  });

  const levels = ['Basic', 'S.S.S'];
  const sections = ['A', 'B', 'C'];

  const handleOpenModal = (classData = null) => {
    if (classData) {
      setEditingClass(classData);
      setFormData(classData);
    } else {
      setEditingClass(null);
      setFormData({
        name: '',
        level: 'Basic',
        section: 'A',
        capacity: 30,
        teacher: {
          name: '',
          email: '',
          phone: '',
          photo: ''
        }
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingClass(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('teacher.')) {
      const teacherField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        teacher: {
          ...prev.teacher,
          [teacherField]: value,
          photo: teacherField === 'name' 
            ? `https://ui-avatars.com/api/?name=${value.replace(' ', '+')}&background=f0a150&color=fff`
            : prev.teacher.photo
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
        name: name === 'level' || name === 'section' 
          ? `${value}${name === 'level' ? formData.section : formData.level}`
          : prev.name
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingClass) {
      setClasses(prev => prev.map(c => 
        c.id === editingClass.id ? { ...formData, id: c.id } : c
      ));
    } else {
      setClasses(prev => [...prev, { ...formData, id: Date.now() }]);
    }
    handleCloseModal();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this class?')) {
      setClasses(prev => prev.filter(c => c.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Class Management</h1>
        <button
          onClick={() => handleOpenModal()}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Add New Class
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Class Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Section</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Students</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {classes.map((classItem) => (
                <tr key={classItem.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{classItem.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{classItem.level}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{classItem.section}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        src={classItem.teacher.photo}
                        alt={classItem.teacher.name}
                        className="h-10 w-10 rounded-full mr-3"
                      />
                      <div>
                        <div className="text-sm font-medium text-gray-900">{classItem.teacher.name}</div>
                        <div className="text-sm text-gray-500">{classItem.teacher.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{classItem.capacity}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{classItem.currentStudents}</td>
                  <td className="px-6 py-4 whitespace-nowrap space-x-2">
                    <button
                      onClick={() => handleOpenModal(classItem)}
                      className="text-primary hover:text-primary/80"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(classItem.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">
              {editingClass ? 'Edit Class' : 'Add New Class'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Level</label>
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                >
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Section</label>
                <select
                  name="section"
                  value={formData.section}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                >
                  {sections.map(section => (
                    <option key={section} value={section}>{section}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Capacity</label>
                <input
                  type="number"
                  name="capacity"
                  value={formData.capacity}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  min="1"
                />
              </div>

              {/* Teacher Information */}
              <div className="border-t pt-4 mt-4">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Teacher Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Teacher Name</label>
                    <input
                      type="text"
                      name="teacher.name"
                      value={formData.teacher.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      name="teacher.email"
                      value={formData.teacher.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      name="teacher.phone"
                      value={formData.teacher.phone}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                >
                  {editingClass ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Classes; 