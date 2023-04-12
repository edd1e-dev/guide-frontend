import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBanner = () => {
  return (
    <div>
      <div className="bg-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative rounded-full shadow-sm">
                <input type="search" name="search" id="search" className="block w-full pl-10 pr-3 py-2 text-base leading-5 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" placeholder="Search for something..." />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon className="h-5 w-5 text-gray-400" icon={faSearch} />
                </div>
              </div>
            </div>
            <button type="button" className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-600 active:bg-indigo-600 transition duration-150 ease-in-out">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBanner;