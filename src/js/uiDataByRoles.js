const navBarForManager = [
    { id: 1, selected: false, tab: "users", icon_fill: "", text: "Пользователи" },
    { id: 2, selected: false, tab: "parsources", icon_fill: "", text: "Все парсеры" },
	{ id: 3, selected: false, tab: "appeals", icon_fill: "", text: "Обращения" },
	{ id: 4, selected: false, tab: "profile", icon_fill: "", text: "Мой профиль" },
]

const navBarForUser = [
    { id: 1, selected: false, tab: "appeals", icon_fill: "", text: "Обращения" },
	{ id: 2, selected: false, tab: "parsources", icon_fill: "" , text: "Мои парсеры"},
	{ id: 3, selected: false, tab: "favorites", icon_fill: "", text: "Избраное" },
	{ id: 4, selected: false, tab: "profile", icon_fill: "", text: "Мой профиль" },
]

export { navBarForUser, navBarForManager };