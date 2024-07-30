import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="flex space-x-4">
          <Link to="/" className="text-cyan-50">
            Logo
          </Link>
          <Link to="/" className="text-cyan-50">
            Language Translator
          </Link>
          <Link to="/" className="text-cyan-50">
            Resource Directory
          </Link>
          <Link to="/" className="text-cyan-50">
            Civic Engagement Tools
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
