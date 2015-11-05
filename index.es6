import React from 'react';

export default class Header extends React.Component {
  static get propTypes() {
    return {
      image: React.PropTypes.shape({
        src: React.PropTypes.string,
      }),
      flyTitle: React.PropTypes.string,
      title: React.PropTypes.string.isRequired,
      text: React.PropTypes.string,
      itemType: React.PropTypes.string,
      itemProp: React.PropTypes.string,
      className: React.PropTypes.string,
      children: React.PropTypes.arrayOf(React.PropTypes.element),
      link: React.PropTypes.object,
    };
  }
  static get defaultProps() {
    return {
      itemType: 'http://schema.org/Article',
      itemProp: 'article',
    };
  }
  render() {
    const headerContent = [];
    const groups = [];
    const imageSrc = this.props.image && this.props.image.src;
    let imageClasses = [ 'header__group-image' ];
    let inlineStyle = false;
    if (imageSrc) {
      imageClasses = imageClasses.concat([ 'header__group-image--empty' ]);
      inlineStyle = { backgroundImage: `url(${this.props.image.src})` };
    }
    const image = imageSrc ?
      (<img {...this.props.image} itemProp="image" className="header__img" />) :
      null;
    groups.push((
      <div className={imageClasses.join(' ')}
        key={`header__group-image`}
      >
        {image}
      </div>));
    if (this.props.flyTitle) {
      headerContent.push((
        <h2
          className="header__flytitle"
          itemProp="alternativeHeadline"
          key={`header__flytitle`}
        >{this.props.flyTitle}</h2>
      ));
    }
    let title = this.props.title;
    if (this.props.link) {
      title = <a {...this.props.link} className="header__title-link">{this.props.title}</a>;
    }
    headerContent.push((
    <h1
      className="header__title"
      itemProp="headline"
      key={`header__title`}
    >{title}</h1>));
    if (this.props.text) {
      headerContent.push((
        <div
          className="header__text"
          itemProp="description"
          key={`header__text`}
          /* eslint-disable react/no-danger */
          dangerouslySetInnerHTML={{
            '__html': this.props.text,
          }}
        />));
    }
    if (this.props.children) {
      headerContent.push((
        <div
          className="header__additional-element"
          key={`header__additional-element`}
        >
        {this.props.children}
        </div>));
    }
    groups.push((
      <div className="header__group-text"
        key={`header__grouptext`}
      >
        {headerContent}
      </div>
    ));

    let className = 'header';
    if (this.props.className) {
      className += ` ${this.props.className}`;
    }

    return (
      <header
        className={className}
        itemScope itemType={this.props.itemType} itemProp={this.props.itemProp}
        role="header"
        style={inlineStyle}
      >{groups}</header>
    );
  }
}
