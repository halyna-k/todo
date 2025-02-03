import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import SearchBar from './SearchBar';
import Auth from "./Auth";

interface HeaderProps {
  searchQuery: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, handleSearchChange }) => {
  const { isAuthenticated } = useAuth0();

  return (
    <header className="py-4 border-b-1 border-b-gray-300">
      <div className="max-w-4xl mx-auto flex justify-between items-center px-4">
          <Link to="/" className="text-xl font-bold">ToDo</Link>
        {isAuthenticated &&
          <>
          <nav className="flex items-center gap-3">
            <Link to="/dashboard">Board</Link>
          </nav>
            <SearchBar value={searchQuery} onChange={handleSearchChange} />
          </>
        }

        <Auth />
      </div>
    </header>
  );
};

export default Header;
