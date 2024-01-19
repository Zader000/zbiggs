import {ProjectImage} from "../types.ts";


export function Image(image: ProjectImage) {
	return (
		<div>
			<img src={image.Path} alt={''} style={{width: '50%'}}/>
		</div>
	);
}

