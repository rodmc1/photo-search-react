import React from 'react';

class SearchBar extends React.Component {
  state = {
    text: '',
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.text);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui icon input fluid">
            <input
              type="text"
              placeholder="Search image..."
              value={this.state.text}
              onChange={(e) => this.setState({ text: e.target.value })}
            />
            <i className="circular search link icon"></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
