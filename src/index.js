import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NestedElements from './examples/NestedElements';
import Expressions from './examples/Expressions';
import Styles from './examples/Styling';
import Conditions from './examples/Conditions';
import Stateless from './examples/Stateless';
import Stateful from './examples/Stateful';
import reportWebVitals from './reportWebVitals';
import Expression from './examples/Expressions';
import PropsExample from './examples/PropsExample';
import PropsValidation from './examples/PropsValidation';
import SetStateExample from './examples/SetStateExample';
import ForceUpdateExample from './examples/ForceUpdateExample';
import FindDomNode from './examples/FindDomNode';
import LifeCycleMethods from './examples/LifeCycleMethods';
import LiveUpdate from './forms/LiveUpdate';
import UpdateStateFromChildComponent from './forms/UpdateStateFromChildComponent';
import EventsExample from './forms/EventsExample';
import ChildEventsUpdateParent from './forms/ChildEventsUpdateParent';
import KeysExample from './forms/KeysExample';
import RouteExample from './forms/RouteExample';
import TodoApp from './examples/TodoApp';

ReactDOM.render(
  <React.StrictMode>
    
    <TodoApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
