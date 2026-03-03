import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, User, ArrowRight, Github, Chrome } from 'lucide-react';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#1a1a1a] flex items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Background Accents */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100/50 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-50/50 blur-[120px] rounded-full" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md z-10"
      >
        <div className="bg-white border border-black/5 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.h1 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="text-3xl font-bold tracking-tight mb-2 text-black"
            >
              {isLogin ? 'Bem-vindo de volta' : 'Criar conta'}
            </motion.h1>
            <p className="text-black/40 text-sm">
              {isLogin 
                ? 'Entre com suas credenciais para acessar o Artemis-III' 
                : 'Junte-se a nós e comece sua jornada hoje'}
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div className="space-y-1">
                <label className="text-xs font-semibold text-black/40 uppercase tracking-wider ml-1">Nome Completo</label>
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/20 group-focus-within:text-indigo-600 transition-colors" />
                  <input 
                    type="text" 
                    placeholder="Seu nome"
                    className="w-full bg-black/[0.02] border border-black/5 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-indigo-500/30 focus:ring-4 focus:ring-indigo-500/5 transition-all placeholder:text-black/20"
                  />
                </div>
              </div>
            )}

            <div className="space-y-1">
              <label className="text-xs font-semibold text-black/40 uppercase tracking-wider ml-1">E-mail</label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/20 group-focus-within:text-indigo-600 transition-colors" />
                <input 
                  type="email" 
                  placeholder="nome@exemplo.com"
                  className="w-full bg-black/[0.02] border border-black/5 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-indigo-500/30 focus:ring-4 focus:ring-indigo-500/5 transition-all placeholder:text-black/20"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-semibold text-black/40 uppercase tracking-wider">Senha</label>
                {isLogin && (
                  <button type="button" className="text-[10px] text-indigo-600 hover:text-indigo-700 transition-colors uppercase tracking-widest font-bold">
                    Esqueceu?
                  </button>
                )}
              </div>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/20 group-focus-within:text-indigo-600 transition-colors" />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-black/[0.02] border border-black/5 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-indigo-500/30 focus:ring-4 focus:ring-indigo-500/5 transition-all placeholder:text-black/20"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-black text-white font-bold py-3 rounded-xl hover:bg-black/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-6 group shadow-lg shadow-black/5"
            >
              {isLogin ? 'Entrar' : 'Cadastrar'}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-black/5"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-black/20 tracking-widest font-medium">Ou continue com</span>
            </div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 bg-white border border-black/5 rounded-xl py-2.5 hover:bg-black/[0.02] transition-colors text-sm font-medium shadow-sm">
              <Chrome className="w-4 h-4 text-red-500" />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 bg-white border border-black/5 rounded-xl py-2.5 hover:bg-black/[0.02] transition-colors text-sm font-medium shadow-sm">
              <Github className="w-4 h-4" />
              GitHub
            </button>
          </div>

          {/* Footer Toggle */}
          <p className="text-center mt-8 text-sm text-black/40">
            {isLogin ? 'Não tem uma conta?' : 'Já possui uma conta?'}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-black font-semibold hover:underline transition-all"
            >
              {isLogin ? 'Criar agora' : 'Entrar agora'}
            </button>
          </p>
        </div>
        
        {/* Branding Footer */}
        <div className="mt-8 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-black/20 font-bold">
            Artemis-III &copy; 2026 &bull; Secure Access
          </p>
        </div>
      </motion.div>
    </div>
  );
}
