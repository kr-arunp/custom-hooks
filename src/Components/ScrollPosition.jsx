import { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import useScrollPosition from "./hooks/useScrollPosition";

function ScrollIndicator() {
	const [scrollPosition, lastScrollPosition] = useScrollPosition();
	const handleScrollToTop = () => {
		window.scrollTo({ top: lastScrollPosition, behavior: "smooth" });
	};
	return (
		<>
			<div className="absolute h-[100vh] bg-white">
				<div
					className={`
					}fixed  bottom-4 right-4 transition-opacity duration-500 h-[10vh]`}
				>
					<div
						className="relative p-2 bg-white rounded-full shadow-md cursor-pointer "
						onClick={handleScrollToTop}
					>
						<FaArrowCircleUp
							size={50}
							color="white"
							className="fixed right-0 mr-12 text-2xl bg-black bottom-12"
						/>
					</div>
					<div className="fixed bottom-0 p-5 mt-2 text-lg text-black bg-purple-400 shadow-sm">
						Current scroll position: {scrollPosition} (Last:{" "}
						{lastScrollPosition})
					</div>
				</div>
				<div className="overflow-hidden overflow-x-hidden overflow-y-scroll text-black ">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
					animi sequi. Rerum vitae quisquam sint quidem reprehenderit assumenda,
					qui illo! Ad architecto praesentium earum exercitationem! Deserunt
					sunt in, libero obcaecati necessitatibus quaerat commodi, unde
					reprehenderit voluptatem sint culpa eos laudantium excepturi rerum
					suscipit maiores ipsa blanditiis sequi laborum atque! Inventore iusto
					sequi obcaecati repellendus porro iure? Maiores facere corporis
					tempore placeat numquam ullam architecto? Debitis molestiae odit neque
					voluptatem provident blanditiis rem molestias, quisquam, dolores
					aperiam fugiat iure cupiditate asperiores ipsum nostrum fugit unde
					delectus voluptate dolorem, quis facilis impedit veniam velit?
					Accusamus corrupti voluptates hic rerum, magni reiciendis ad non
					quisquam inventore maxime doloribus repellendus exercitationem soluta
					ex error aperiam facilis animi quam earum nulla unde fugiat sint!
					Laudantium officia illo repudiandae asperiores natus! Quidem aliquid
					ea distinctio facere laboriosam nam error dignissimos quas
					voluptatibus blanditiis molestiae ad praesentium consequatur, facilis
					aperiam ratione labore quae deserunt. Quod deserunt, fuga aperiam
					voluptatum libero corporis similique, possimus impedit qui ipsam
					veritatis suscipit commodi nam dignissimos! Rem iste non numquam.
					Provident, perspiciatis cum commodi dolore natus voluptates ipsum
					reiciendis officiis vitae ducimus magnam mollitia. Perferendis error
					dolorem velit necessitatibus libero quibusdam deleniti, labore,
					pariatur, molestiae provident maxime adipisci sit hic vero praesentium
					aliquid reprehenderit dolores dicta esse! Molestiae, error earum
					libero necessitatibus, quae voluptate eum ipsa, aliquid repellendus a
					tempore vitae. Quo nobis natus rem dolorem delectus ratione tempora
					labore inventore, laborum asperiores laudantium, consequuntur error
					iusto, aperiam quae amet unde magnam optio? Reprehenderit temporibus
					ratione itaque quo esse aliquam enim quibusdam blanditiis provident
					excepturi eligendi, tenetur debitis at quam a optio impedit. Corrupti
					illum dolor sequi fuga minima, eum vero dolorum inventore culpa
					repellat laborum, velit modi at repudiandae sapiente fugit optio, enim
					quidem animi. Nemo iste amet incidunt error vel quos perferendis totam
					quis architecto nesciunt id soluta, alias, sint exercitationem minima
					sunt. Quidem porro debitis earum explicabo distinctio accusantium
					autem suscipit aspernatur. Sequi accusamus molestias cumque,
					distinctio praesentium quas, qui, modi dolor asperiores repellat
					consequuntur a laboriosam vel aut. Excepturi soluta corporis hic eos
					exercitationem sit dolorum quaerat. Sit distinctio, delectus porro
					nihil, exercitationem fuga voluptate ratione laboriosam reiciendis,
					tenetur praesentium quod possimus amet aliquid laborum. Quod nihil
					eaque qui maxime autem recusandae iure! Ipsa unde sequi ducimus velit
					esse, cumque magni asperiores. Veniam eligendi, voluptatem laudantium
					consequuntur vel, minus modi error ex perferendis culpa iure suscipit
					soluta quasi tempora consequatur! Impedit iusto, veritatis doloremque
					temporibus adipisci aliquid asperiores. cupiditate, quis, tempore
					obcaecati, assumenda aliquam dolore impedit qui eligendi officia
					suscipit eaque? Aspernatur debitis, repellat iste corporis eos
					assumenda molestias molestiae dolorem aut fugit autem reprehenderit
					iusto eveniet harum officia quam? Quisquam, doloribus! Doloribus illum
					commodi sequi nesciunt pariatur eaque! Quaerat quisquam, voluptatem
					esse nisi illum earum deleniti voluptates, culpa, quibusdam adipisci
					assumenda placeat. Doloribus nostrum vero accusamus suscipit! Atque
					cum optio saepe, accusamus consequuntur velit aut asperiores corporis,
					repudiandae tempora quasi sed deserunt tenetur sequi iusto at ullam
					non excepturi? Doloribus molestias exercitationem tenetur autem est
					voluptas iste delectus accusamus suscipit iusto amet deleniti incidunt
					ratione, esse quod consectetur, ullam veniam, similique harum vero
					perferendis ea distinctio placeat. Nulla ad rem magni veritatis
					officia, accusamus modi consequatur expedita eum eveniet aperiam neque
					mollitia fuga eius saepe facilis et labore cumque praesentium quae,
					tempore quo velit molestiae. Repudiandae, hic reprehenderit? Est
					pariatur exercitationem quos magni totam delectus assumenda
					voluptatibus perspiciatis, tempora doloribus adipisci provident minus,
					enim corrupti voluptas ipsum unde voluptate repudiandae similique ad
					et. Soluta, possimus tenetur libero eveniet dolores suscipit quaerat
					corrupti unde consectetur commodi asperiores quo saepe odit odio
					voluptatum consequatur veniam illum recusandae omnis optio earum?
					Officia est ullam rem cupiditate. Aliquid, in! Laboriosam, illum quod?
					Beatae doloremque inventore dolore, nulla adipisci est laborum eveniet
					veniam illum non! Lorem ipsum dolor sit amet consectetur, adipisicing
					elit. Totam laudantium magni minima, placeat vel quis voluptatibus a
					reiciendis nisi porro. Magnam dolores magni consectetur eveniet dolor
					aut, nostrum totam, dolorum fugit voluptatibus deleniti veniam quo est
					dolorem assumenda modi nam sit ipsam velit libero neque laboriosam.
					Corrupti est doloremque harum totam id maiores reiciendis magnam et.
					Nam, est ex quibusdam dicta provident animi, voluptates quis officia
					alias modi, ducimus inventore nisi. Voluptatem velit impedit
					laboriosam reprehenderit blanditiis doloribus beatae totam iure non,
					nemo cupiditate expedita odit, possimus, vel accusantium? Delectus
					maxime ducimus velit illo porro possimus deserunt quisquam voluptate
					ratione nulla dicta cum, veniam repudiandae molestias enim labore quo
					alias soluta esse eius blanditiis? Laudantium, quibusdam laborum! Odio
					magni iusto dolorum eos animi, nobis maiores deserunt nesciunt
					obcaecati sit nam quis consectetur voluptates laborum voluptatum
					sapiente. Nemo illum dolores laudantium quas vero vitae ducimus et
					voluptatibus veritatis nam assumenda dignissimos, magni dicta modi
					deleniti explicabo culpa perspiciatis architecto molestiae unde
					temporibus maiores. Iure qui illum error, et laudantium necessitatibus
					eos dolorem libero, quibusdam obcaecati odio dolor molestias magnam
					incidunt laborum quam dolore? Blanditiis quod inventore facilis fuga
					nemo totam vero ipsam neque nobis nam at corrupti aperiam, soluta
					amet? Quia eaque, ducimus provident nam, saepe corrupti, molestiae
					inventore necessitatibus voluptates enim alias odit consequatur
					consequuntur? Corporis autem voluptatibus harum ut placeat quam
					doloribus magni repellendus dolore et? Repellendus, repellat omnis
					suscipit adipisci alias voluptas, error similique velit vel facere
					architecto aliquam voluptatibus vero ipsa praesentium deserunt odit
					repudiandae, consequuntur quod ducimus molestiae asperiores?
					Explicabo, velit facilis omnis vitae maiores minus magnam alias sit
					exercitationem illum quidem vero. Accusantium veritatis enim ut autem
					ipsam nostrum, molestias consequatur ullam aliquid, reiciendis atque
					qui debitis numquam voluptatum ratione doloribus nihil ex laudantium
					voluptas ab placeat aspernatur sapiente. Reiciendis architecto, animi
					praesentium repudiandae magnam quas voluptatem quia minus dolor
					quibusdam nam impedit amet molestias, ipsa ducimus quae temporibus
					quasi suscipit excepturi at soluta quisquam. Similique nobis delectus
					rerum ea necessitatibus fugiat quas minima, distinctio reiciendis
					voluptatum consectetur cumque error. Omnis facilis voluptates in ab ex
					nesciunt tenetur exercitationem. Facere, culpa. Quae totam ducimus
					perferendis debitis omnis tenetur culpa, est inventore ea alias
					mollitia, a voluptatem itaque voluptates. Labore id aperiam voluptate
					sapiente minus, obcaecati consectetur veniam debitis similique earum
					quis sequi accusamus hic exercitationem fuga, rem cupiditate? In
					fugiat eius ab alias iste necessitatibus numquam assumenda fuga
					architecto. Porro aliquid nihil accusamus delectus nesciunt! Lorem
					ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem
					odio quo alias voluptatibus autem assumenda eos at, rem laboriosam
					suscipit, harum illo nam iusto earum ex, a consequuntur reprehenderit
					aperiam. Consequatur enim possimus nesciunt non ratione adipisci,
					quaerat natus pariatur nulla fuga esse nobis libero dolor explicabo
					quo ducimus laboriosam similique sapiente sint temporibus! Maiores
					distinctio ratione hic reprehenderit rem veritatis perferendis eum
					asperiores temporibus dolorem fugiat et illo, consequuntur excepturi
					repellendus quasi, suscipit sit laudantium sequi sapiente? Inventore
					dolores nobis aperiam consequatur. Cum nihil vero, cupiditate quidem,
					facilis delectus labore dolor, voluptas fuga eos corporis? A rerum
					quis, recusandae, et cumque, illum repellendus placeat porro quaerat
					consequuntur cum repudiandae fugit repellat aperiam aut ullam fuga?
					Quibusdam, eius temporibus vitae quo ad quis dolor eos veniam a
					maiores? Nam omnis sapiente ipsam voluptates ab natus eius corrupti
					animi commodi! Voluptatem, minima eos quidem dignissimos rerum facere
					harum, quae, ullam explicabo praesentium iure dolorum facilis
					necessitatibus ipsum officiis odit ipsa sed dolore debitis. Laborum,
					sit. Dolore, perferendis. Quis, quia necessitatibus, nihil tempore in
					minima qui numquam odio repellat ad cumque ab iusto inventore error.
					Repudiandae neque facere repellendus. Saepe reiciendis eius quas?
					Eaque molestiae animi recusandae cumque ex eum voluptatum repudiandae
					labore modi, quae repellendus similique iste hic dolorem obcaecati
					consectetur laudantium ipsum harum deleniti natus! Rem molestias,
					fugiat laudantium sapiente optio facere vel nihil repellendus
					consequuntur distinctio provident perspiciatis voluptate iusto,
					mollitia placeat corrupti, deleniti ab nobis molestiae libero modi sed
					necessitatibus voluptates? Modi, provident minus, vero pariatur
					mollitia nobis nostrum dignissimos officiis amet numquam cumque.
					Praesentium iste suscipit nobis reprehenderit blanditiis aliquam
					recusandae quos ipsum dicta eos accusantium voluptas nesciunt enim
					doloribus molestias possimus quis neque vero dolorum, laboriosam
					mollitia totam sint placeat inventore? Soluta esse quae itaque
					molestias nihil numquam eos facilis excepturi eum corporis omnis et
					voluptatum nulla ipsam enim magnam placeat temporibus, voluptates
					nostrum non est maxime impedit. Quia dignissimos voluptate ut ipsam!
					Fuga doloribus illo iste, ut inventore, sit quo fugiat praesentium
					corporis quae debitis temporibus animi id veniam ipsa rem nostrum
					labore provident in a, soluta similique! Earum, pariatur blanditiis
					porro perspiciatis, quia odio ex voluptatibus repudiandae aperiam sint
					quae animi. Nulla a ut repudiandae quo? Facilis velit dolore quam
					omnis architecto sit voluptas sequi porro nesciunt, vel reiciendis aut
					voluptate molestiae ullam placeat quasi laudantium blanditiis eligendi
					provident nisi enim quod! Amet, commodi vitae. Corporis expedita
					laudantium, praesentium aliquid molestiae voluptas tenetur delectus,
					officiis illum impedit similique amet labore ab omnis quidem
					exercitationem quos sapiente architecto nisi consequuntur cum
					necessitatibus voluptate itaque suscipit! Porro autem quaerat eveniet
					repellendus iure asperiores architecto saepe, doloribus amet
					recusandae voluptates aut commodi dolore nihil! Iste facere earum in
					eum sint!
				</div>

				<div class="h-screen w-full flex flex-row flex-wrap gap-4 justify-center">
					<img
						src="https://source.unsplash.com/random/1400×1000/?React"
						alt="Not Found"
						className="l"
					/>
					<img
						src="https://source.unsplash.com/random/1400×1000/?bitcoin"
						alt="Not Found"
						className="max-w-full max-h-full"
					/>
					<img
						src="https://source.unsplash.com/random/1400×1000/?nfts"
						alt="Not Found"
						className="max-w-full max-h-full"
					/>
					<img
						src="https://source.unsplash.com/random/1400×1000/?reactjs"
						alt="Not Found"
						className="max-w-full max-h-full"
					/>
					<img
						src="https://source.unsplash.com/random/1400×1000/?blockchain"
						alt="Not Found"
						className="max-w-full max-h-full"
					/>
					<img
						src="https://source.unsplash.com/random/1400×1000/?React"
						alt="Not Found"
					/>
					<img
						src="https://source.unsplash.com/random/1400×1000/?india"
						alt="Not Found"
					/>
					<img
						src="https://source.unsplash.com/random/1400×1000/?nature"
						alt="Not Found"
					/>
					<img
						src="https://source.unsplash.com/random/1400×1000/?fruits"
						alt="Not Found"
					/>
					<img
						src="https://source.unsplash.com/random/1400×1000/?stockmarket"
						alt="Not Found"
					/>
				</div>
			</div>
		</>
	);
}

export default ScrollIndicator;
