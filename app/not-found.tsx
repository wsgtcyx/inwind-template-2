import Link from "next/link";
import { headers } from 'next/headers';

export default function NotFound() {
  const headersList = headers();
  const referer = headersList.get('referer');
  const currentUrl = headersList.get('x-url') || headersList.get('x-invoke-path');
  const userAgent = headersList.get('user-agent');
  const host = headersList.get('host');
  const requestUrl = headersList.get('x-original-url');
  const method = headersList.get('x-http-method-override') || 'GET';
  const timestamp = new Date().toISOString();

//   console.log(JSON.stringify({
//     type: '404_error',
//     timestamp,
//     request: {
//       referer,
//       currentUrl,
//       requestUrl,
//       method,
//       host,
//       userAgent
//     }
//   }, null, 2));

//   if (!currentUrl || !referer) {
//     console.log('Debug - All Headers:', Object.fromEntries(headersList.entries()));
//   }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div>
          <h1 className="text-6xl sm:text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            404
          </h1>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-200">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          {process.env.NODE_ENV === 'development' && (
            <>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Attempted URL: {currentUrl || requestUrl || 'Unknown'}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Referrer: {referer || 'Direct access'}
              </p>
            </>
          )}
        </div>

        <div>
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium
                     transition-transform hover:scale-105 hover:shadow-lg"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
              />
            </svg>
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
} 