const AuthLayout = ({ children }) => {
  return (
    <main className="h-[92vh] bg-gradient-to-r from-rose-100 to-teal-100  flex items-center justify-center">
      {children}
    </main>
  );
};

export default AuthLayout;
