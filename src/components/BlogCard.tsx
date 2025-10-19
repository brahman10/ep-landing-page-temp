import React from 'react';

interface BlogCardProps {
  imageUrl: string;
  date: string;
  title: string;
  description: string;
  author: string;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  imageUrl, 
  date, 
  title, 
  description, 
  author, 
  className = '' 
}) => {
  return (
    <>
      <style>{`
      
        @media (max-width: 768px) {
          .blog-card-container {
            width: 100% !important;
            height: 400px !important;
            margin-bottom: 20px !important;
          }
          .blog-card-blur-overlay {
            height: 180px !important;
          }
          .blog-card-content {
            padding: 16px !important;
          }
          .blog-card-date {
            font-size: 12px !important;
          }
          .blog-card-title {
            font-size: 18px !important;
            line-height: 24px !important;
            white-space: normal !important;
            overflow: visible !important;
          }
          .blog-card-description {
            font-size: 14px !important;
            line-height: 20px !important;
          }
          .blog-card-footer {
            font-size: 14px !important;
            line-height: 20px !important;
          }
        }
      `}</style>
      <div 
        className={`blog-card-container flex flex-col items-start justify-end gap-3 h-[500px] rounded-xl shadow-[0px_1px_11px_0px_rgba(0,0,0,0.25)] relative overflow-hidden ${className}`}
        style={{ width: '100%' }}
      >
        {/* Background Image */}
        <img 
          src={imageUrl} 
          alt="Blog post"
          className="absolute inset-0 w-full h-full object-cover rounded-xl"
        />
        
        {/* Blurred Overlay */}
        <div 
          className="blog-card-blur-overlay absolute bottom-0 left-[-20px] right-[-19.68px] h-[194px]"
          style={{
            background: 'rgba(0,0,0,0.65)',
            filter: 'blur(50px)'
          }}
        />
        
        {/* Content */}
        <div className="blog-card-content flex flex-col gap-3 items-start justify-end p-5 relative z-10 w-full">
          <div className="flex flex-col gap-1.5 items-start w-full">
            <p 
              className="blog-card-date font-semibold text-sm text-slate-300 w-full whitespace-pre-wrap"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {date}
            </p>
            <div className="flex flex-col items-start w-full">
              <p 
                className="blog-card-title font-semibold text-xl text-white w-full whitespace-nowrap overflow-hidden"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: '36px'
                }}
              >
                {title}
              </p>
              <p 
                className="blog-card-description font-normal text-base text-slate-200 w-full whitespace-pre-wrap overflow-hidden"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: '24px'
                }}
              >
                {description}
              </p>
            </div>
          </div>
          
          <div 
            className="blog-card-footer flex items-start justify-between w-full font-medium text-base"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              lineHeight: '26px'
            }}
          >
            <p className="text-[rgba(127,161,255,0.7)] overflow-hidden">
              <span className="text-white">{author}</span>
            </p>
            <p className="text-white overflow-hidden">
              Read More →
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;