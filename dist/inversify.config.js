"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myContainer = void 0;
// src/inversify.config.ts
const inversify_1 = require("inversify");
const entities_1 = require("./entities");
const myContainer = new inversify_1.Container();
exports.myContainer = myContainer;
myContainer.bind("Warrior").to(entities_1.Ninja);
myContainer.bind("Weapon").to(entities_1.Katana);
myContainer.bind("ThrowableWeapon").to(entities_1.Shuriken);
