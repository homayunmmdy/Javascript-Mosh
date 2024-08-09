const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav className="flex justify-center items-center py-6">
        <ul className="inline-flex -space-x-px gap-3">
          {pageNumbers.map(number => (
            <li key={number}>
              <button
                onClick={() => paginate(number)}
                className={`px-4 py-2 rounded-xl border ${currentPage === number ? "bg-blue-700 text-white" : "bg-white text-blue-700"
                  } hover:bg-blue-700 hover:text-white`}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  export default Pagination