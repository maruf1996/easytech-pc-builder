const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto text-center">
        <p>
          Copyright &copy; {new Date().getFullYear()} - All right reserved by
          Maruf Islam
        </p>
      </div>
    </footer>
  );
};

export default Footer;
