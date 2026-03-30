function withAuth(Component) {
  return function ProtectedComponent(props) {
    const isLoggedIn = true;

    if (!isLoggedIn) {
      return <h2>Please login</h2>;
    }

    return <Component {...props} />;
  };
}

