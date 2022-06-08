import axios from 'axios';
import store from '@/store';
import cookie from 'vue-cookies';

async function logout() {
	try {
		const request = await axios.post(`${store.state.baseURL}/auth/token/logout/`, {}, {
			headers: { Authorization: `token ${cookie.get("auth_token")}`, },
		});

		if (request.status === 204) {
			console.log("Logout successfully");
			this.$router.push({ name: 'login' })
		}
	}
	catch {
		console.error(`
∧＿∧
(｡･ω･｡)つ━☆・*。
⊂\\  /   ・゜+.
しーＪ\\  °。+  Something went wrong.`
		);

		//*cat-girl ascii art (maybe...maybe)
		// 		console.log(`
		// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
		// ⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⡿⢦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⣦⠀⠀⠀⠀
		// ⠀⠀⠀⠀⠀⠀⠀⢰⣿⣽⣷⠀⠙⢷⣦⡀⠀⣀⣀⣠⣤⣀⣀⣀⣀⣀⠀⠀⠀⠀⠀⣠⣾⡯⠟⠻⣧⠀⠀⠀
		// ⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⠝⣷⣤⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣤⣞⠉⢀⢀⣿⣤⣻⣆⠀⠀
		// ⠀⠀⠀⠀⠀⠀⠀⣿⢿⡟⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⡾⠻⣿⣻⣿⡀⠀
		// ⠀⠀⠀⠀⠀⠀⠀⢿⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⡼⠿⢻⡇⠀
		// ⠀⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⢀⣾⠃⠀
		// ⠀⠀⠀⠀⠀⠀⣸⣿⣿⣿⣿⣿⣿⣿⡿⠋⣼⣿⣿⣿⣿⡟⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋⠀⠀
		// ⠀⠀⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⡿⢷⡾⣾⠿⢿⣿⣿⣿⣇⣿⣿⣿⣿⡷⢿⠾⢿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀
		// ⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣅⣼⣅⣿⣀⣼⣿⣿⣿⣿⣿⣿⣿⣿⡇⠈⣧⣬⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀
		// ⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣷⣿⠟⠉⠉⣙⢿⣿⠛⠛⠛⠛⠛⣩⣿⡿⠿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀
		// ⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⠟⠋⠀⢠⣾⣿⣷⣍⠀⠀⠀⠀⠀⠛⢻⣵⣾⣶⡄⠈⢿⣿⣿⣿⣿⣿⣿⣿⠀
		// ⠀⠀⠀⠀⣾⣿⣿⣿⢻⣿⣿⠠⢤⡤⢼⣟⢿⣿⡟⠀⠀⠀⠀⠀⠀⢸⡿⠻⣿⠄⣀⢨⣽⣿⣿⣿⣿⣿⡿⠀
		// ⠀⠀⠀⠀⣿⣿⣿⣿⢸⣿⣿⡆⠀⠀⠀⠙⠟⠋⠀⠀⠀⠀⠀⠀⠀⠈⠿⠿⠋⠀⠙⠻⢾⣿⣿⣿⣿⣿⡇⠀
		// ⠀⠀⠀⠀⣿⣿⣿⣿⢸⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿⣿⣿⣿⡇⠀
		// ⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⢿⣿⣿⣿⡇⠀
		// ⠀⠀⠀⠀⣿⣿⣿⣿⣏⠉⠉⠉⠉⠛⢦⣀⠀⠀⠀⠀⠀⠰⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣥⣿⣿⣿⣿⠇⠀
		// ⠀⠀⠀⢀⣿⣿⣿⣿⣿⣦⠀⠀⠀⠀⠀⠈⠙⠲⣶⣤⣤⣄⣀⣀⣀⣠⡴⠾⠛⠉⣩⣿⣷⣿⣿⣿⣿⣿⠀⠀
		// ⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⢀⣀⣼⠇⠀⠈⠉⠉⠉⠹⣅⡀⠀⣠⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀
		// ⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣦⠤⢶⣶⢿⣏⠁⠀⠀⠀⠀⠀⠀⠀⠀⠭⠟⢲⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀
		// ⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡀⠙⠶⣝⣓⣶⣤⣀⣀⣀⣀⣀⣀⣠⠤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀
		// ⢀⡾⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠀⠀⠉⠉⠙⢶⣤⣀⣀⣠⠄⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀
		// ⠈⠁⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀
		// ⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣦⡀⠀⠀⠀⠀⠀⢠⣾⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇
		// ⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢀⡈⠀⠀⠀⠀⠀⠀⢸⡏⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿
		// ⢠⣾⡟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠉⠁⠀⠀⠀⠀⠀⠀⠸⠦⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃
		// ⠀⢾⣥⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣷⠀
		// ⠀⠀⣽⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⣿⣿⣿⣿⣿⣿⢿⡽⠟⠉⢀⣿⠀
		// ⠀⢀⡿⠀⠻⣿⣿⣿⣿⣿⣿⣿⣿⠦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⢩⣿⣿⣿⡿⠛⠁⠈⠀⠀⠀⠀⣿⠀
		// ⠀⠸⣥⣀⠀⠀⢻⣿⣿⣿⣿⣿⣿⡉⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣮⢻⣿⣿⠁⠀⠀⠀⠀⠀⠀⢠⡿⠀
		// ⠀⠀⠀⠈⣹⣻⣿⠿⣿⣿⣿⠁⠉⠁⠀⠀⠻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠹⡝⢿⣿⣀⣀⣠⡴⢶⡾⠛⠉⠀⠀
		// ⠀⠀⠀⠀⣿⠙⠃⢀⣿⣿⣇⠀⠀⠀⠀⡆⠀⠙⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡋⠉⠁⠀⢸⡇⠀⠀⠀⠀
		// ⠀⠀⠀⠀⣿⠀⢸⡿⡿⠋⠁⠀⠀⠀⠀⣷⠀⠀⠈⢳⡄⠀⠀⠀⠀⠀⠀⢸⠞⠻⡇⠀⠀⠀⢸⠁⠀⠀⠀⠀
		// ⠀⠀⠀⠀⣿⠀⠈⢻⡇⠀⠀⠀⠀⠀⠀⢻⣆⠀⠀⠀⠹⣆⠀⠀⠀⠀⠀⠈⡆⠀⣷⠀⠀⠠⡟⠀⠀⠀⠀⠀
		// ⠀⠀⠀⠀⡇⠀⠀⣸⡇⠀⠀⠀⠀⠀⠀⠀⠻⠦⣀⣀⣀⡈⢳⡀⠀⠀⠀⠀⢳⡀⠹⡇⠀⠸⡇⠀⠀⠀⠀⠀
		// ⠀⠀⠀⢰⡇⠀⡔⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠃⠙⠃⠀⠀⠀⠈⣷⠀⢿⡀⠰⡇⠀⠀⠀⠀⠀
		// ⠀⠀⠀⢾⠁⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣇⢘⡇⠀⠀⠀⠀⠀
		// ⠀⠀⠀⢸⡇⠀⣽⡃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣞⡇⠀⠀⠀⠀⠀
		// ⠀⠀⠀⢨⡇⠀⠉⠓⣶⣦⣤⣄⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠀⣀⣤⡾⠿⢳⠀⠀⠀⠀⠀
		// ⠀⠀⠀⢸⠀⠀⠀⢠⣸⠀⠀⠉⠉⠉⠉⠛⠛⠛⠛⡗⢲⠖⠒⠒⠒⠒⠒⠒⠚⠋⢹⡟⠀⠀⢸⡆⠀⠀⠀⠀
		// 		`);

	}
}

export { logout }