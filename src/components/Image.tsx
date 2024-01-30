import {ProjectImage} from "../types";

interface ImageProps {
	img: ProjectImage;
}

export function Image({img}: ImageProps) {
	return (
		<img src={img.Path} alt={''} className={'center-img'}/>
	);
}

