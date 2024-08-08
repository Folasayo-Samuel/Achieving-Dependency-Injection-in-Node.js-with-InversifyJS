import { injectable, inject } from "inversify";
import { Warrior, Weapon, ThrowableWeapon } from "./interfaces";

@injectable()
export class Katana implements Weapon {
  public hit(): string {
    return "cut!";
  }
}

@injectable()
export class Shuriken implements ThrowableWeapon {
  public throw(): string {
    return "hit!";
  }
}

@injectable()
export class Ninja implements Warrior {
  private _katana: Weapon;
  private _shuriken: ThrowableWeapon;

  public constructor(
    @inject("Weapon") katana: Weapon,
    @inject("ThrowableWeapon") shuriken: ThrowableWeapon
  ) {
    this._katana = katana;
    this._shuriken = shuriken;
  }

  public fight(): string {
    return this._katana.hit();
  }

  public sneak(): string {
    return this._shuriken.throw();
  }
}
