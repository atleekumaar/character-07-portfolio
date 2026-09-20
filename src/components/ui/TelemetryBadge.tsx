import React from 'react';

interface TelemetryBadgeProps {
  label: string;
  value?: string;
  status?: 'active' | 'success' | 'warning' | 'info' | 'dim';
  className?: string;
  pulse?: boolean;
}

export const TelemetryBadge: React.FC<TelemetryBadgeProps> = ({
  label,
  value,
  status = 'info',
  className = '',
  pulse = false
}) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'active':
        return 'border-cyan-500/40 text-cyan-300 bg-cyan-950/20';
      case 'success':
        return 'border-emerald-500/40 text-emerald-300 bg-emerald-950/20';
      case 'warning':
        return 'border-amber-500/40 text-amber-300 bg-amber-950/20';
      case 'dim':
        return 'border-slate-800 text-slate-500 bg-slate-900/30';
      default:
        return 'border-slate-700/60 text-slate-300 bg-slate-900/40';
    }
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-2.5 py-1 rounded border text-[11px] font-mono tracking-wider backdrop-blur-sm ${getStatusStyles()} ${className}`}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
        </span>
      )}
      <span className="text-slate-400 font-medium">{label}</span>
      {value && <span className="text-white font-bold">{value}</span>}
    </div>
  );
};
