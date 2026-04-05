function higherOrder(ChildComponent) {
  return function ChildComponentWrapper(props) {
    const isLoggedIn = true;

    if (!isLoggedIn) {
      return <h2>Please login</h2>;
    }

    return <ChildComponent {...props} />;
  };
}


function withAuth(WrappedComponent) {
  return function AuthComponent(props) {
    const isLoggedIn = true;

    if (!isLoggedIn) {
      return <h2>Please login</h2>;
    }

    return <WrappedComponent {...props} />;
  };
}