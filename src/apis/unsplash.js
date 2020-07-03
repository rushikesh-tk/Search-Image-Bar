import axios from 'axios';

export default axios.create({
	baseURL : 'https://api.unsplash.com',
	headers : {
		Authorization: 'Client-ID SSDcrDdBHTWVROnAbTvQXcT6EP0H45N7Tdoj0iPSbiI'
	}
});