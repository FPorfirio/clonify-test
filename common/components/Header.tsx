import { AuthBox } from "../../features/auth/auth";

export const Header = () => {
  return (
    <header className="bg-blue-300 bg-gradient-to-r flex from-gray-300 h-64 px-4 py-5 to-blue-400">
      <AuthBox className="ml-auto" />
    </header>
  );
};
