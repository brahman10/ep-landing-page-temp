import React from 'react';
import Header from '../components/Headers';
import SpecialityCard from '../components/Speciality';
import BlogCard from '../components/BlogCard';
import WaitlistForm from '../components/WaitlistForm';

const IntroPage: React.FC = () => {
  // Speciality data
  const specialities = [
    {
      imageUrl: "https://www.figma.com/api/mcp/asset/8af13e0f-89b2-4f60-b5fa-3d55fb203a42",
      title: "Gynaecologist",
      price: "Rs. 399/-"
    },
    {
      imageUrl: "https://www.figma.com/api/mcp/asset/20462f66-f9c4-4dc6-a24d-4cae647e9a4e",
      title: "Gynaecologist",
      price: "Rs. 399/-"
    },
    {
      imageUrl: "https://www.figma.com/api/mcp/asset/34faf210-5dc4-4ebd-b92f-f69b78445233",
      title: "Gynaecologist",
      price: "Rs. 399/-"
    },
    {
      imageUrl: "https://www.figma.com/api/mcp/asset/02ea4b86-9e41-4b2c-be75-6f85aabac994",
      title: "Gynaecologist",
      price: "Rs. 399/-"
    },
    {
      imageUrl: "https://www.figma.com/api/mcp/asset/8af13e0f-89b2-4f60-b5fa-3d55fb203a42",
      title: "Gynaecologist",
      price: "Rs. 399/-"
    },
    {
        imageUrl: "https://www.figma.com/api/mcp/asset/8af13e0f-89b2-4f60-b5fa-3d55fb203a42",
        title: "Gynaecologist",
        price: "Rs. 399/-"
      },
  ];

  // Blog data
  const blogPosts = [
    {
      imageUrl: "https://www.figma.com/api/mcp/asset/9695b2fa-df28-45eb-a817-830deda8bc9d",
      date: "January 15, 2025 • 6 min read",
      title: "Essential nutrients and dietary guidelines for the critical first 12 weeks of pregnancy, including folic acid requirements and",
      description: "Essential nutrients and dietary guidelines for the critical first 12 weeks of pregnancy, including folic acid requirements and",
      author: "Dr. Sarah Mitchell, MD"
    },
    {
      imageUrl: "https://www.figma.com/api/mcp/asset/b875eed4-185c-4b8e-a07d-434660dbf067",
      date: "January 15, 2025 • 6 min read",
      title: "Essential nutrients and dietary guidelines for the critical first 12 weeks of pregnancy, including folic acid requirements and",
      description: "Essential nutrients and dietary guidelines for the critical first 12 weeks of pregnancy, including folic acid requirements and",
      author: "Dr. Sarah Mitchell, MD"
    },
    {
      imageUrl: "https://www.figma.com/api/mcp/asset/0648f883-dbe0-45a6-990e-6d802c4e4895",
      date: "January 15, 2025 • 6 min read",
      title: "Essential nutrients and dietary guidelines for the critical first 12 weeks of pregnancy, including folic acid requirements and",
      description: "Essential nutrients and dietary guidelines for the critical first 12 weeks of pregnancy, including folic acid requirements and",
      author: "Dr. Sarah Mitchell, MD"
    }
  ];

  return (
    <>
      <style>{`

      
        @media (max-width: 768px) {
          .intro-page-container {
            height: 100vh !important;
            overflow-y: auto !important;
            overflow-x: hidden !important;
          }
          .intro-page-main-content {
            margin-left: 0 !important;
            height: 100vh !important;
            min-height: 100vh !important;
          }
          .intro-page-blur-section {
            display: flex !important;
            width: 100% !important;
            height: auto !important;
            filter: blur(5px) !important;
            WebkitFilter: blur(10px) !important;
            padding: 20px !important;
            margin-top: 0 !important;
            margin-left: 0 !important;
          }
          .intro-page-blur-section > div {
            margin-top: 0 !important;
            margin-left: 0 !important;
            padding: 20px !important;
            width: 100% !important;
          }
          .intro-page-blur-section .flex.gap-20 {
            gap: 10px !important;
            padding: 20px !important;
            margin-top: 0 !important;
            margin-left: 0 !important;
          }
          .intro-page-blog-section {
            display: flex !important;
            flex-direction: column !important;
            padding: 40px 20px !important;
            margin-top: 0 !important;
            margin-left: 0 !important;
            width: 100% !important;
            height: 100vh !important;
            min-height: 100vh !important;
            background-color: transparent !important;
          }
          .intro-page-blog-header {
            flex-direction: column !important;
            gap: 16px !important;
            align-items: flex-start !important;
            width: 100% !important;
          }
          .intro-page-blog-title {
            font-size: 24px !important;
            height: auto !important;
            line-height: 1.3 !important;
            width: 100% !important;
            margin-bottom: 8px !important;
          }
          .intro-page-blog-description {
            font-size: 14px !important;
            height: auto !important;
            line-height: 1.4 !important;
            width: 100% !important;
            margin-bottom: 20px !important;
          }
          .intro-page-blog-view-all-btn {
            width: 100% !important;
            margin-top: 16px !important;
          }
          .intro-page-blog-view-all-btn .flex {
            justify-content: center !important;
            width: 100% !important;
          }
          /* Desktop Blog Section Mobile Responsive Styles */
          .intro-page-desktop-blog-section {
            padding: 20px !important;
            margin-top: 0 !important;
            margin-left: 0 !important;
            gap: 20px !important;
          }
          .intro-page-desktop-blog-header {
            flex-direction: column !important;
            gap: 16px !important;
            align-items: flex-start !important;
            width: 100% !important;
          }
          .intro-page-desktop-blog-title {
            font-size: 24px !important;
            height: auto !important;
            line-height: 1.3 !important;
            width: 100% !important;
            margin-bottom: 8px !important;
          }
          .intro-page-desktop-blog-description {
            font-size: 14px !important;
            height: auto !important;
            line-height: 1.4 !important;
            width: 100% !important;
            margin-bottom: 20px !important;
          }
          .intro-page-desktop-blog-view-all-btn {
            width: 100% !important;
            margin-top: 16px !important;
          }
          .intro-page-desktop-blog-view-all-btn .flex {
            justify-content: center !important;
            width: 100% !important;
          }
          .intro-page-blog-cards {
            flex-direction: column !important;
            gap: 20px !important;
          }
          .intro-page-blog-cards .flex-1 {
            width: 100% !important;
            flex: none !important;
          }
          .intro-page-waitlist-wrapper {
            position: relative !important;
            margin-top: 0 !important;
            margin-left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            height: 100vh !important;
            min-height: 100vh !important;
          }
          .intro-page-speciality-section {
            display: none !important;
          }
        }
      `}</style>
      <div 
        className="intro-page-container bg-white flex flex-col items-start relative w-full h-screen"
        style={{width: '100%', height: '100vh', overflowY: 'hidden', overflowX: 'hidden' }}
      >
        {/* Header Section */}
        <Header />
        
        {/* Background Image */}
        <img 
          src="https://www.figma.com/api/mcp/asset/3f20e364-9a05-4b47-87d8-b83702d3ece5" 
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        
        {/* Main Content Container */}
        <div className="intro-page-main-content relative w-full"
          style = {{ marginLeft: '120px' }}
        >
          {/* Content Section with Blur Effect - Desktop Only */}
          <div 
            className="intro-page-blur-section flex flex-col items-start relative"
            style={{
              width: '1444px',
              height: '1399px',
              filter: 'blur(50px)',
              WebkitFilter: 'blur(5px)',
            }}
          >
            {/* Specialities Section */}
            <div className="intro-page-speciality-section flex gap-20 items-center p-[100px] w-full"
              style={{ marginTop: '-50px' ,marginLeft: '-90px' }}
            >
              <div className="flex flex-1 flex-col gap-12 items-start min-h-0 min-w-0">
                {/* Section Header */}
                <div className="flex items-start justify-between w-full">
                  <div className="flex flex-col gap-2.5 items-start w-[780px]">
                    <div className="flex flex-col gap-2 items-start w-full"
                      style={{ marginLeft: '25px' }}
                    >
                      <p 
                        className="text-[18px] w-full"
                        style={{ 
                          fontFamily: 'Lato, sans-serif',
                          fontWeight: 'bold',
                          color: '#eb61a2',
                          lineHeight: '28px'
                        }}
                      >
                        Our offerings
                      </p>
                      <p 
                        className="font-semibold text-[32px] w-full"
                        style={{ 
                          fontFamily: 'Inter, sans-serif',
                          color: '#312a31'
                        }}
                      >
                        Browse by Specialities
                      </p>
                    </div>
                  </div>
                  
                  {/* View All Button */}
                  <div 
                    className="bg-white border border-[#d1d5db] border-solid rounded-lg"
                  >
                    <div className="flex gap-1 items-center justify-center px-3 py-2.5 rounded-inherit">
                      <div className="flex gap-2 items-center justify-center px-0.5 py-0">
                        <p 
                          className="font-medium text-sm"
                          style={{ 
                            fontFamily: 'Inter, sans-serif',
                            color: '#030712',
                            lineHeight: '20px'
                          }}
                        >
                          View all Doctors
                        </p>
                      </div>
                      <div className="w-4 h-4">
                        <img 
                          src="https://www.figma.com/api/mcp/asset/994f3e7f-e951-4546-8e85-b618ecc0079b" 
                          alt="Chevron right"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Speciality Cards Grid */}
                <div className="flex flex-wrap gap-5 items-center w-full">
                  {specialities.map((speciality, index) => (
                    <SpecialityCard
                      key={index}
                      imageUrl={speciality.imageUrl}
                      title={speciality.title}
                      price={speciality.price}
                      className="flex-1"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Blog Section - Desktop Blurred */}
            <div 
              className="intro-page-desktop-blog-section flex flex-col gap-14 items-center justify-center px-[100px] py-[100px] w-full mt-[100px]"
              style={{ backgroundColor: 'rgba(85,70,255,0.02)', marginTop: '-120px' ,marginLeft: '-80px'}}
            >
              <div className="flex flex-col items-start w-full max-w-full">
                {/* Blog Section Header */}
                <div className="intro-page-desktop-blog-header flex items-start justify-between w-full">
                  <p 
                    className="intro-page-desktop-blog-title font-bold h-[62.648px] text-[38.037px] flex-1 whitespace-pre-wrap"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      color: '#312a31'
                    }}
                  >
                    Pregnancy Stage & Nutrition
                  </p>
                  <div 
                    className="intro-page-desktop-blog-view-all-btn bg-white border border-[#d1d5db] border-solid rounded-xl"
                  >
                    <div className="flex gap-1 items-center justify-center p-3 rounded-inherit">
                      <div className="flex gap-2 items-center justify-center px-0.5 py-0">
                        <p 
                          className="font-medium"
                          style={{ 
                            fontFamily: 'Inter, sans-serif',
                            color: '#030712',
                            fontSize: '15.66px',
                            lineHeight: '22.374px'
                          }}
                        >
                          View all Doctors
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p 
                  className="intro-page-desktop-blog-description font-normal h-[62.648px] text-[20.137px] w-full whitespace-pre-wrap"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: 'rgba(0,0,0,0.6)',
                    lineHeight: '26.849px'
                  }}
                >
                  Expert guidance for each stage of your pregnancy journey with personalized nutrition and care recommendations.
                </p>
                
                {/* Blog Cards */}
                <div className="intro-page-blog-cards flex gap-6 items-start w-full">
                  {blogPosts.map((post, index) => (
                    <BlogCard
                      key={index}
                      imageUrl={post.imageUrl}
                      date={post.date}
                      title={post.title}
                      description={post.description}
                      author={post.author}
                      className="flex-1"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Blog Section - Visible only on mobile */}
          <div className="intro-page-blog-section hidden">
            <div className="flex flex-col items-start w-full">
              {/* Blog Section Header */}
              <div className="intro-page-blog-header flex items-start justify-between w-full mb-6">
                <p 
                  className="intro-page-blog-title font-bold text-[38.037px] flex-1 whitespace-pre-wrap"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: '#312a31'
                  }}
                >
                  Pregnancy Stage & Nutrition
                </p>
              </div>
              
              {/* View All Doctors Button */}
              <div className="intro-page-blog-view-all-btn w-full">
                <div 
                  className="bg-white border border-[#d1d5db] border-solid rounded-xl"
                >
                  <div className="flex gap-1 items-center justify-center p-3 rounded-inherit">
                    <div className="flex gap-2 items-center justify-center px-0.5 py-0">
                      <p 
                        className="font-medium"
                        style={{ 
                          fontFamily: 'Inter, sans-serif',
                          color: '#030712',
                          fontSize: '15.66px',
                          lineHeight: '22.374px'
                        }}
                      >
                        View all Doctors
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <p 
                className="intro-page-blog-description font-normal text-[20.137px] w-full whitespace-pre-wrap mb-6"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  color: 'rgba(0,0,0,0.6)',
                  lineHeight: '26.849px'
                }}
              >
                Expert guidance for each stage of your pregnancy journey with personalized nutrition and care recommendations.
              </p>
              
              {/* Blog Cards - Stacked vertically */}
              <div className="intro-page-blog-cards flex gap-6 w-full">
                {blogPosts.map((post, index) => (
                  <BlogCard
                    key={index}
                    imageUrl={post.imageUrl}
                    date={post.date}
                    title={post.title}
                    description={post.description}
                    author={post.author}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Waitlist Form - Positioned Absolutely Over Blurred Content */}
          <div 
            className="intro-page-waitlist-wrapper absolute top-0 w-full h-full pointer-events-none"
            style={{
              marginTop: '-470px',
              marginLeft: '-125px',
            }}
          >
            <div className="pointer-events-auto">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroPage;