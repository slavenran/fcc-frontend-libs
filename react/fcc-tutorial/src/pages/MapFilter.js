import React from 'react';

const frontEndFrameworks = [
    'React',
    'Angular',
    'Ember',
    'Knockout',
    'Backbone',
    'Vue'
  ];
  
  function Frameworks() {
    const renderFrameworks = frontEndFrameworks.map((elem) =>
    (<li key={elem.slice(0, 1)}>{elem}</li>)); // Change this line
    return (
      <div>
        <h1>Popular Front End JavaScript Frameworks</h1>
        <ul>
          {renderFrameworks}
        </ul>
      </div>
    );
};

class Filtering extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [
          {
            username: 'Jeff',
            online: true
          },
          {
            username: 'Alan',
            online: false
          },
          {
            username: 'Mary',
            online: true
          },
          {
            username: 'Jim',
            online: false
          },
          {
            username: 'Sara',
            online: true
          },
          {
            username: 'Laura',
            online: true
          }
        ]
      };
    }
    render() {
      const usersOnline = this.state.users.filter(user => user.online); // Change this line
      const renderOnline = usersOnline.map(user => (<li key={user.username.slice(0, 2)}>{user.username}</li>)); // Change this line
      return (
        <div>
          <h1>Current Online Users:</h1>
          <ul>{renderOnline}</ul>
        </div>
      );
    }
}

export default function MapFilter() {
    return (
        <div>
            <Frameworks />
            <Filtering />
        </div>
    );
}