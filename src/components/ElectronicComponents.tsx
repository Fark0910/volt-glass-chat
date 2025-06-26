
import React from 'react';

const ElectronicComponents: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-8 py-8">
      {/* Diode */}
      <div className="flex flex-col items-center space-y-2 float-animation">
        <div className="relative w-16 h-16">
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <defs>
              <linearGradient id="diodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <polygon points="20,20 20,44 44,32" fill="url(#diodeGradient)" />
            <line x1="44" y1="20" x2="44" y2="44" stroke="currentColor" strokeWidth="2" />
            <line x1="10" y1="32" x2="20" y2="32" stroke="currentColor" strokeWidth="2" />
            <line x1="44" y1="32" x2="54" y2="32" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <span className="text-sm text-muted-foreground">Diode</span>
      </div>

      {/* Resistor */}
      <div className="flex flex-col items-center space-y-2 float-animation float-delay-1">
        <div className="relative w-16 h-16">
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <defs>
              <linearGradient id="resistorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ea580c" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <rect x="16" y="28" width="32" height="8" fill="url(#resistorGradient)" rx="2" />
            <line x1="10" y1="32" x2="16" y2="32" stroke="currentColor" strokeWidth="2" />
            <line x1="48" y1="32" x2="54" y2="32" stroke="currentColor" strokeWidth="2" />
            <rect x="20" y="26" width="2" height="12" fill="#dc2626" />
            <rect x="26" y="26" width="2" height="12" fill="#fbbf24" />
            <rect x="32" y="26" width="2" height="12" fill="#dc2626" />
            <rect x="38" y="26" width="2" height="12" fill="#fbbf24" />
          </svg>
        </div>
        <span className="text-sm text-muted-foreground">Resistor</span>
      </div>

      {/* Capacitor */}
      <div className="flex flex-col items-center space-y-2 float-animation float-delay-2">
        <div className="relative w-16 h-16">
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <defs>
              <linearGradient id="capacitorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#059669" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <line x1="30" y1="20" x2="30" y2="44" stroke="url(#capacitorGradient)" strokeWidth="4" />
            <line x1="34" y1="20" x2="34" y2="44" stroke="url(#capacitorGradient)" strokeWidth="4" />
            <line x1="10" y1="32" x2="30" y2="32" stroke="currentColor" strokeWidth="2" />
            <line x1="34" y1="32" x2="54" y2="32" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <span className="text-sm text-muted-foreground">Capacitor</span>
      </div>

      {/* Transistor */}
      <div className="flex flex-col items-center space-y-2 float-animation">
        <div className="relative w-16 h-16">
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <defs>
              <linearGradient id="transistorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <circle cx="32" cy="32" r="16" fill="none" stroke="url(#transistorGradient)" strokeWidth="3" />
            <line x1="16" y1="28" x2="28" y2="28" stroke="currentColor" strokeWidth="2" />
            <line x1="36" y1="24" x2="48" y2="16" stroke="currentColor" strokeWidth="2" />
            <line x1="36" y1="40" x2="48" y2="48" stroke="currentColor" strokeWidth="2" />
            <line x1="28" y1="24" x2="28" y2="40" stroke="url(#transistorGradient)" strokeWidth="3" />
          </svg>
        </div>
        <span className="text-sm text-muted-foreground">Transistor</span>
      </div>

      {/* IC Chip */}
      <div className="flex flex-col items-center space-y-2 float-animation float-delay-1">
        <div className="relative w-16 h-16">
          <svg viewBox="0 0 64 64" className="w-full h-full">
            <defs>
              <linearGradient id="chipGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#64748b" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#475569" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <rect x="20" y="20" width="24" height="24" fill="url(#chipGradient)" rx="2" />
            <circle cx="24" cy="24" r="1" fill="currentColor" />
            <line x1="16" y1="24" x2="20" y2="24" stroke="currentColor" strokeWidth="1" />
            <line x1="16" y1="28" x2="20" y2="28" stroke="currentColor" strokeWidth="1" />
            <line x1="16" y1="32" x2="20" y2="32" stroke="currentColor" strokeWidth="1" />
            <line x1="16" y1="36" x2="20" y2="36" stroke="currentColor" strokeWidth="1" />
            <line x1="44" y1="24" x2="48" y2="24" stroke="currentColor" strokeWidth="1" />
            <line x1="44" y1="28" x2="48" y2="28" stroke="currentColor" strokeWidth="1" />
            <line x1="44" y1="32" x2="48" y2="32" stroke="currentColor" strokeWidth="1" />
            <line x1="44" y1="36" x2="48" y2="36" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
        <span className="text-sm text-muted-foreground">IC Chip</span>
      </div>
    </div>
  );
};

export default ElectronicComponents;
