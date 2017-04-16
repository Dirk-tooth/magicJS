const React = require('react');

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </a>
            <a id="home" className="navbar-brand" href="#">magicJS</a>
          </div>

          <div className="collapse navbar-collapse" id="navbar-collapse">
            <ul className="nav navbar-nav">
              <li><a id="searchPage" href="#" onClick={() => this.props.changeTopLevelState('currentPage', 'search')}>Search</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

module.exports = Nav;
