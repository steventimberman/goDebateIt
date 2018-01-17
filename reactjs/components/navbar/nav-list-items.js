/**
 * Created by Steven on 1/16/18.
 */
var React = require('react')

export default class NavItem extends React.Component {
  render() {
    return (
      <li class="">
        <a href="#" class="color-me" onClick={this.props.action}>
            <span class={this.props.icon} aria-hidden="true"></span> {this.props.name}
        </a>
    </li>
    );
  }
}