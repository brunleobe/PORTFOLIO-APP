import React from 'react';

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
