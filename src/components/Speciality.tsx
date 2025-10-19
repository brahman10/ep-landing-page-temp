import React from 'react';

interface SpecialityCardProps {
  imageUrl: string;
  title: string;
  price: string;
  className?: string;
}

const SpecialityCard: React.FC<SpecialityCardProps> = ({ 
  imageUrl, 
  title, 
  price, 
  className = '' 
}) => {
  return (
    <div 
      className={`flex flex-col items-center justify-center gap-5 p-5 h-[100px] max-w-[250px] rounded-t-[134px] border border-[#d4d1f6] ${className}`}
      style={{
        background: 'linear-gradient(to bottom, #eeedf6 35.503%, #ffffff)',
        position: 'relative'
      }}
    >
      {/* Icon Container */}
      <div 
        className="w-[130px] h-[70px] flex items-center justify-center"
        style={{ 
          backgroundColor: 'transparent',
          background: 'none',
          border: 'none',
          outline: 'none',
          position: 'relative',
          zIndex: 2
        }}
      >
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-contain"
          style={{
            backgroundColor: 'transparent',
            background: 'none',
            border: 'none',
            outline: 'none',
            filter: 'none',
            mixBlendMode: 'normal',
            position: 'relative',
            zIndex: 3
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center gap-3 w-full">
        <div className="flex flex-col items-center gap-1">
          <p 
            className="font-medium text-sm text-black"
            style={{ fontFamily: 'Inter, sans-serif',
                 marginLeft: '-10px' }}
          >
            {title}
          </p>
          <p 
            className="font-normal text-xs"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              color: 'rgba(109,89,122,0.75)'
            }}
          >
            {price}
          </p>
        </div>
        
        <div className="flex items-end justify-center w-full">
          <p 
            className="font-medium text-sm text-center"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              color: '#5546ff'
            }}
          >
            Consult Now
          </p>
          <div className="w-4 h-4 ml-1">
            <img 
              src="https://www.figma.com/api/mcp/asset/daaa341e-f9c0-4d9d-a88d-18e02f97a52e" 
              alt="Arrow"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialityCard;
