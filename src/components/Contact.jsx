import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-textMain">Let's Connect</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-textMuted text-lg">Have a project in mind or just want to say hi? I'd love to hear from you.</p>
        </div>

        {/* Direct contact options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <a
            href={`mailto:${portfolioData.personalInfo.email}`}
            className="glass-card flex items-center gap-4 hover:border-primary-500/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary-600/10 flex items-center justify-center group-hover:bg-primary-600/20 transition-colors">
              <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-textMuted">Email me</p>
              <p className="text-textMain font-medium">{portfolioData.personalInfo.email}</p>
            </div>
          </a>

          <a
            href={portfolioData.personalInfo.whatsapp || "https://wa.me/YOUR_NUMBER"}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card flex items-center gap-4 hover:border-green-500/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-green-600/10 flex items-center justify-center group-hover:bg-green-600/20 transition-colors">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-textMuted">WhatsApp</p>
              <p className="text-textMain font-medium">Send a message</p>
            </div>
          </a>
        </div>

        <form className="glass-card flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm text-textMuted mb-2 font-medium">Name</label>
              <input
                type="text"
                placeholder="noobmaster69"
                className="bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 rounded-xl px-4 py-3 text-textMain focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-textMuted/50"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-textMuted mb-2 font-medium">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 rounded-xl px-4 py-3 text-textMain focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-textMuted/50"
                required
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-textMuted mb-2 font-medium">Message</label>
            <textarea
              placeholder="Your message here..."
              rows="5"
              className="bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 rounded-xl px-4 py-3 text-textMain focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-y placeholder:text-textMuted/50"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 mt-2"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
