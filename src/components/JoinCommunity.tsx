import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import logo from '/logo.png';

const JoinCommunity = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    community: '',
    description: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', community: '', description: '' });
  };

  return (
    <section id="apply" className="py-24 bg-gradient-to-br from-[#E91E63]/10 via-[#42A5F5]/10 to-[#F4B731]/10 dark:from-[#1a1a1a] dark:via-[#23272f] dark:to-[#222b1f] transition-colors duration-500">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <img src={logo} alt="Tech Communities Day Logo" className="h-14 w-auto mb-2 drop-shadow-lg" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Appel à candidatures :
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E91E63] via-[#42A5F5] to-[#F4B731]">Rejoignez la Foire des Communautés 2025</span>
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 max-w-2xl">
            Vous représentez une communauté tech, startup, design, IA, ou autre ? Candidatez pour exposer lors de la prochaine édition et bénéficiez d'une visibilité unique auprès de milliers de passionnés et partenaires.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 flex flex-col gap-6 border border-[#42A5F5]/20 dark:border-[#F4B731]/20">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Nom & Prénom</label>
              <input type="text" name="name" id="name" required value={form.name} onChange={handleChange} className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-[#42A5F5] focus:border-[#42A5F5]" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
              <input type="email" name="email" id="email" required value={form.email} onChange={handleChange} className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-[#42A5F5] focus:border-[#42A5F5]" />
            </div>
          </div>
          <div>
            <label htmlFor="community" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Nom de la communauté</label>
            <input type="text" name="community" id="community" required value={form.community} onChange={handleChange} className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-[#E91E63] focus:border-[#E91E63]" />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Description de la communauté</label>
            <textarea name="description" id="description" rows={3} required value={form.description} onChange={handleChange} className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-[#F4B731] focus:border-[#F4B731]" />
          </div>
          <button type="submit" className="w-full py-3 rounded-full bg-gradient-to-r from-[#E91E63] via-[#42A5F5] to-[#F4B731] text-white font-bold text-lg shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
            <span>Envoyer la candidature</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          {submitted && (
            <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400 font-semibold mt-2 animate-pulse">
              <CheckCircle className="w-5 h-5" />
              Candidature envoyée ! Merci, nous vous contacterons rapidement.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default JoinCommunity;