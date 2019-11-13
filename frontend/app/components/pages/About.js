import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { testing } from '../../actions/actions';

const About = ({ testing: _testing, test }) => {
  if (test.length < 1) {
    _testing();
  }
  return (
    <div style={{ marginTop: '30px' }}>
      {Object.keys(test).length > 0 ? test.data.map((item) => (
        <div key={item.id}>
          <span>{item.username}</span>
        </div>
      )) : null}
      {test.count}
    </div>
  );
};

const loadData = (store, param) => store.dispatch(testing(param));

const mapStateToProps = (state) => ({
  test: state.monitor.test,
});

export default {
  component: connect(mapStateToProps,
    { testing })(About),
  loadData,
};
