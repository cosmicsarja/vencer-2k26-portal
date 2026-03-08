import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="mb-4 font-display text-5xl sm:text-7xl pandora-gradient-text">404</h1>
        <p className="mb-6 text-base sm:text-xl text-muted-foreground font-heading">Page not found</p>
        <Link
          to="/"
          className="inline-block font-display text-sm tracking-wider px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-fest-cyan text-primary-foreground font-bold hover:shadow-[0_0_25px_hsl(var(--fest-teal)_/_0.4)] transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
