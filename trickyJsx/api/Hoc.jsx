import React from "react";

function withLoading(WrappedComponent) {
  return function WithLoadingWrapper({ isLoading, ...props }) {
    if (isLoading) {
      return <div className="spinner">Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withLoading;



const UserListWithLoading = withLoading(UserList);

function App() {
  const loading = false;
  const users = ["Rohit", "Aman", "John"];

  return (
    <div>
      <UserListWithLoading isLoading={loading} users={users} />
    </div>
  );
}
