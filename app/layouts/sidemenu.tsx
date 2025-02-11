import { Link, Outlet } from "react-router";

export default function Sidemenu() {
	const menuItems = [
		{ name: "記事一覧", path: "/" },
		{ name: "人気記事", path: "/popular" },
		{ name: "検索", path: "/search" },
	];

	return (
		<div>
			<aside>
				<nav>
					{menuItems.map((item) => (
						<Link key={item.name} to={item.path}>
							{item.name}
						</Link>
					))}
				</nav>
			</aside>
			<Outlet />
		</div>
	);
}
