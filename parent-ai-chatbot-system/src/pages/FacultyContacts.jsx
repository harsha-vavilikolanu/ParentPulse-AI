import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { mockStudentData } from '../data/mockData';
import { Users, Mail, Phone, MapPin, Search } from 'lucide-react';

const FacultyContacts = () => {
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setData(mockStudentData.contacts);
    }, 400);
  }, []);

  if (!data) return <div className="p-8 text-center text-slate-500">Loading directory...</div>;

  const filteredContacts = data.filter(contact => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    contact.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-8"
    >
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 flex items-center gap-3">
            <Users className="w-7 h-7 text-primary" />
            Faculty Directory
          </h1>
          <p className="text-slate-500 mt-2">Important university contacts associated with your child.</p>
        </div>
        
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search name, role, dept..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field pl-10 bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContacts.map((contact, idx) => (
          <GlassCard key={idx} className="flex flex-col h-full border-t-4 border-t-accent hover:shadow-xl transition-shadow cursor-default">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-800">{contact.name}</h3>
                <span className="inline-block mt-1 px-2.5 py-0.5 bg-primary/5 text-primary text-xs font-bold rounded-full border border-primary/10">
                  {contact.role}
                </span>
              </div>
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 border border-slate-200">
                <Users className="w-6 h-6" />
              </div>
            </div>
            
            <div className="space-y-3 mt-4 text-sm text-slate-600 flex-1">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Dept. of {contact.department}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors">{contact.email}</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a href={`tel:${contact.phone}`} className="hover:text-primary transition-colors">{contact.phone}</a>
              </div>
            </div>

            <button className="w-full mt-6 btn-outline py-2.5 text-sm">
              Schedule Appointment
            </button>
          </GlassCard>
        ))}
        
        {filteredContacts.length === 0 && (
          <div className="col-span-full py-12 text-center text-slate-500 bg-white rounded-2xl border border-slate-200 border-dashed">
            No contacts found matching your search.
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FacultyContacts;
