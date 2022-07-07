import axios from 'axios';
import store from '@/store';
import cookie from 'vue-cookies';

const downloadFile = async ({ type }) => {
	try {
		const response = await fetch(
			`${store.state.baseURL}/parser/download/${type}`,
			{
				method: "GET",
				headers: {
					Authorization: `token ${cookie.get("auth_token")}`,
				},
			}
		);
		if (response.ok) {
			const fileData = await response.blob();
			return fileData;
		}
		const { detail } = await response.json();
		return Promise.reject({ message: detail, status: response.status });
	} catch (error) {
		throw new Error(error);
	}
};

const getComments = async () => {
	try {
		const { data } = await axios.get(`${store.state.baseURL}/comment`, {
			headers: {
				Authorization: `token ${cookie.get("auth_token")}`,
			},
		});
		return data;
	} catch (error) {
		throw new Error(error);
	}
};

const createComment = async ({ comment, parser }) => {
	try {
		const { data } = await axios.post(
			`${store.state.baseURL}/comment/`,
			{
				comment,
				parser,
			},
			{
				headers: {
					Authorization: `token ${cookie.get("auth_token")}`,
				},
			}
		);
		return data;
	} catch (error) {
		throw new Error(error);
	}
};

const updateComment = async ({ id, parser, comment }) => {
	try {
		const { data } = await axios.put(`${store.state.baseURL}/comment/${id}/`, {
			parser,
			comment,
		},
			{
				headers: {
					Authorization: `token ${cookie.get("auth_token")}`,
				}
			});
		return data;
	} catch (error) {
		throw new Error(error);
	}
};

const deleteComment = async ({ id }) => {
	try {
		await axios.delete(`${store.state.baseURL}/comment/${id}/`,
			{
				headers: {
					Authorization: `token ${cookie.get("auth_token")}`,
				},
			});
	} catch (error) {
		throw new Error(error);
	}
};

const createFavoriteParser = async ({ user, parser }) => {
	try {
		const { data } = await axios.post(`${store.state.baseURL}/usersfavorite`, {
			user,
			parser,
		},
			{
				headers: {
					Authorization: `token ${cookie.get("auth_token")}`,
				}
			});
		return data;
	} catch (error) {
		throw new Error(error);
	}
};

export { downloadFile, getComments, createComment, createFavoriteParser, updateComment, deleteComment };
