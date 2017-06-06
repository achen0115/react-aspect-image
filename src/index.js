import React, {Component} from 'react';
import PropTypes from 'prop-types';
import noImage from './img/no_image.png';

class AspectImage extends Component {
    constructor(props) {
        super(props);
        this.state={
            loading: true,
            src: this.props.src,
            mode: this.props.mode,
            height: this.props.dimention.height,
            width: this.props.dimention.width
        }
    }

    // Return default image if there is no default image props passed in
    getFallbackImage = () => {
        return this.props.fallback || noImage;
    }

  // Return different size for <img> acoording to different mode
    getDimentionByMode = (mode,imageSize) => {
        switch (mode) {
        case 'aspect':
            const base = Math.max(imageSize.height, imageSize.width);
            return ({
                width: this.state.width * (imageSize.width / base),
                height: this.state.height * (imageSize.height / base)
            });

        default:
            break;
        }
    }

    imageLoaded = ({target}) =>{
        const imageSize= {width: target.offsetWidth, height: target.offsetHeight};
        const size = this.getDimentionByMode(this.state.mode, imageSize);
        this.setState({
            loading: false,
            width: size.width,
            height: size.height
        });
    }

    imageError = () => {
        this.setState({
            loading:false,
            src:this.getFallbackImage()
        });
    }

    render() {
        return (
            <img 
                src={this.state.src} 
                alt={this.props.alt}
                onLoad={this.imageLoaded}
                onError={this.imageError}
                height={this.state.loading ? null :this.state.height}
                width={this.state.loading? null : this.state.width}
            />
        );
    }
}

AspectImage.propTypes = {
    src: PropTypes.string.isRequired,
    dimention: PropTypes.object,
    mode: PropTypes.string
}

AspectImage.defaultProps = {
    dimention: {
        width: 100,
        height: 100
    },
    mode: 'aspect'
}

export default AspectImage;
