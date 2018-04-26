import React from 'react';
import { connect } from 'react-redux';

// Connects state.articles to this component
const mapStateToProps = state => {
  return { articles: state.articles };
};

// Basically a stateless Component
const ConnectedList = ({ articles }) => (
  <ul>
    {articles.map(el => (
        <li key={el.id}>{el.title}</li>
      ))}
  </ul>
);

// Connects a React component to the Redux Store
const List = connect(mapStateToProps)(ConnectedList);

export default List;
