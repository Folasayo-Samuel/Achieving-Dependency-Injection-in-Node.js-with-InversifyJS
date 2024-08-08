// src/index.ts
import "reflect-metadata";
import { myContainer } from "./inversify.config";
import { Warrior } from "./interfaces";

const ninja = myContainer.get<Warrior>("Warrior");
console.log(ninja.fight()); // Outputs: cut!
console.log(ninja.sneak()); // Outputs: hit!
