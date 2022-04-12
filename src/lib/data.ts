export interface IGame {
	name: string;
	description: string;
	img: {
		sm: string;
		lg: string;
	};
}
export const games: IGame[] = [
	{
		name: 'Rocket League',
		description:
			'A vehicular soccer video game developed and published by Psyonix',
		img: {
			sm: 'https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/5748aa76-eaff-451a-b5bb-3bff8a4f4fc2_1200x1600-f0107f8dec9b4659b77ef166f92b3637?h=854&resize=1&w=640',
			lg: 'https://cdn2.unrealengine.com/egs-rl-mustang-desktop-1280x702-1248x702-7c5043ecef80.png?h=1080&resize=1&w=1920',
		},
	},
	{
		name: 'Fortnite',
		description: 'An online video game developed by Epic Games',
		img: {
			sm: 'https://cdn2.unrealengine.com/19br-keyart-egs-launcher-fc-1200x1600-thumb-alt-1200x1600-1499c260c3d4.jpg',
			lg: 'https://cdn2.unrealengine.com/19br-keyart-egs-launcher-breaker-1920x1080-alt-1920x1080-6c7888b1de81.jpg?h=1080&resize=1&w=1920',
		},
	},
	{
		name: 'Rumbleverse',
		description:
			'An all-new, free-to-play, 40-person Brawler Royale where anyone can be a champion.',
		img: {
			sm: 'https://cdn2.unrealengine.com/egs-rumbleverse-thumb-1200x1600-1200x1600-bee70ce217ad.jpg',
			lg: 'https://cdn2.unrealengine.com/egs-rumbleverse-desktop-1920x1080-1920x1080-8fd45dabf5db.jpg?h=1080&resize=1&w=1920',
		},
	},
	{
		name: 'Final fantasy VII',
		description: 'A 1997 role-playing video game developed by Square',
		img: {
			sm: 'https://cdn2.unrealengine.com/end-plus-portrait-offer-image-with-logo-1200x1600-1200x1600-6c375adec92d.jpg',
			lg: 'https://cdn2.unrealengine.com/egs-finalfantasyviiremakeintergrade-squareenix-s1-2560x1440-2560x1440-6f7b84c569fc.jpg?h=1080&resize=1&w=1920',
		},
	},
	{
		name: 'Homeworld 3',
		description:
			'An upcoming real-time strategy video game currently being developed',
		img: {
			sm: 'https://cdn2.unrealengine.com/egs-homeworld-3-epic-thumb-1200x1600-1200x1600-ac4f7a4b136c.jpg',
			lg: 'https://cdn2.unrealengine.com/egs-homeworld-3-desktop-1248x702-1248x702-5d38d90b7d90.jpg?h=1080&resize=1&w=1920',
		},
	},
	{
		name: 'Witchy Wood',
		description:
			'A crafting adventure game set in an expressive land of gothic fables and fairytales',
		img: {
			sm: 'https://cdn1.epicgames.com/offer/8bd7d123bc59474ebb2552793dc0fdbb/EGS_Wytchwood_Alientrap_S2_1200x1600-92eda3068cbfa6e1ed08479dbdb350bd?h=480&resize=1&w=360',
			lg: 'https://cdn2.unrealengine.com/egs-wytchwood-alientrap-g1a-01-1920x1080-d7b146362134.jpg',
		},
	},
];
