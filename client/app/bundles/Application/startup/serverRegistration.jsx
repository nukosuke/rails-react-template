import ReactOnRails from 'react-on-rails';
import Helmet from 'react-helmet';
import Application from '../components/Application';

// for header title server side rendeting on first load
// ref: http://r7kamura.hatenablog.com/entry/2016/10/10/173610
global.Helmet = Helmet;

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Application,
});
