import {ProjectImage} from "../types.ts";


function Image(image: ProjectImage) {
	return (
		<div>
			<img src={image.Path} alt={''} style={{width: '50%'}}/>
		</div>
	);
}

export default Image;
