import { useState } from 'react';
import { ImageIcon } from 'lucide-react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  fallbackSrc = null,
  placeholder = true,
  ...props 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(false);
      setIsLoading(true);
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading placeholder */}
      {isLoading && placeholder && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse">
          <div className="flex items-center justify-center h-full">
            <ImageIcon className="h-12 w-12 text-gray-400" />
          </div>
        </div>
      )}

      {/* Error state */}
      {hasError && !fallbackSrc && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <ImageIcon className="h-12 w-12 mx-auto mb-2" />
            <p className="text-sm">Image unavailable</p>
          </div>
        </div>
      )}

      {/* Actual image */}
      <img
        src={currentSrc}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${className}`}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
