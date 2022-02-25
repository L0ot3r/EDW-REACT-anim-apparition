import React, { useState } from "react";
import "./Scroll.css";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";

export default function Scroll() {
    const [toggleTxt, setToggleTxt] = useState(false);

    const animation = useSpring({
        opacity: toggleTxt ? 1 : 0,
        transform: toggleTxt ? "translateX(0)" : "translateX(-50%)",
    });

    return (
        <div>
            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, iure harum. Tempora cupiditate necessitatibus vero
                similique labore dolorum modi fugit quasi corrupti accusamus
                culpa, dolor eos. Voluptatem modi nihil animi aut dignissimos
                numquam exercitationem deleniti aspernatur aliquid doloremque,
                temporibus non architecto distinctio ea error itaque eveniet
                asperiores, eaque iure. Fuga perferendis excepturi, eaque
                similique enim praesentium nemo. Ipsa voluptatem natus facilis
                dicta, voluptate ipsam modi autem. Nostrum eaque repellendus
                deleniti dolores velit nemo voluptatibus eos laboriosam laborum.
                Sequi, eveniet rem cupiditate aliquam corrupti sit sunt, fuga
                dolore ab praesentium, ullam rerum suscipit voluptates accusamus
                error placeat tenetur nisi repellendus. Unde quisquam ipsa nobis
                alias repudiandae. Dolorem ex maxime labore deserunt ratione,
                cum officiis consequuntur libero ad magnam ea at ab explicabo!
                Molestias, nobis perspiciatis asperiores commodi impedit optio
                autem, consectetur quo dolorem placeat voluptatibus minima
                labore explicabo, accusantium voluptas sint iusto hic recusandae
                doloribus? Expedita a, harum dolor saepe hic quia voluptatibus
                possimus fuga assumenda suscipit vero! Qui quisquam voluptate
                sunt alias accusamus maxime quo porro in id! Saepe, culpa
                voluptas fugiat recusandae amet accusamus doloremque? Quibusdam
                magnam sapiente vitae numquam natus expedita, impedit assumenda
                nihil nesciunt quas consequatur mollitia. Numquam a quo itaque
                eius fugiat possimus suscipit est dignissimos.
            </p>
            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, iure harum. Tempora cupiditate necessitatibus vero
                similique labore dolorum modi fugit quasi corrupti accusamus
                culpa, dolor eos. Voluptatem modi nihil animi aut dignissimos
                numquam exercitationem deleniti aspernatur aliquid doloremque,
                temporibus non architecto distinctio ea error itaque eveniet
                asperiores, eaque iure. Fuga perferendis excepturi, eaque
                similique enim praesentium nemo. Ipsa voluptatem natus facilis
                dicta, voluptate ipsam modi autem. Nostrum eaque repellendus
                deleniti dolores velit nemo voluptatibus eos laboriosam laborum.
                Sequi, eveniet rem cupiditate aliquam corrupti sit sunt, fuga
                dolore ab praesentium, ullam rerum suscipit voluptates accusamus
                error placeat tenetur nisi repellendus. Unde quisquam ipsa nobis
                alias repudiandae. Dolorem ex maxime labore deserunt ratione,
                cum officiis consequuntur libero ad magnam ea at ab explicabo!
                Molestias, nobis perspiciatis asperiores commodi impedit optio
                autem, consectetur quo dolorem placeat voluptatibus minima
                labore explicabo, accusantium voluptas sint iusto hic recusandae
                doloribus? Expedita a, harum dolor saepe hic quia voluptatibus
                possimus fuga assumenda suscipit vero! Qui quisquam voluptate
                sunt alias accusamus maxime quo porro in id! Saepe, culpa
                voluptas fugiat recusandae amet accusamus doloremque? Quibusdam
                magnam sapiente vitae numquam natus expedita, impedit assumenda
                nihil nesciunt quas consequatur mollitia. Numquam a quo itaque
                eius fugiat possimus suscipit est dignissimos.
            </p>

            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, iure harum. Tempora cupiditate necessitatibus vero
                similique labore dolorum modi fugit quasi corrupti accusamus
                culpa, dolor eos. Voluptatem modi nihil animi aut dignissimos
                numquam exercitationem deleniti aspernatur aliquid doloremque,
                temporibus non architecto distinctio ea error itaque eveniet
                asperiores, eaque iure. Fuga perferendis excepturi, eaque
                similique enim praesentium nemo. Ipsa voluptatem natus facilis
                dicta, voluptate ipsam modi autem. Nostrum eaque repellendus
                deleniti dolores velit nemo voluptatibus eos laboriosam laborum.
                Sequi, eveniet rem cupiditate aliquam corrupti sit sunt, fuga
                dolore ab praesentium, ullam rerum suscipit voluptates accusamus
                error placeat tenetur nisi repellendus. Unde quisquam ipsa nobis
                alias repudiandae. Dolorem ex maxime labore deserunt ratione,
                cum officiis consequuntur libero ad magnam ea at ab explicabo!
                Molestias, nobis perspiciatis asperiores commodi impedit optio
                autem, consectetur quo dolorem placeat voluptatibus minima
                labore explicabo, accusantium voluptas sint iusto hic recusandae
                doloribus? Expedita a, harum dolor saepe hic quia voluptatibus
                possimus fuga assumenda suscipit vero! Qui quisquam voluptate
                sunt alias accusamus maxime quo porro in id! Saepe, culpa
                voluptas fugiat recusandae amet accusamus doloremque? Quibusdam
                magnam sapiente vitae numquam natus expedita, impedit assumenda
                nihil nesciunt quas consequatur mollitia. Numquam a quo itaque
                eius fugiat possimus suscipit est dignissimos.
            </p>
            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, iure harum. Tempora cupiditate necessitatibus vero
                similique labore dolorum modi fugit quasi corrupti accusamus
                culpa, dolor eos. Voluptatem modi nihil animi aut dignissimos
                numquam exercitationem deleniti aspernatur aliquid doloremque,
                temporibus non architecto distinctio ea error itaque eveniet
                asperiores, eaque iure. Fuga perferendis excepturi, eaque
                similique enim praesentium nemo. Ipsa voluptatem natus facilis
                dicta, voluptate ipsam modi autem. Nostrum eaque repellendus
                deleniti dolores velit nemo voluptatibus eos laboriosam laborum.
                Sequi, eveniet rem cupiditate aliquam corrupti sit sunt, fuga
                dolore ab praesentium, ullam rerum suscipit voluptates accusamus
                error placeat tenetur nisi repellendus. Unde quisquam ipsa nobis
                alias repudiandae. Dolorem ex maxime labore deserunt ratione,
                cum officiis consequuntur libero ad magnam ea at ab explicabo!
                Molestias, nobis perspiciatis asperiores commodi impedit optio
                autem, consectetur quo dolorem placeat voluptatibus minima
                labore explicabo, accusantium voluptas sint iusto hic recusandae
                doloribus? Expedita a, harum dolor saepe hic quia voluptatibus
                possimus fuga assumenda suscipit vero! Qui quisquam voluptate
                sunt alias accusamus maxime quo porro in id! Saepe, culpa
                voluptas fugiat recusandae amet accusamus doloremque? Quibusdam
                magnam sapiente vitae numquam natus expedita, impedit assumenda
                nihil nesciunt quas consequatur mollitia. Numquam a quo itaque
                eius fugiat possimus suscipit est dignissimos.
            </p>
            <Waypoint
            bottomOffset="30%"
            onEnter={() => {
                if (!toggleTxt) {
                    setToggleTxt(true);
                }
            }}
            />
            <animated.div style={animation} className="cta-section">
                <h2>N'en ratez pas une miette</h2>
                <form>
                    <label htmlFor="email">
                        Inscrivez-vous à la newsletter
                    </label>
                    <input type="email" id="email" />
                </form>
            </animated.div>
            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, iure harum. Tempora cupiditate necessitatibus vero
                similique labore dolorum modi fugit quasi corrupti accusamus
                culpa, dolor eos. Voluptatem modi nihil animi aut dignissimos
                numquam exercitationem deleniti aspernatur aliquid doloremque,
                temporibus non architecto distinctio ea error itaque eveniet
                asperiores, eaque iure. Fuga perferendis excepturi, eaque
                similique enim praesentium nemo. Ipsa voluptatem natus facilis
                dicta, voluptate ipsam modi autem. Nostrum eaque repellendus
                deleniti dolores velit nemo voluptatibus eos laboriosam laborum.
                Sequi, eveniet rem cupiditate aliquam corrupti sit sunt, fuga
                dolore ab praesentium, ullam rerum suscipit voluptates accusamus
                error placeat tenetur nisi repellendus. Unde quisquam ipsa nobis
                alias repudiandae. Dolorem ex maxime labore deserunt ratione,
                cum officiis consequuntur libero ad magnam ea at ab explicabo!
                Molestias, nobis perspiciatis asperiores commodi impedit optio
                autem, consectetur quo dolorem placeat voluptatibus minima
                labore explicabo, accusantium voluptas sint iusto hic recusandae
                doloribus? Expedita a, harum dolor saepe hic quia voluptatibus
                possimus fuga assumenda suscipit vero! Qui quisquam voluptate
                sunt alias accusamus maxime quo porro in id! Saepe, culpa
                voluptas fugiat recusandae amet accusamus doloremque? Quibusdam
                magnam sapiente vitae numquam natus expedita, impedit assumenda
                nihil nesciunt quas consequatur mollitia. Numquam a quo itaque
                eius fugiat possimus suscipit est dignissimos.
            </p>
        </div>
    );
}
