import React, { useState } from 'react';
import { FaEye, FaStar, FaFireAlt, FaChevronDown, FaChevronUp, FaBookmark, FaShareAlt } from 'react-icons/fa';

const NewsCard = ({ news }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const {
    title,
    author,
    image_url,
    details,
    rating,
    total_view,
    others_info
  } = news;

  const formatDate = (dateString) => {
    return dateString?.split(' ')[0] || '';
  };

  return (
    <div className="w-full mb-6 bg-white border border-[#E7E7E7] rounded-[5px] overflow-hidden">
      {/* Author Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#E7E7E7]">
        <div className="flex items-center gap-3">
          <img
            src={author?.img || "/api/placeholder/40/40"}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{author?.name}</h3>
            <p className="text-sm text-gray-500">{formatDate(author?.published_date)}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-gray-600 hover:text-gray-800">
            <FaBookmark className="w-4 h-4" />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <FaShareAlt className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Title */}
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {title}
        </h2>
      </div>

      {/* Image Section */}
      <div className="relative w-full">
        <img
          src={image_url || "/api/placeholder/558/300"}
          alt={title}
          className="w-full object-cover"
        />
        {others_info?.is_trending && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full flex items-center gap-1">
            <span className="text-sm font-medium">614</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Details with Read More */}
        <div className="mb-6">
          <p className={`text-gray-600 leading-relaxed ${isExpanded ? '' : 'line-clamp-3'}`}>
            {details}
          </p>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-orange-500 hover:text-orange-600 mt-2"
          >
            Read More
          </button>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between border-t border-[#E7E7E7] pt-4">
          {/* Rating Stars */}
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar 
                key={star}
                className={`w-4 h-4 ${star <= rating?.number 
                  ? 'text-orange-400' 
                  : 'text-gray-300'}`}
              />
            ))}
            <span className="text-gray-600 ml-2">{rating?.number}</span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2">
            <FaEye className="w-5 h-5 text-gray-400" />
            <span className="text-gray-600">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;