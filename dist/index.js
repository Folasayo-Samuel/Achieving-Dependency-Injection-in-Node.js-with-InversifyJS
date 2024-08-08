"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
require("reflect-metadata");
const inversify_config_1 = require("./inversify.config");
const ninja = inversify_config_1.myContainer.get("Warrior");
console.log(ninja.fight()); // Outputs: cut!
console.log(ninja.sneak()); // Outputs: hit!
