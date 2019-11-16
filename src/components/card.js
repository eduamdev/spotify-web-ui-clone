import React from 'react';

function Card({className, title, subtitle, text}) {
  return (
    <div className={className}>
       <div className="bg-gray-400 h-48 mb-2"></div>
       <h3 className="text-white font-bold text-sm">{title}</h3>
       {subtitle && <h4 className="text-gray-400 text-sm font-medium">{subtitle}</h4>}
       {text && <span className=""></span>}
    </div>
  );
}

export default Card;
