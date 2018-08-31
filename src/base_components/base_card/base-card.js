import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BaseCard extends Component {
  constructor(props) {
    super(props);

    this.hasHeaderNameRender = this.hasHeaderNameRender.bind(this);
    this.renderBody = this.renderBody.bind(this);
  }

  hasHeaderNameRender() {
    const { headerName } = this.props;
    if (headerName) {
      return (
        <div className="card-header">
          {headerName}
          <style jsx="true">{`
            .card-header {
              width: 100%;
              height: 60px;
              background-color: rgb(138, 43, 226);
              color: white;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          `}
          </style>
        </div>
      );
    }
    return null;
  }

  renderBody() {
    const { innerComponent } = this.props;
    return (
      <div className="card-body">
        {innerComponent}
        <style jsx="true">{`
          .card-body {
            width: 100%;
            min-height: 400px;
            background-color: #f5f5f569;
          }
        `}
        </style>
      </div>
    );
  }

  render() {
    return (
      <div className="card">
        {this.hasHeaderNameRender()}

        {this.renderBody()}

        <style jsx="true">{`
          .card {
            min-width: 400px;
            min-height: 400px;
            max-width: 400px;
            max-height: 600px;
          }
        `}
        </style>
      </div>
    );
  }
}

BaseCard.propTypes = {
  headerName: PropTypes.string,
  innerComponent: PropTypes.node.isRequired,
};

BaseCard.defaultProps = {
  headerName: undefined,
};
