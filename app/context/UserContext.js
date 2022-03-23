import React, {Component} from 'react';
export const UserContext = React.createContext();

export class UserContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      loading: true,
    };
  }

  setUser = user => {
    this.setState({user});
  };

  render() {
    const {children} = this.props;
    const {user, loading} = this.state;
    return (
      <UserContext.Provider
        value={{
          data: {
            user: user,
            setUser: this.setUser,
            refreshUser: this.refreshUser,
          },
        }}>
        {children}
      </UserContext.Provider>
    );
  }
}

export default UserContextProvider;
