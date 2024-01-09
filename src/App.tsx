import type { Component } from 'solid-js';
import { For } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const images = [
"https://cdn.discordapp.com/attachments/1188176502353834036/1189020050175295508/mojenai_corgi_playing_with_balls_f85fba2d-1d8a-4242-9caf-c342970d0fc6.png",
"https://media.discordapp.net/attachments/1188176502353834036/1189016821349748836/mojenai_corgi_playing_with_balls_93546acb-85d9-4e39-be93-22a44d62ea5d.png",
"https://cdn.discordapp.com/attachments/1188176502353834036/1189019247951757362/mojenai_corgi_playing_with_balls_f1da0d6b-6fad-444e-b121-dc602a17e8af.png"
]

const App: Component = () => {
  return (
    <div class={styles.App}>
     <div class={styles.container}>
      {images.map((image)=>(
        <div class={styles.img_container}>
            <img src={image} />
            <div class={styles.grid_container}>
              <For each={Array(4)}>{(_, i) => (
                <div class={styles.grid_item}>
                  <button class={styles.button}>BUTTON {i()+1}</button>
                </div>
              )}</For>
            </div>
        </div>
      ))}
     </div>
    </div>
  );
};

export default App;
