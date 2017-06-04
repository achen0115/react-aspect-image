# react-aspect-image

A ReactJS image component to dynamically display image in original image ratio.

## Installation

```
npm install react-aspect-image --save

or

yarn add react-aspect-image
```


## Usage

You can use AspectImage almost the same way as a <img> and it will handle the image size for you.

```
import AspectImage from 'react-aspect-image';
...
<AspectImage
  src="image_url"
  fallback="image_url" //If your image failed to load, it will display this image, optional
  alt="awesome image"
  dimention={{height: 100, width:100}}  // specify your image dimention
/>
...
```

## To-Do

* [x] aspect-mode
* [ ] aspect-fill-mode
* [ ] detect mode



### Notes

This is my first ever open source project. Please correct me if you see any mistakes (should be easy to find). :)

## License

MIT License

