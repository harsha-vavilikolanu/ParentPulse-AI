import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '../components/ui/GlassCard';
import { useStore } from '../store/useStore';
import { Wallet, IndianRupee, Clock, ArrowDownToLine, ReceiptText, ShieldCheck } from 'lucide-react';

const Finance = () => {
  const { studentData } = useStore();

  if (!studentData) return <div className="p-8 text-center text-slate-500">Loading financial data...</div>;

  const data = studentData.fees;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-8"
    >
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Financial Information</h1>
        <p className="text-slate-500 mt-1">Manage fee payments and view transaction history.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <GlassCard className="col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-br from-primary to-primary/80 text-white border-none flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-white/80 font-medium">Total Pending Dues</h3>
              <span className="bg-red-500/20 text-red-100 text-xs font-semibold px-2.5 py-1 rounded-full border border-red-500/30 backdrop-blur-sm">
                Due by {data.dueDate}
              </span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <IndianRupee className="w-8 h-8 opacity-80" />
              <h2 className="text-5xl font-bold">{data.due.toLocaleString('en-IN')}</h2>
            </div>
          </div>
          <div className="mt-8 flex gap-3">
            <button className="bg-white text-primary px-6 py-2.5 rounded-lg font-bold hover:bg-white/90 transition-colors shadow-lg active:scale-95">
              Pay Now
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-lg font-medium transition-colors border border-white/20">
              Download Invoice
            </button>
          </div>
        </GlassCard>

        <GlassCard className="flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
            </div>
            <h3 className="text-slate-500 text-sm font-medium mb-1">Total Fee Paid</h3>
            <div className="flex items-center gap-1">
              <IndianRupee className="w-5 h-5 text-slate-800" />
              <span className="text-2xl font-bold text-slate-800">{data.paid.toLocaleString('en-IN')}</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 text-sm">
            <span className="text-emerald-600 font-medium">{Math.round((data.paid / data.total) * 100)}%</span> of total fee cleared
          </div>
        </GlassCard>

        <GlassCard className="flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <Wallet className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="text-slate-500 text-sm font-medium mb-1">Total Academic Fee</h3>
            <div className="flex items-center gap-1">
              <IndianRupee className="w-5 h-5 text-slate-800" />
              <span className="text-2xl font-bold text-slate-800">{data.total.toLocaleString('en-IN')}</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 text-sm text-slate-500">
            For academic year 2025-26
          </div>
        </GlassCard>
      </div>

      <div >
        <GlassCard>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <ReceiptText className="w-5 h-5 text-primary" />
              Transaction History
            </h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-3 px-4 font-semibold text-sm text-slate-600">Date</th>
                  <th className="py-3 px-4 font-semibold text-sm text-slate-600">Amount</th>
                  <th className="py-3 px-4 font-semibold text-sm text-slate-600">Method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {data.history.map((txn, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="text-sm text-slate-500 flex items-center gap-1 mt-1"><Clock className="w-3 h-3"/> {txn.date}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-bold text-slate-800 flex items-center">
                        <IndianRupee className="w-3.5 h-3.5 mr-0.5" />{txn.amount.toLocaleString('en-IN')}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-slate-500">{txn.method}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>
    </motion.div>
  );
};

export default Finance;
